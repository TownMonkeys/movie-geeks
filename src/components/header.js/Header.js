import React from 'react';
import Logo from './Logo';
import './Header.scss';

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="container">
        <Logo />
        <nav className="desktopNavBar" role="navigation">
          <ul className="desktopNavMenu">
            {
              
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;