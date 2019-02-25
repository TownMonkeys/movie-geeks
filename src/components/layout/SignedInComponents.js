import React from 'react';
import NavBar from './NavBar';
import SignOut from './SignOut';
import Notifications from './Notifications';

const SignedInComponents = () => {
  return (
    <React.Fragment>
      <NavBar />
      <SignOut />
      <Notifications />
    </React.Fragment>
  );
}

export default SignedInComponents;