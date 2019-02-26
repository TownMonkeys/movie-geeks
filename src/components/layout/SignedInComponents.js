import React, { Component } from 'react';
import NavBar from './NavBar';
import SignOut from './SignOut';
import MenuIcon from './MenuIcon';
import NotificationsIcon from './NotificationsIcon';
import SideNavOverlay from './SideNavOverlay';
import SideWrapper from './SideWrapper';

class SignedInComponents extends Component {
  state = { 
    sideWrapperOpened: false
  }

  sideFirstTabTarget = React.createRef();
  menuIcon = React.createRef();

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

  render() {
    const {sideWrapperOpened} = this.state;

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
          <NotificationsIcon />
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