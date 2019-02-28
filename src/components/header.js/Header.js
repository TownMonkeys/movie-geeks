import React from 'react';
import Logo from './Logo';
import './Header.scss';
import './DesktopNavBar.scss';
import DesktopSignedInLinks from './DesktopSignedInLinks';
import DesktopSignedOutLinks from './DesktopSignedOutLinks';

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="container">
        <Logo />
        <nav className="desktopNavBar" role="navigation">
          <h2 className="desktopNavBar__heading">Navigation Bar</h2>
          <ul className="list desktopNavMenu">
            {
              true ?
              <DesktopSignedInLinks /> :
              <DesktopSignedOutLinks />
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;