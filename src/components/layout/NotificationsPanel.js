import React from 'react';
import Notification from './Notification';

const NotificationsPanel = () => {
  return (
    <div className="notificationsPanel header__notificationsPanel">
      <span aria-label="Up Arrow" className="notificationsPanel__arrow"></span>

      <ul className="list notificationsList" role="menu">
        {
          Array(7).fill(null).map((e, i) => (
            <Notification key={i} />
          ))
        }
      </ul>
    </div>
  );
}

export default NotificationsPanel;