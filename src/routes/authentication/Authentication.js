import React from 'react';
import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import styled from 'styled-components';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;
`;

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </AuthenticationContainer>
  );
};

export default Authentication;
