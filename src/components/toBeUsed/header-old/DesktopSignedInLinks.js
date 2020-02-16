import React, { memo } from 'react';
import user from '../../images/avatar.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DesktopSignedInLinks = (props) => {
  const {signOut} = props;

  return (
    <React.Fragment>
      <li className="desktopNavMenu__item">
        <Link
          to='/profile'
          className="desktopNavMenu__link" 
        >
          <img src={user} alt="" className="image avatar avatar_size_small desktopNavMenu__avatar"/>
          <span className="desktopNavMenu__userName">Yurio</span>
        </Link>
      </li>
      <li className="desktopNavMenu__item">
        <a href="#" className="desktopNavMenu__link">Add Movie</a>
      </li>
      <li className="desktopNavMenu__item">
        <a 
          href="#" 
          className="desktopNavMenu__link"
          onClick={signOut}
        >Sign Out</a>
      </li>
    </React.Fragment>
  );
}

DesktopSignedInLinks.propTypes = {
  signOut: PropTypes.func
}

export default memo(DesktopSignedInLinks);