import React from 'react';

const SideNavOverlay = (props) => {
  const {closeSideWrapper} = props;

  return (
    <div 
      className="sideNavOverlay"
      onClick={closeSideWrapper}
    ></div>
  );
}

export default SideNavOverlay;