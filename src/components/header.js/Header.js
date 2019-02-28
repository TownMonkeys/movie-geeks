import React from 'react';
import Logo from './Logo';
import './Header.scss';
import './DesktopNavBar.scss';
import DesktopSignedInLinks from './DesktopSignedInLinks';
import DesktopSignedOutLinks from './DesktopSignedOutLinks';
import NotificationIcon from './NotificationIcon';

const Header = () => {
  const signedIn = true;
  return (
    <header className="header" role="banner">
      <div className="container">
        <Logo />
        {/*
        - purpose of this container: ordering the notif icon after the nav bar.
        - How: float the whole container to the right, and then float both navbar and notif icon to left.
        */}
        <div className="headerDesktopRightComponentsContainer">
          <nav className="desktopNavBar header__desktopNavBar" role="navigation">
            <h2 className="desktopNavBar__heading">Navigation Bar</h2>
            <ul className="list desktopNavMenu">
              {
                signedIn ?
                <DesktopSignedInLinks /> :
                <DesktopSignedOutLinks />
              }
            </ul>
          </nav>
          {
            signedIn && 
            <NotificationIcon />
          }
        </div>
      </div>
    </header>
  );
}

export default Header;