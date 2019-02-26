import React, { Component } from 'react';
import Logo from './Logo';
import SignedInComponents from './SignedInComponents';
import SignedOutComponents from './SignedOutComponents';
import './Header.scss';

class Header extends Component {
  state = { 
    sideWrapperOpened: false
  }

  openSideWrapper = () => {
    this.setState({
      sideWrapperOpened: true
    });
  }

  closeSideWrapper = () => {
    this.setState({
      sideWrapperOpened: false
    });
  }

  render() {
    return (
      <header className="header" role="banner">
        <Logo />
        {
          true ?
          <SignedInComponents 
            openSideWrapper={this.openSideWrapper}
            closeSideWrapper={this.closeSideWrapper}
            sideWrapperOpened={this.state.sideWrapperOpened}
          /> :
          <SignedOutComponents />
        }
      </header>
    );
  }
}

export default Header;