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
    navSidebarOpened: false 
  }

  openNavSidebar = () => {
    this.setState({
      navSidebarOpened: true
    });
  }

  closeNavSidebar = () => {
    this.setState({
      navSidebarOpened: false
    });
  }

  render() {
    const {navSidebarOpened} = this.state;
    const signedIn = true;

    return (
      <header className="header" role="banner">
        <div className="container">
          <Logo />
          <MenuIcon 
            navSidebarOpened={navSidebarOpened} 
            openNavSidebar={this.openNavSidebar}
          />
          <div className="navSidebar header__navSidebar">
            <nav className="mobileNavBar" role="navigation">
              <h2 className="mobileNavBar__heading">Navigation Bar</h2>
              <ul className="list mobileNavMenu">
                {
                  signedIn ?
                  <MobileSignedInLinks /> :
                  <MobileSignedOutLinks />
                }
              </ul>
            </nav>
          </div>
          <div 
            className="header__navSidebarOverlay"
            onClick={this.closeNavSidebar}
          ></div>
          {/*
          - purpose of this container: ordering the notification icon after the nav bar.
          - How: float the whole container to the right, and then float both navbar and notif icon to left.
          */}
          <div className="header__desktopRightComponentsContainer">
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