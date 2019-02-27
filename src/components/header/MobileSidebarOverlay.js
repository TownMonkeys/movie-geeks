import React from 'react';

const MobileSidebarOverlay = (props) => {
  const {closeMobileSidebar} = props;

  return (
    <div 
      className="sideNavOverlay"
      onClick={closeMobileSidebar}
    ></div>
  );
}

export default MobileSidebarOverlay;