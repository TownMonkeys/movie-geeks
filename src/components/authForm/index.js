import React, { memo } from 'react';
import SignUpForm from './components/signUpFrom';

const AuthForm = (props) => {
  const { action } = props;

  return (
    <>
      {
        action === 'signup' ?
        <SignUpForm /> :
        <div />
      }
    </>
  );
}

export default memo(AuthForm);