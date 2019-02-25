import React from 'react';

const NavBar = () => {
  return (
    <nav className="navigation" role="navigation">
      <h2 className="navigation__heading">Navigation Bar</h2>

      <ul className="navigationMenu">
        <li className="navigationMenu__item">
          <a href="#" className="navigationMenu__link">Profile</a>
        </li>
        <li className="navigationMenu__item">
          <a href="#" className="navigationMenu__link">Add Movie</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;