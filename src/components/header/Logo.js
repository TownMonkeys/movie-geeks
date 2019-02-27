import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="logo header__logo" to="/">
      <h1 className="logo__heading">MovieGeeks</h1>
    </Link>
  );
}

export default Logo;