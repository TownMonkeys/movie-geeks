import React from 'react';
import notifications from '../../images/notifications.svg';

const NotificationsIcon = React.forwardRef((props, notificationsIcon) => {
  const {NotificationsPanelOpened, toggleNotificationsPanel} = props;

  return (
    <button 
      className="button notificationsIcon header__notificationsIcon" 
      type="button"
      aria-controls="notificationsPanel" 
      aria-pressed={NotificationsPanelOpened} 
      aria-expanded={NotificationsPanelOpened}
      onClick={toggleNotificationsPanel}
      ref={notificationsIcon}
    >
      <img className="image" src={notifications} alt="Notifications Icon"/>
      <span className="notificationsIcon__badge">7</span>
    </button>
  );
})

export default NotificationsIcon;