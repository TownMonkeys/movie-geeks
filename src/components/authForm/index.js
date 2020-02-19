import React, { memo } from 'react';
import SignUpForm from './components/signUpFrom';
import LoginForm from './components/logInForm';

const AuthForm = (props) => {
  const { action } = props;

  return (
    <>
      {
        action === 'login' ?
        <LoginForm /> :
        <SignUpForm />
      }
    </>
  );
}

export default memo(AuthForm);