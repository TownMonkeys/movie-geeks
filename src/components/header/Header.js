import React from 'react';
import Logo from './Logo';
import SignedInComponents from './SignedInComponents';
import SignedOutComponents from './SignedOutComponents';
import './Header.scss';
import './Container.scss';

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="container">
        <Logo />
        {
          true ?
          <SignedInComponents /> :
          <SignedOutComponents />
        }
      </div>
    </header>
  );
}

export default Header;