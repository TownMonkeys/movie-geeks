import React from 'react';

const MobileSignedOutLinks = React.forwardRef((props, refs) => {
  const {navSidebarOpened} = props;
  const {firstSideNavLink, lastSideNavLink} = refs;

  return (
    <React.Fragment>
      <li className="mobileNavMenu__item">
        <a 
          ref={firstSideNavLink} 
          href="" 
          className="mobileNavMenu__link"
          tabIndex={navSidebarOpened ? '-1' : '0'}
        >Sign Up</a>
      </li>
      <li className="mobileNavMenu__item">
        <a 
          ref={lastSideNavLink} 
          href="" 
          className="mobileNavMenu__link"
          tabIndex={navSidebarOpened ? '-1' : '0'}
        >Sign In</a>
      </li>
    </React.Fragment>
  );
})

export default MobileSignedOutLinks;