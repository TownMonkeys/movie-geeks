import React from 'react';
import user from '../../images/user.jpg';

const MobileSignedInLinks = React.forwardRef((props, refs) => {
  const {navSidebarOpened} = props;
  const {firstSideNavLink, lastSideNavLink} = refs;

  return (
    <React.Fragment>
      <li className="mobileNavMenu__item">
        <a 
          ref={firstSideNavLink} 
          href="" 
          className="mobileNavMenu__link" 
          tabIndex={navSidebarOpened ? '0' : '1'}
        >
          <img src={user} alt="" className="image avatar avatar_size_small mobileNavMenu__avatar"/>
          <span className="mobileNavMenu__userName">Moaaz</span>
        </a>
      </li>
      <li className="mobileNavMenu__item">
        <a 
          href="" 
          className="mobileNavMenu__link" 
          tabIndex={navSidebarOpened ? '0' : '1'}
        >Add Movie</a>
      </li>
      <li className="mobileNavMenu__item">
        <a 
          ref={lastSideNavLink} 
          href="" 
          className="mobileNavMenu__link" 
          tabIndex={navSidebarOpened ? '0' : '1'}
        >Sign Out</a>
      </li>
    </React.Fragment>
  );
})

export default MobileSignedInLinks;