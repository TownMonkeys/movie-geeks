import React from 'react';
import menu from '../../images/menu.svg';
import './MenuIcon.scss';

const MenuIcon = React.forwardRef((props, menuIcon) => {
  const {sideNavOpened, opensideNav} = props; 

  return (
    <button 
      className="button menuIcon header__menuIcon" 
      type="button" 
      aria-controls="mobileSideBar" 
      aria-pressed={sideNavOpened} 
      aria-expanded={sideNavOpened}
      onClick={opensideNav}
      ref={menuIcon}
    >
      <img src={menu} alt="Menu Icon" className="image"/>
    </button>
  );
})

export default MenuIcon;