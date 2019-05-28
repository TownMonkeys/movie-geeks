import React, { useState } from 'react';
import Logo from './Logo';
import './Header.scss';
import './DesktopNavBar.scss';
import './MobileNavBar.scss';
import DesktopSignedInLinks from './DesktopSignedInLinks';
import DesktopSignedOutLinks from './DesktopSignedOutLinks';
import NotificationIcon from '../notification/NotificationIcon';
import MenuIcon from './MenuIcon';
import NotificationPanel from '../notification/NotificationPanel';
import SideNav from './SideNav';

const Header = () => {
  /* state */
  const [menuButtonPressed, setMenuButtonPressed] = useState(false);
  const [notificationButtonPressed, setNotificationButtonPressed] = useState(false);
  const [signedIn, setSignedIn] = useState(true);

  /* refs */
  const menuIcon          = React.createRef();
  const notificationIcon  = React.createRef(); 

  const signIn = () => {
    setSignedIn(true);
  }

  const signOut = () => {
    setSignedIn(false);
  }

  const openSideNav = () => {
    setMenuButtonPressed(true);
  }

  const closeSideNav = () => {
    setMenuButtonPressed(false);
    menuIcon.current.focus();
  }

  const openNotificationPanel = () => {
    setNotificationButtonPressed(true);
  }

  const closeNotificationPanel = () => {
    setNotificationButtonPressed(false);
    notificationIcon.current.focus();
  }

  const toggleNotificationPanel = () => {
    if (notificationButtonPressed) {
      closeNotificationPanel();
    } else {
      openNotificationPanel();
    }
  }

  return (
    <header className="header App__header" role="banner">
      <div className="container">
        {/* Always exists */}
        <Logo /> 
        {/* mobile only */}
        <MenuIcon 
          menuButtonPressed={menuButtonPressed} 
          openSideNav={openSideNav}
          ref={menuIcon}
        /> 
        {/* Mobile only when menu button is clicked */}
        {
          menuButtonPressed &&
          <SideNav 
            signedIn={signedIn} 
            closeSideNav={closeSideNav}
            signIn={signIn}
            signOut={signOut}
          />
        }
        {/*
        - purpose of this container: ordering the notification icon after the nav bar.
        - How: float the whole container to the right, and then float both navbar and notif icon to left.
        */}
        <div className="header__desktopRightComponentsContainer">
          {/* Desktop only */}
          <nav className="desktopNavBar header__desktopNavBar" role="navigation">
            <h2 className="desktopNavBar__heading">Desktop Navigation Bar</h2>
            <ul className="list desktopNavMenu">
              {
                signedIn ?
                <DesktopSignedInLinks signOut={signOut} /> :
                <DesktopSignedOutLinks signIn={signIn} />
              }
            </ul>
          </nav>
          {/* Always exists if signed in*/}
          {
            signedIn && 
            <React.Fragment>
              <NotificationIcon 
                notificationButtonPressed={notificationButtonPressed}
                toggleNotificationPanel={toggleNotificationPanel}
                closeNotificationPanel={closeNotificationPanel} 
                ref={notificationIcon}
              />
              {
                notificationButtonPressed &&
                <NotificationPanel 
                  closeNotificationPanel={closeNotificationPanel} 
                  notificationIcon={notificationIcon}
                />
              }
            </React.Fragment>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;