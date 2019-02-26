import React from 'react';

const NotificationsOverlay = (props) => {
  const {closeNotificationsPanel} = props;

  return (
    <div 
      className="notificationsOverlay"
      onClick={closeNotificationsPanel}
    ></div>
  );
}

export default NotificationsOverlay;