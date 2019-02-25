import React from 'react';
import user from '../../images/user.jpg';

const NavBar = () => {
  return (
    <nav className="navigation header__navigation" role="navigation">
      <h2 className="navigation__heading">Navigation Bar</h2>

      <ul className="navigationMenu navigation__navigationMenu">
        <li className="navigationMenu__item">
          <a href="#" className="navigationMenu__link">
            <img className="avatar navigationMenu__avatar" src={user} alt="User Photo"/>
            <span>Moaaz</span>
          </a>
        </li>
        <li className="navigationMenu__item">
          <a href="#" className="navigationMenu__link">Add Movie</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;