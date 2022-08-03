import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import './Checkout.scss';

const Checkout = () => {
  const { setIsCartOpen, cartItems, cartTotal } = useContext(CartContext);

  useEffect(() => {
    setIsCartOpen(false);
  }, []);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>Product</div>
        <div className='header-block'>Description</div>
        <div className='header-block'>Quantity</div>
        <div className='header-block'>Price</div>
        <div className='header-block'>Remove</div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item}></CheckoutItem>;
      })}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
