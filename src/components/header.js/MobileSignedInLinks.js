import React from 'react';
import user from '../../images/user.jpg';

const MobileSignedInLinks = () => {
  return (
    <React.Fragment>
      <li className="mobileNavMenu__item">
        <a href="" className="mobileNavMenu__link">
          <img src={user} alt="" className="image avatar avatar_size_small mobileNavMenu__avatar"/>
          <span className="mobileNavMenu__userName">Moaaz</span>
        </a>
      </li>
      <li className="mobileNavMenu__item">
        <a href="" className="mobileNavMenu__link">Add Movie</a>
      </li>
      <li className="mobileNavMenu__item">
        <a href="" className="mobileNavMenu__link">Sign Out</a>
      </li>
    </React.Fragment>
  );
}

export default MobileSignedInLinks;