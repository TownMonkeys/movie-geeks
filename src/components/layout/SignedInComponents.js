import React from 'react';
import NavBar from './NavBar';
import SignOut from './SignOut';
import MenuIcon from './MenuIcon';
import NotificationsIcon from './NotificationsIcon';
import SideNavOverlay from './SideNavOverlay';
import SideWrapper from './SideWrapper';

const SignedInComponents = (props) => {
  const {openSideWrapper, closeSideWrapper, sideWrapperOpened} = props;
  return (
    <React.Fragment>
      <MenuIcon 
        openSideWrapper={openSideWrapper}
        sideWrapperOpened={sideWrapperOpened}
      />
      <div className="right">
        <NavBar />
        <SignOut />
        <NotificationsIcon />
      </div>
      <SideWrapper />
      <SideNavOverlay closeSideWrapper={closeSideWrapper} />
    </React.Fragment>
  );
}

export default SignedInComponents;