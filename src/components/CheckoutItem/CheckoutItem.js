import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  clearItemToCart,
  removeItemToCart,
} from '../../store/cart/cart-action';
import { selectCartItems } from '../../store/cart/cart-selector';
import './CheckoutItem.scss';

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const incrementItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const decrementItemHandler = () =>
    dispatch(removeItemToCart(cartItems, item));
  const removeItemFromCartHandler = () =>
    dispatch(clearItemToCart(cartItems, item));
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className='name'>{item.name}</span>
      <span className='quantity'>
        <div onClick={decrementItemHandler} className='arrow'>
          &#10094;
        </div>
        <span className='value'>{item.quantity}</span>
        <div onClick={incrementItemHandler} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>${item.price}</span>
      <div className='remove-button' onClick={removeItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
