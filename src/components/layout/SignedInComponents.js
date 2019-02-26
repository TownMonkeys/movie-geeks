import React, { Component } from 'react';
import NavBar from './NavBar';
import SignOut from './SignOut';
import MenuIcon from './MenuIcon';
import NotificationsIcon from './NotificationsIcon';
import SideNavOverlay from './SideNavOverlay';
import SideWrapper from './SideWrapper';
import NotificationsPanel from './NotificationsPanel';
import NotificationsOverlay from './NotificationsOverlay';

class SignedInComponents extends Component {
  state = { 
    sideWrapperOpened: false,
    NotificationsPanelOpened: false
  }

  // Refs
  sideFirstTabTarget = React.createRef();
  menuIcon = React.createRef();
  notificationsIcon = React.createRef();

  openSideWrapper = () => {
    this.setState({
      sideWrapperOpened: true
    });
    
    this.sideFirstTabTarget.current.focus();
  }

  closeSideWrapper = () => {
    this.setState({
      sideWrapperOpened: false
    });

    this.menuIcon.current.focus();
  }

  openNotificationsPanel = () => {
    this.setState({
      NotificationsPanelOpened: true
    });
  }

  closeNotificationsPanel = () => {
    this.setState({
      NotificationsPanelOpened: false
    });

    this.notificationsIcon.current.focus();
  }

  toggleNotificationsPanel = () => {
    if (this.state.NotificationsPanelOpened) {
      this.closeNotificationsPanel();
    } else {
      this.openNotificationsPanel();
    }
  }

  render() {
    const {sideWrapperOpened, NotificationsPanelOpened} = this.state;

    return (
      <React.Fragment>
        <MenuIcon 
          openSideWrapper={this.openSideWrapper}
          sideWrapperOpened={sideWrapperOpened}
          ref={this.menuIcon}
        />
        <div className="right">
          <NavBar />
          <SignOut />
          <NotificationsIcon 
            toggleNotificationsPanel={this.toggleNotificationsPanel}
            NotificationsPanelOpened={NotificationsPanelOpened}
            ref={this.notificationsIcon}
          />
          <NotificationsPanel 
            NotificationsPanelOpened={NotificationsPanelOpened}
            closeNotificationsPanel={this.closeNotificationsPanel}
          />
          <NotificationsOverlay closeNotificationsPanel={this.closeNotificationsPanel} />
        </div>
        <SideWrapper 
          sideWrapperOpened={sideWrapperOpened}
          closeSideWrapper={this.closeSideWrapper}
          ref={this.sideFirstTabTarget} 
        />
        <SideNavOverlay closeSideWrapper={this.closeSideWrapper} />
      </React.Fragment>
    );
  }
}

export default SignedInComponents;