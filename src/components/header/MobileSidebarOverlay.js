import React from 'react';
import './MobileSidebarOverlay.scss';

const MobileSidebarOverlay = (props) => {
  const {closeMobileSidebar} = props;

  return (
    <div 
      className="header__mobileSidebarOverlay"
      onClick={closeMobileSidebar}
    ></div>
  );
}

export default MobileSidebarOverlay;