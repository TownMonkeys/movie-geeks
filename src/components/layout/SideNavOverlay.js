import React from 'react';

const SideNavOverlay = () => {
  const handleClick = () => {
    const menuIcon = window.document.querySelector('.menuIcon');
    menuIcon.setAttribute('aria-pressed', 'false');
    menuIcon.setAttribute('aria-expanded', 'false');
  }

  return (
    <div 
      className="sideNavOverlay"
      onClick={handleClick}
    ></div>
  );
}

export default SideNavOverlay;