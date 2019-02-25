import React from 'react';
import NavBar from './NavBar';
import SignOut from './SignOut';
import Notifications from './Notifications';
import MenuIcon from './MenuIcon';

const SignedInComponents = () => {
  return (
    <React.Fragment>
      <MenuIcon />
      <NavBar />
      <SignOut />
      <Notifications />
    </React.Fragment>
  );
}

export default SignedInComponents;