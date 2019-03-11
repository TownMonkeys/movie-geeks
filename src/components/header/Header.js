import React, { Component } from 'react';
import Logo from './Logo';
import './Header.scss';
import './DesktopNavBar.scss';
import './MobileNavBar.scss';
import DesktopSignedInLinks from './DesktopSignedInLinks';
import DesktopSignedOutLinks from './DesktopSignedOutLinks';
import NotificationIcon from '../notification/NotificationIcon';
import MenuIcon from './MenuIcon';
import MobileSignedInLinks from './MobileSignedInLinks';
import MobileSignedOutLinks from './MobileSignedOutLinks';
import NotificationPanel from '../notification/NotificationPanel';

class Header extends Component {
  state = { 
    menuButtonPressed: false,
    notificationButtonPressed: false 
  }

  // Refs for managing focus
  menuIcon          = React.createRef();
  firstSideNavLink  = React.createRef();
  lastSideNavLink   = React.createRef();
  notificationIcon  = React.createRef();

  openSideNav = () => {
    this.setState({
      menuButtonPressed: true
    });
  }

  closeSideNav = () => {
    this.setState({
      menuButtonPressed: false
    });

    this.menuIcon.current.focus();
  }

  openNotificationPanel = () => {
    this.setState({
      notificationButtonPressed: true
    });
  }

  closeNotificationPanel = () => {
    this.setState({
      notificationButtonPressed: false
    });

    this.notificationIcon.current.focus();
  }

  toggleNotificationPanel = () => {
    if (this.state.notificationButtonPressed) {
      this.closeNotificationPanel();
    } else {
      this.openNotificationPanel();
    }
  }

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

  render() {
    const {menuIcon, firstSideNavLink, lastSideNavLink, notificationIcon} = this;
    const {menuButtonPressed, notificationButtonPressed} = this.state;
    const signedIn = true;

    return (
      <header className="header App__header" role="banner">
        <div className="container">
          {/* Always exists */}
          <Logo /> 
          {/* mobile only */}
          <MenuIcon 
            menuButtonPressed={menuButtonPressed} 
            openSideNav={this.openSideNav}
            ref={menuIcon}
          /> 
          {/* Mobile only when menu is clicked */}
          {
            menuButtonPressed &&
            <div 
              className="sideNav header__sideNav"
              onKeyDown={(e) => this.trapFocus(e, firstSideNavLink.current, lastSideNavLink.current, this.closeSideNav)}
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
                onClick={this.closeSideNav}
              ></div>
            </div>
          }
          {/*
          - purpose of this container: ordering the notification icon after the nav bar.
          - How: float the whole container to the right, and then float both navbar and notif icon to left.
          */}
          <div className="header__desktopRightComponentsContainer">
            {/* Desktop only */}
            <nav className="desktopNavBar header__desktopNavBar" role="navigation">
              <h2 className="desktopNavBar__heading">Desktop Navigation Bar</h2>
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
              <React.Fragment>
                <NotificationIcon 
                  notificationButtonPressed={notificationButtonPressed}
                  toggleNotificationPanel={this.toggleNotificationPanel}
                  ref={notificationIcon}
                />
                {
                  notificationButtonPressed &&
                  <NotificationPanel closeNotificationPanel={this.closeNotificationPanel} />
                }
              </React.Fragment>
            }
          </div>
        </div>
      </header>
    );
  }
}

export default Header;