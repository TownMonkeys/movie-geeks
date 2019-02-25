import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import Notifications from './Notifications';
import SignOut from './SignOut';

const Header = () => {
  return (
    <header className="header" role="banner">
      <Logo />
      <NavBar />
      <SignOut />
      <Notifications />
    </header>
  );
}

export default Header;