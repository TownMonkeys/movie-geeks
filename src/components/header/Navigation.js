import React from 'react';
import user from '../../images/user.jpg';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation header__navigation" role="navigation">
      <h2 className="navigation__heading">Navigation Bar</h2>

      <ul className="list navigationMenu">
        <li className="navigationMenu__item">
          <a href="#" className="link navigationMenu__link">
            <img className="avatar navigationMenu__avatar avatar_size_small" src={user} alt="Moaaz's Avatar"/>
            <span>Moaaz</span>
          </a>
        </li>
        <li className="navigationMenu__item">
          <a href="#" className="link navigationMenu__link">Add Movie</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;