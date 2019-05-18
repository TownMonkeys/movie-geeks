import React, { Component } from 'react';
import MobileSignedInLinks from './MobileSignedInLinks';
import MobileSignedOutLinks from './MobileSignedOutLinks';
import PropTypes from 'prop-types';
import './SideNav.scss';

class SideNav extends Component {
  firstSideNavLink  = React.createRef();
  lastSideNavLink   = React.createRef();

  trapFocus = (e, firstElement, lastElement, closeFunc) => {
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

  componentDidMount() {
    document.body.setAttribute('data-scroll', 'false');
    this.firstSideNavLink.current.focus();
  }

  componentWillUnmount() {
    document.body.setAttribute('data-scroll', 'true');
  }

  render() {
    const {firstSideNavLink, lastSideNavLink} = this;
    const {signedIn, closeSideNav} = this.props;

    return (
      <div 
        className="sideNav header__sideNav"
        onKeyDown={(e) => this.trapFocus(e, firstSideNavLink.current, lastSideNavLink.current, closeSideNav)}
      >
        <nav className="mobileNavBar" role="navigation">
          <h2 className="mobileNavBar__heading">Mobile Navigation Bar</h2>
          <ul className="list mobileNavMenu">
            {
              signedIn ?
              <MobileSignedInLinks
                ref={{firstSideNavLink, lastSideNavLink}}
              /> :
              <MobileSignedOutLinks
                ref={{firstSideNavLink, lastSideNavLink}}
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
}

SideNav.propTypes = {
  signedIn: PropTypes.bool,
  closeSideNav: PropTypes.func
}

export default SideNav;