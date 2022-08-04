import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
`;

const Checkout = () => {
  const { setIsCartOpen, cartItems, cartTotal } = useContext(CartContext);

  useEffect(() => {
    setIsCartOpen(false);
  }, []);
  return (
    <CheckoutContainer>
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
    </CheckoutContainer>
  );
};

export default Checkout;