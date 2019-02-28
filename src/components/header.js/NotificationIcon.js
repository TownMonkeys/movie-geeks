import React from 'react';
import notificationIcon from '../../images/notifications.svg';
import './NotificationIcon.scss';

const NotificationIcon = () => {
  return (
    <button className="button notificationIcon" type="button">
      <img src={notificationIcon} alt="Notification Icon" className="image"/>
    </button>
  );
}

export default NotificationIcon;