import React from 'react';
import menu from '../../images/menu.svg';

const MenuIcon = () => {
  const menuIcon = React.createRef();

  const handleClick = () => {
    menuIcon.current.setAttribute('aria-pressed', 'true');
    menuIcon.current.setAttribute('aria-expanded', 'true');
  }

  return (
    <button 
      className="button menuIcon header__menuIcon" 
      type="button" 
      aria-controls="sideWrapper" 
      aria-pressed="false" 
      aria-expanded="false"
      ref={menuIcon}
      onClick={handleClick}
    >
      <img src={menu} alt="Menu Icon" className="image"/>
    </button>
  );
}

export default MenuIcon;