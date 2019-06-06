import React from 'react';
import PropTypes from 'prop-types';

const MobileSignedOutLinks = React.forwardRef((props, lastInteractiveElement) => {
  const {signIn} = props;

  return (
    <React.Fragment>
      <li className="mobileNavMenu__item">
        <a 
          href="#" 
          className="mobileNavMenu__link"
        >Sign Up</a>
      </li>
      <li className="mobileNavMenu__item">
        <a 
          ref={lastInteractiveElement} 
          href="#" 
          className="mobileNavMenu__link"
          onClick={signIn}
        >Sign In</a>
      </li>
    </React.Fragment>
  );
})

MobileSignedOutLinks.propTypes = {
  signIn: PropTypes.func
}

export default MobileSignedOutLinks;