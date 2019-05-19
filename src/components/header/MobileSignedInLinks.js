import React from 'react';
import user from '../../images/user.svg';
import PropTypes from 'prop-types';

const MobileSignedInLinks = React.forwardRef((props, refs) => {
  const {firstSideNavLink, lastSideNavLink} = refs;
  const {signOut} = props;

  return (
    <React.Fragment>
      <li className="mobileNavMenu__item">
        <a 
          ref={firstSideNavLink} 
          href="#" 
          className="mobileNavMenu__link" 
        >
          <img src={user} alt="" className="image avatar avatar_size_small mobileNavMenu__avatar"/>
          <span className="mobileNavMenu__userName">Hajar</span>
        </a>
      </li>
      <li className="mobileNavMenu__item">
        <a 
          href="#" 
          className="mobileNavMenu__link" 
        >Add Movie</a>
      </li>
      <li className="mobileNavMenu__item">
        <a 
          ref={lastSideNavLink} 
          href="#" 
          className="mobileNavMenu__link" 
          onClick={signOut}
        >Sign Out</a>
      </li>
    </React.Fragment>
  );
})

MobileSignedInLinks.propTypes = {
  signOut: PropTypes.func
}

export default MobileSignedInLinks;