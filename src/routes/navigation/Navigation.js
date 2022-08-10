import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import CartIcon from '../../components/CartIcon/CartIcon';
import { selectIsCartOpen } from '../../store/cart/cart-selector';
import { signOutStart } from '../../store/user/user-action';
import { selectCurrentUser } from '../../store/user/user-selector';

const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => {
    dispatch(signOutStart());
  };
  return (
    <Fragment>
      <NavigationContainer className='navigation'>
        <LogoContainer className='logo-container' to='/'>
          <CrwnLogo className='logo'></CrwnLogo>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink className='nav-link' to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
