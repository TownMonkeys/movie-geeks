import React, { useState, useRef } from 'react';
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

const signIn = (setSignedIn) => {
  setSignedIn(true);
}

const signOut = (setSignedIn) => {
  setSignedIn(false);
}

const openSideNav = (setMenuButtonPressed) => {
  setMenuButtonPressed(true);
}

const closeSideNav = (setMenuButtonPressed, menuElement) => {
  console.log('close');
  setMenuButtonPressed(false);
  menuElement.focus();
}

const openNotificationPanel = (setNotificationButtonPressed) => {
  setNotificationButtonPressed(true);
}

const closeNotificationPanel = (setNotificationButtonPressed) => {
  setNotificationButtonPressed(false);
}

const toggleNotificationPanel = (notificationButtonPressed, setNotificationButtonPressed) => {
  if (notificationButtonPressed) {
    closeNotificationPanel(setNotificationButtonPressed);
  } else {
    openNotificationPanel(setNotificationButtonPressed);
  }
}

const Header = () => {
  /* state */
  const [menuButtonPressed, setMenuButtonPressed] = useState(false);
  const [notificationButtonPressed, setNotificationButtonPressed] = useState(false);
  const [signedIn, setSignedIn] = useState(true);

  /* refs */
  const menuIcon          = useRef();
  const notificationIcon  = useRef(); 

  return (
    <header className="header App__header" role="banner">
      <div className="container">
        {/* Always exists */}
        <Logo /> 
        {/* mobile only */}
        <MenuIcon 
          menuButtonPressed={menuButtonPressed} 
          openSideNav={() => openSideNav(setMenuButtonPressed)}
          ref={menuIcon}
        /> 
        {/* Mobile only when menu button is clicked */}
        {
          menuButtonPressed &&
          <SideNav 
            signedIn={signedIn} 
            closeSideNav={() => closeSideNav(setMenuButtonPressed, menuIcon.current)}
            signIn={() => signIn(setSignedIn)}
            signOut={() => signOut(setSignedIn)}
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
                <DesktopSignedInLinks signOut={() => signOut(setSignedIn)} /> :
                <DesktopSignedOutLinks signIn={() => signIn(setSignedIn)} />
              }
            </ul>
          </nav>
          {/* Always exists if signed in*/}
          {
            signedIn && 
            <React.Fragment>
              <NotificationIcon 
                notificationButtonPressed={notificationButtonPressed}
                toggleNotificationPanel={() => toggleNotificationPanel(notificationButtonPressed, setNotificationButtonPressed)}
                closeNotificationPanel={() => closeNotificationPanel(setNotificationButtonPressed)} 
                ref={notificationIcon}
              />
              {
                notificationButtonPressed &&
                <NotificationPanel 
                  closeNotificationPanel={() => closeNotificationPanel(setNotificationButtonPressed)} 
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