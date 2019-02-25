import React from 'react';
import notifications from '../../images/notifications.svg';

const Notifications = () => {
  return (
    <button className="button notifications" type="button">
      <img className="image" src={notifications} alt="Notifications Icon"/>
      <span className="notifications__badge">3</span>
    </button>
  );
}

export default Notifications;