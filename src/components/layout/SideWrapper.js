import React from 'react';
import user from '../../images/user.jpg';

const SideWrapper = () => {
  return (
    <div className="sideWrapper" id="sideWrapper">
      <nav className="sideNav" role="navigation">
        <h2 className="sideNav__heading">Side Navigaion</h2>
        <ul className="sideNavMenu">
          <li className="sideNavMenu__item">
            <a href="#" className="sideNavMenu__link" tabIndex="-1">
            <img className="avatar sideNavMenu__avatar" src={user} alt="User Photo"/>
              <span>Moaaz</span>
            </a>
          </li>
          <li className="sideNavMenu__item">
            <a href="#" className="sideNavMenu__link" tabIndex="-1">Add Movie</a>
          </li>
        </ul>
      </nav>

      <button className="button authButton mobile__signOut" type="button" tabIndex="-1">
        Sign Out
      </button>
    </div>
  );
}

export default SideWrapper;