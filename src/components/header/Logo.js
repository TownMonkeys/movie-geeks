import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo header__logo">
      <h1 className="logo__heading">MovieGeeks</h1>
    </Link>
  );
}

export default Logo;