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
    sideNavOpened: false,
    notificationPanelOpened: false 
  }

  // Refs for managing focus
  menuIcon          = React.createRef();
  firstSideNavLink  = React.createRef();
  lastSideNavLink   = React.createRef();
  notificationIcon  = React.createRef();
  firstNotification = React.createRef();
  lastNotification  = React.createRef();

  openSideNav = () => {
    this.setState({
      sideNavOpened: true
    });

    this.firstSideNavLink.current.focus();
  }

  closeSideNav = () => {
    this.setState({
      sideNavOpened: false
    });

    this.menuIcon.current.focus();
  }

  openNotificationPanel = () => {
    this.setState({
      notificationPanelOpened: true
    });

    // I focused the first notification in componentDidMount method of NotificationsPanel component, but I can't focus it now bacause it wouldn't exist yet
  }

  closeNotificationPanel = () => {
    this.setState({
      notificationPanelOpened: false
    });

    this.notificationIcon.current.focus();
  }

  toggleNotificationPanel = () => {
    if (this.state.notificationPanelOpened) {
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
    const {menuIcon, firstSideNavLink, lastSideNavLink, notificationIcon, firstNotification, lastNotification} = this;
    const {sideNavOpened, notificationPanelOpened} = this.state;
    const signedIn = true;

    return (
      <header className="header App__header" role="banner">
        <div className="container">
          {/* Always exists */}
          <Logo /> 
          {/* mobile only */}
          <MenuIcon 
            sideNavOpened={sideNavOpened} 
            openSideNav={this.openSideNav}
            ref={menuIcon}
          /> 
          {/* Mobile only when menu is clicked */}
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
            onClick={this.closeSideNav}
          ></div>
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
                  notificationPanelOpened={notificationPanelOpened}
                  toggleNotificationPanel={this.toggleNotificationPanel}
                  ref={notificationIcon}
                />
                <NotificationPanel 
                  trapFocus={(e) => this.trapFocus(e, firstNotification.current, lastNotification.current, this.closeNotificationPanel)}
                  notificationPanelOpened={notificationPanelOpened}
                  ref={{firstNotification, lastNotification}}
                />
                <div 
                  className="header__notificationOverlay"
                  onClick={this.closeNotificationPanel}
                ></div>
              </React.Fragment>
            }
          </div>
        </div>
      </header>
    );
  }
}

export default Header;