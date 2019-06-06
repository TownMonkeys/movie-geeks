import React, { useEffect, useRef } from 'react';
import MobileSignedInLinks from './MobileSignedInLinks';
import MobileSignedOutLinks from './MobileSignedOutLinks';
import PropTypes from 'prop-types';
import './SideNav.scss';
import close from '../../images/close.svg';

const SideNav = (props) => {
  /* refs */
  const firstInteractiveElement  = React.useRef();
  const lastInteractiveElement   = React.useRef();

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
    firstInteractiveElement.current.focus();

    return function allowBodyScroll() {
      document.body.setAttribute('data-scroll', 'true');
    }
  }, []);

  const {signedIn, closeSideNav, signIn, signOut} = props;

  return (
    <div 
      className="sideNav header__sideNav"
      onKeyDown={(e) => trapFocus(e, firstInteractiveElement.current, lastInteractiveElement.current, closeSideNav)}
    >
      <div className="sideNav__closeButtonContainer">
        <button 
          type="button"
          className="button sideNav__closeButton"
          ref={firstInteractiveElement}
          onClick={closeSideNav}
        >
          <img className="image sideNav__closeIcon" src={close} alt="Close"/>
        </button>
      </div>

      <nav className="mobileNavBar" role="navigation">
        <h2 className="mobileNavBar__heading">Mobile Navigation Bar</h2>
        <ul 
          className="list mobileNavMenu"
          onClick={handleClick}
        >
          {
            signedIn ?
            <MobileSignedInLinks
              ref={lastInteractiveElement}
              signOut={signOut}
            /> :
            <MobileSignedOutLinks
              ref={lastInteractiveElement}
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