import React from 'react';
import NavBar from './NavBar';
import SignOut from './SignOut';
import MenuIcon from './MenuIcon';
import NotificationsIcon from './Notifications';

const SignedInComponents = () => {
  return (
    <React.Fragment>
      <NotificationsIcon />
      <SignOut />
      <NavBar />
      <MenuIcon />
    </React.Fragment>
  );
}

export default SignedInComponents;