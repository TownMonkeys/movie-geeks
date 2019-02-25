import React from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';

const SignedOutComponents = () => {
  return (
    <React.Fragment>
      <SignIn />
      <SignOut />
    </React.Fragment>
  );
}

export default SignedOutComponents;