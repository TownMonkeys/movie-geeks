import React from 'react';
import notifications from '../../images/notifications.svg';
import './NotificationIcon.scss';

const NotificationIcon = React.forwardRef((props, notificationIcon) => {
  const {notificationPanelOpened, toggleNotificationPanel} = props;

  return (
    <button 
      className="button notificationIcon header__notificationIcon" 
      type="button"
      aria-controls="notificationPanel" 
      aria-pressed={notificationPanelOpened} 
      aria-expanded={notificationPanelOpened}
      onClick={toggleNotificationPanel}
      ref={notificationIcon}
    >
      <img src={notifications} alt="Notification Icon" className="image"/>
      <span className="notificationIcon__badge">7</span>
    </button>
  );
}
)
export default NotificationIcon;