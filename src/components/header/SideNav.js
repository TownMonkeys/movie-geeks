import React, { useEffect } from 'react';
import MobileSignedInLinks from './MobileSignedInLinks';
import MobileSignedOutLinks from './MobileSignedOutLinks';
import PropTypes from 'prop-types';
import './SideNav.scss';

const SideNav = (props) => {
  /* refs */
  const firstSideNavLink  = React.createRef();
  const lastSideNavLink   = React.createRef();

  const trapFocus = (e, firstElement, lastElement, closeFunc) => {
    const esc = e.keyCode === 27;
    const tab = e.keyCode === 9;
    if (esc) { 
      closeFunc();
    } else if (tab && e.shiftKey && e.target === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (tab && !e.shiftKey && e.target === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }

  const handleClick = (e) => {
    const linkIsClicked = (e.target.tagName === 'A');
    if (linkIsClicked) {
      props.closeSideNav();
    }
  }

  useEffect(function preventBodyScrollAndFocusFirstLink() {
    document.body.setAttribute('data-scroll', 'false');
    firstSideNavLink.current.focus();

    return function allowBodyScroll() {
      document.body.setAttribute('data-scroll', 'true');
    }
  }, []);

  const {signedIn, closeSideNav, signIn, signOut} = props;

  return (
    <div 
      className="sideNav header__sideNav"
      onKeyDown={(e) => trapFocus(e, firstSideNavLink.current, lastSideNavLink.current, closeSideNav)}
    >
      <nav className="mobileNavBar" role="navigation">
        <h2 className="mobileNavBar__heading">Mobile Navigation Bar</h2>
        <ul 
          className="list mobileNavMenu"
          onClick={handleClick}
        >
          {
            signedIn ?
            <MobileSignedInLinks
              ref={{firstSideNavLink, lastSideNavLink}}
              signOut={signOut}
            /> :
            <MobileSignedOutLinks
              ref={{firstSideNavLink, lastSideNavLink}}
              signIn={signIn}
            />
          }
        </ul>
      </nav>

      <div 
        className="sideNav__overlay"
        onClick={closeSideNav}
      ></div>
    </div>
  );
}

SideNav.propTypes = {
  signedIn: PropTypes.bool,
  closeSideNav: PropTypes.func,
  signIn: PropTypes.func,
  signOut: PropTypes.func
}

export default SideNav;