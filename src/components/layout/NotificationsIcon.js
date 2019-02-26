import React from 'react';
import notifications from '../../images/notifications.svg';

const NotificationsIcon = () => {
  return (
    <button className="button notificationsIcon header__notificationsIcon" type="button">
      <img className="image" src={notifications} alt="Notifications Icon"/>
      <span className="notificationsIcon__badge">7</span>
    </button>
  );
}

export default NotificationsIcon;