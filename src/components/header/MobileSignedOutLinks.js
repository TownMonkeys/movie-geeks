import React from 'react';
import PropTypes from 'prop-types';

const MobileSignedOutLinks = React.forwardRef((props, refs) => {
  const {firstSideNavLink, lastSideNavLink} = refs;
  const {signIn} = props;

  return (
    <React.Fragment>
      <li className="mobileNavMenu__item">
        <a 
          ref={firstSideNavLink} 
          href="#" 
          className="mobileNavMenu__link"
        >Sign Up</a>
      </li>
      <li className="mobileNavMenu__item">
        <a 
          ref={lastSideNavLink} 
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