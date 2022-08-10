import React, { useState } from 'react';
import styled from 'styled-components';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import FormInput from '../FormInput/FormInput';

import { useDispatch } from 'react-redux/es/exports';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user-action';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const defaultFormFields = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields(); // resetFormFields
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        ></FormInput>
        <FormInput
          label='Password'
          required
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
        ></FormInput>
        <ButtonsContainer>
          <Button type='submit'>Sign in</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign-in
          </Button>
        </ButtonsContainer>
      </form>
    </div>
  );
};

export default SignInForm;
