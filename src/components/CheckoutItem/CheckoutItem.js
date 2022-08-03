import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/cart';
import './CheckoutItem.scss';

const CheckoutItem = ({ item }) => {
  const { incrementItem, decrementItem, removeItemFromCart } = useContext(
    CartContext
  );
  const incrementItemHandler = () => incrementItem(item.id);
  const decrementItemHandler = () => decrementItem(item.id);
  const removeItemFromCartHandler = () => removeItemFromCart(item.id);
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
