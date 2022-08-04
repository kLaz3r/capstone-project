import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styled from 'styled-components';

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <span className='item-count'>{cartCount}</span>
    </CartIconContainer>
  );
};

export default CartIcon;
