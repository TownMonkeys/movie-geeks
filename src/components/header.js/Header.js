import React, { Component } from 'react';
import Logo from './Logo';
import './Header.scss';
import './DesktopNavBar.scss';
import './MobileNavBar.scss';
import DesktopSignedInLinks from './DesktopSignedInLinks';
import DesktopSignedOutLinks from './DesktopSignedOutLinks';
import NotificationIcon from './NotificationIcon';
import MenuIcon from './MenuIcon';
import MobileSignedInLinks from './MobileSignedInLinks';
import MobileSignedOutLinks from './MobileSignedOutLinks';

class Header extends Component {
  state = { 
    sideNavOpened: false 
  }

  // Refs
  firstSideNavLink = React.createRef();
  lastSideNavLink = React.createRef();

  opensideNav = () => {
    this.setState({
      sideNavOpened: true
    });

    this.firstSideNavLink.current.focus();
  }

  closesideNav = () => {
    this.setState({
      sideNavOpened: false
    });
  }

  handleKeyDownOnSideNav = (e) => {
    const esc = e.keyCode === 27;
    const tab = e.keyCode === 9;
    if (esc) { 
      this.closesideNav();
    } else if (tab && e.shiftKey && e.target === this.firstSideNavLink.current) {
      e.preventDefault();
      this.lastSideNavLink.current.focus();
    } else if (tab && !e.shiftKey && e.target === this.lastSideNavLink.current) {
      e.preventDefault();
      this.firstSideNavLink.current.focus();
    }
  }

  render() {
    const {firstSideNavLink, lastSideNavLink} = this;
    const {sideNavOpened} = this.state;
    const signedIn = false;

    return (
      <header className="header" role="banner">
        <div className="container">
          {/* Always exists */}
          <Logo /> 
          {/* mobile only */}
          <MenuIcon 
            sideNavOpened={sideNavOpened} 
            opensideNav={this.opensideNav}
          /> 
          {/* Mobile only when menu is clicked */}
          <div 
            className="sideNav header__sideNav"
            onKeyDown={this.handleKeyDownOnSideNav}
          >
            <nav className="mobileNavBar" role="navigation">
              <h2 className="mobileNavBar__heading">Navigation Bar</h2>
              <ul className="list mobileNavMenu">
                {
                  signedIn ?
                  <MobileSignedInLinks 
                    sideNavOpened={sideNavOpened} 
                    ref={{firstSideNavLink, lastSideNavLink}}
                  /> :
                  <MobileSignedOutLinks 
                    sideNavOpened={sideNavOpened} 
                    ref={{firstSideNavLink, lastSideNavLink}}
                  />
                }
              </ul>
            </nav>
          </div>
          {/* Mobile only when menu is clicked */}
          <div 
            className="header__sideNavOverlay"
            onClick={this.closesideNav}
          ></div>
          {/*
          - purpose of this container: ordering the notification icon after the nav bar.
          - How: float the whole container to the right, and then float both navbar and notif icon to left.
          */}
          {/* Always exists */}
          <div className="header__desktopRightComponentsContainer">
            {/* Desktop only */}
            <nav className="desktopNavBar header__desktopNavBar" role="navigation">
              <h2 className="desktopNavBar__heading">Navigation Bar</h2>
              <ul className="list desktopNavMenu">
                {
                  signedIn ?
                  <DesktopSignedInLinks /> :
                  <DesktopSignedOutLinks />
                }
              </ul>
            </nav>
            {/* Always exists if signed in*/}
            {
              signedIn && 
              <NotificationIcon />
            }
          </div>
        </div>
      </header>
    );
  }
}

export default Header;