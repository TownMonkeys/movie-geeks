import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo header__logo">
      <h1 className="logo__heading">
        <abbr className="logo__headingAbbreviated" title="Movie Geeks">MG</abbr>
        <span className="logo__headingExpanded">MovieGeeks</span>
      </h1>
    </Link>
  );
}

export default Logo;