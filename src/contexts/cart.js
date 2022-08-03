import { createContext, useState, useEffect } from 'react';

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const incrementItem = (id) => {
    const newCartItems = cartItems.map((item) => {
      return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
    });
    setCartItems(newCartItems);
  };
  const decrementItem = (id) => {
    const item = cartItems.find((item) => item.id === id);
    const quantity = item.quantity;
    if (quantity >= 2) {
      const newCartItems = cartItems.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
      });
      setCartItems(newCartItems);
    }
  };

  const removeItemFromCart = (id) => {
    const newCartItems = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(newCartItems);
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    incrementItem,
    decrementItem,
    removeItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
