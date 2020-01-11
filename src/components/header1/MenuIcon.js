import React, { memo } from 'react';
import menu from '../../images/menu.svg';
import './MenuIcon.scss';
import PropTypes from 'prop-types';

const MenuIcon = React.forwardRef((props, menuIcon) => {
  const {menuButtonPressed, openSideNav} = props; 

  return (
    <button 
      className="button menuIcon header__menuIcon" 
      type="button" 
      aria-controls="mobileSideBar" 
      aria-pressed={menuButtonPressed} 
      aria-expanded={menuButtonPressed}
      onClick={openSideNav}
      ref={menuIcon}
    >
      <img src={menu} alt="Menu Icon" className="image"/>
    </button>
  );
})

MenuIcon.propTypes = {
  sideNavOpened: PropTypes.bool,
  openSideNav: PropTypes.func
}

export default memo(MenuIcon);