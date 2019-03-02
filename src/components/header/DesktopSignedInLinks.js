import React from 'react';
import user from '../../images/user.jpg';

const DesktopSignedInLinks = () => {
  return (
    <React.Fragment>
      <li className="desktopNavMenu__item">
        <a href="" className="desktopNavMenu__link">
          <img src={user} alt="" className="image avatar avatar_size_small desktopNavMenu__avatar"/>
          <span className="desktopNavMenu__userName">Moaaz</span>
        </a>
      </li>
      <li className="desktopNavMenu__item">
        <a href="" className="desktopNavMenu__link">Add Movie</a>
      </li>
      <li className="desktopNavMenu__item">
        <a href="" className="desktopNavMenu__link">Sign Out</a>
      </li>
    </React.Fragment>
  );
}

export default DesktopSignedInLinks;