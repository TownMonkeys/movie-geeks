import React, { Component } from 'react';
import Logo from './Logo';
import './Header.scss';
import './DesktopNavBar.scss';
import './MobileNavBar.scss';
import DesktopSignedInLinks from './DesktopSignedInLinks';
import DesktopSignedOutLinks from './DesktopSignedOutLinks';
import NotificationIcon from '../notification/NotificationIcon';
import MenuIcon from './MenuIcon';
import NotificationPanel from '../notification/NotificationPanel';
import SideNav from './SideNav';

class Header extends Component {
  state = { 
    menuButtonPressed: false,
    notificationButtonPressed: false,
    signedIn: true
  }

  // Refs for managing focus
  menuIcon          = React.createRef();
  notificationIcon  = React.createRef();

  signIn = () => {
    this.setState({
      signedIn: true
    });
  }

  signOut = () => {
    this.setState({
      signedIn: false
    });
  }

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

  render() {
    const {menuIcon, notificationIcon} = this;
    const {menuButtonPressed, notificationButtonPressed, signedIn} = this.state;

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
          {/* Mobile only when menu button is clicked */}
          {
            menuButtonPressed &&
            <SideNav 
              signedIn={signedIn} 
              closeSideNav={this.closeSideNav}
              signIn={this.signIn}
              signOut={this.signOut}
            />
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
                  <DesktopSignedInLinks signOut={this.signOut} /> :
                  <DesktopSignedOutLinks signIn={this.signIn} />
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
                  <NotificationPanel 
                    closeNotificationPanel={this.closeNotificationPanel} 
                    notificationIcon={notificationIcon}
                  />
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