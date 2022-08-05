import { createContext, useReducer } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CART_ACTION_TYPES = {
  TOGGLE_IS_CART_OPEN: 'TOGGLE_IS_CART_OPEN',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  INCREMENT_ITEM: 'INCREMENT_ITEM',
  DECREMENT_ITEM: 'DECREMENT_ITEM',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const removeItemFromCart = (id) => {
    const newCartItems = cartItems.filter((item) => {
      return item.id !== id;
    });
    return newCartItems;
  };

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: !isCartOpen,
      };
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartCount: cartCount + 1,
        cartTotal: cartTotal + payload.price,
        cartItems: addCartItem(cartItems, payload),
      };
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartCount: cartCount - payload.quantity,
        cartTotal: cartTotal - payload.quantity * payload.price,
        cartItems: removeItemFromCart(payload.id),
      };
    case CART_ACTION_TYPES.DECREMENT_ITEM:
      if (payload.quantity > 1) {
        return {
          ...state,
          cartCount: cartCount - 1,
          cartTotal: cartTotal - payload.price,
          cartItems: cartItems.map((item) => {
            return item.id === payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item;
          }),
        };
      } else {
        return {
          ...state,
        };
      }
    case CART_ACTION_TYPES.INCREMENT_ITEM:
      return {
        ...state,
        cartCount: cartCount + 1,
        cartTotal: cartTotal + payload.price,
        cartItems: cartItems.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };

    default:
      throw new Error(`Invalid action type: ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [
    { isCartOpen, cartItems, cartCount, cartTotal },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

  const toggleIsCartOpen = () => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN });
  };
  const addItemToCart = (product) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload: product });
  };
  const removeItemFromCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
      payload: product,
    });
  };
  const decrementItem = (product) => {
    dispatch({ type: CART_ACTION_TYPES.DECREMENT_ITEM, payload: product });
  };
  const incrementItem = (product) => {
    dispatch({ type: CART_ACTION_TYPES.INCREMENT_ITEM, payload: product });
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    toggleIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    decrementItem,
    incrementItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
