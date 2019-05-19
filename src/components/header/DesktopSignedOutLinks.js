import React from 'react';
import PropTypes from 'prop-types';

const DesktopSignedOutLinks = (props) => {
  const {signIn} = props;

  return (
    <React.Fragment>
      <li className="desktopNavMenu__item">
        <a href="#" className="desktopNavMenu__link">Sign Up</a>
      </li>
      <li className="desktopNavMenu__item">
        <a 
          href="#" 
          className="desktopNavMenu__link"
          onClick={signIn}
        >Sign In</a>
      </li>
    </React.Fragment>
  );
}

DesktopSignedOutLinks.propTypes = {
  signIn: PropTypes.func
}

export default DesktopSignedOutLinks;