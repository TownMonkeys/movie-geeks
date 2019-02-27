import React from 'react';
import './NotificationsOverlay.scss';

const NotificationsOverlay = (props) => {
  const {closeNotificationsPanel} = props;

  return (
    <div 
      className="header__notificationsOverlay"
      onClick={closeNotificationsPanel}
    ></div>
  );
}

export default NotificationsOverlay;