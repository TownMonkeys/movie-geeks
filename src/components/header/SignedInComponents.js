import React, { Component } from 'react';
import NavBar from './NavBar';
import SignOut from './SignOut';
import MenuIcon from './MenuIcon';
import NotificationsIcon from '../notifications/NotificationsIcon';
import MobileSidebarOverlay from './MobileSidebarOverlay';
import MobileSidebar from './MobileSidebar';
import NotificationsPanel from '../notifications/NotificationsPanel';
import NotificationsOverlay from '../notifications/NotificationsOverlay';

class SignedInComponents extends Component {
  state = { 
    mobileSidebarOpened: false,
    notificationsPanelOpened: false
  }

  // Refs
  sideFirstTabTarget = React.createRef();
  menuIcon = React.createRef();
  notificationsIcon = React.createRef();

  openMobileSidebar = () => {
    this.setState({
      mobileSidebarOpened: true
    });
    
    this.sideFirstTabTarget.current.focus();
  }

  closeMobileSidebar = () => {
    this.setState({
      mobileSidebarOpened: false
    });

    this.menuIcon.current.focus();
  }

  openNotificationsPanel = () => {
    this.setState({
      notificationsPanelOpened: true
    });
  }

  closeNotificationsPanel = () => {
    this.setState({
      notificationsPanelOpened: false
    });

    this.notificationsIcon.current.focus();
  }

  toggleNotificationsPanel = () => {
    if (this.state.notificationsPanelOpened) {
      this.closeNotificationsPanel();
    } else {
      this.openNotificationsPanel();
    }
  }

  render() {
    const {mobileSidebarOpened, notificationsPanelOpened} = this.state;

    return (
      <React.Fragment>
        <MenuIcon 
          openMobileSidebar={this.openMobileSidebar}
          mobileSidebarOpened={mobileSidebarOpened}
          ref={this.menuIcon}
        />
        <div className="right">
          <NavBar />
          <SignOut />
          <NotificationsIcon 
            toggleNotificationsPanel={this.toggleNotificationsPanel}
            notificationsPanelOpened={notificationsPanelOpened}
            ref={this.notificationsIcon}
          />
          <NotificationsPanel 
            notificationsPanelOpened={notificationsPanelOpened}
            closeNotificationsPanel={this.closeNotificationsPanel}
          />
          <NotificationsOverlay closeNotificationsPanel={this.closeNotificationsPanel} />
        </div>
        <MobileSidebar 
          mobileSidebarOpened={mobileSidebarOpened}
          closeMobileSidebar={this.closeMobileSidebar}
          ref={this.sideFirstTabTarget} 
        />
        <MobileSidebarOverlay closeMobileSidebar={this.closeMobileSidebar} />
      </React.Fragment>
    );
  }
}

export default SignedInComponents;