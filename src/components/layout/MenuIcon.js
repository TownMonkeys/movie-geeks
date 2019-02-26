import React from 'react';
import menu from '../../images/menu.svg';

const MenuIcon = (props) => {
  const {openSideWrapper, sideWrapperOpened} = props;

  return (
    <button 
      className="button menuIcon header__menuIcon" 
      type="button" 
      aria-controls="sideWrapper" 
      aria-pressed={sideWrapperOpened} 
      aria-expanded={sideWrapperOpened}
      onClick={openSideWrapper}
    >
      <img src={menu} alt="Menu Icon" className="image"/>
    </button>
  );
}

export default MenuIcon;