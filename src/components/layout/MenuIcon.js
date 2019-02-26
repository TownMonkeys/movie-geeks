import React from 'react';
import menu from '../../images/menu.svg';

const MenuIcon = () => {
  return (
    <button className="button menuIcon header__menuIcon" type="button">
      <img src={menu} alt="Menu Icon" className="image"/>
    </button>
  );
}

export default MenuIcon;