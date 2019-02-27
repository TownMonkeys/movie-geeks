import React from 'react';
import menu from '../../images/menu.svg';

const MenuIcon = React.forwardRef((props, menuIcon) => {
  const {openMobileSidebar, mobileSidebarOpened} = props;

  return (
    <button 
      className="button menuIcon header__menuIcon" 
      type="button" 
      aria-controls="sideWrapper" 
      aria-pressed={mobileSidebarOpened} 
      aria-expanded={mobileSidebarOpened}
      onClick={openMobileSidebar}
      ref={menuIcon}
    >
      <img src={menu} alt="Menu Icon" className="image"/>
    </button>
  );
})

export default MenuIcon;