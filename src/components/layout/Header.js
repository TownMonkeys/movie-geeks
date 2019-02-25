import React from 'react';
import Logo from './Logo';
import SignedInComponents from './SignedInComponents';
import SignedOutComponents from './SignedOutComponents';

const Header = () => {
  return (
    <header className="header" role="banner">
      <Logo />
      {
        true ?
        <SignedInComponents /> :
        <SignedOutComponents />
      }
    </header>
  );
}

export default Header;