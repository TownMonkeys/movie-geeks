import React from 'react';
import menu from '../../images/menu.svg';
import './MenuIcon.scss';

const MenuIcon = () => {

  return (
    <button 
      className="button menuIcon header__menuIcon" 
      type="button" 
      aria-controls="mobileSideBar" 
      aria-pressed="false" 
      aria-expanded="false"
    >
      <img src={menu} alt="Menu Icon" className="image"/>
    </button>
  );
}

export default MenuIcon;