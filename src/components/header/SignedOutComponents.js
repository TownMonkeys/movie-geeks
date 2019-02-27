import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './SignedOutComponents.scss';

const SignedOutComponents = () => {
  return (
    <div className="header__signedOutComponentsContainer">
      <SignUp />
      <SignIn />
    </div>
  );
}

export default SignedOutComponents;