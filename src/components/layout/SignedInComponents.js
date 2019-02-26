import React from 'react';
import NavBar from './NavBar';
import SignOut from './SignOut';
import MenuIcon from './MenuIcon';
import NotificationsIcon from './NotificationsIcon';
import SideNavOverlay from './SideNavOverlay';
import SideWrapper from './SideWrapper';

const SignedInComponents = () => {
  return (
    <React.Fragment>
      <MenuIcon />
      <NotificationsIcon />
      <NavBar />
      <SignOut />
      <SideWrapper />
      <SideNavOverlay />
    </React.Fragment>
  );
}

export default SignedInComponents;