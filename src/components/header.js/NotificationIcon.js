import React from 'react';
import notificationIcon from '../../images/notifications.svg';
import './NotificationIcon.scss';

const NotificationIcon = () => {
  return (
    <button className="button notificationIcon header__notificationIcon" type="button">
      <img src={notificationIcon} alt="Notification Icon" className="image"/>
      <span className="notificationIcon__badge">7</span>
    </button>
  );
}

export default NotificationIcon;