import React from 'react';
import NavBar from './NavBar';
import SignOut from './SignOut';
import Notifications from './Notifications';

const SignedInComponents = () => {
  return (
    <React.Fragment>
      <Notifications />
      <SignOut />
      <NavBar />
    </React.Fragment>
  );
}

export default SignedInComponents;