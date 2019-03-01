import React from 'react';
import notifications from '../../images/notifications.svg';
import './NotificationIcon.scss';
import PropTypes from 'prop-types';

const NotificationIcon = React.forwardRef((props, notificationIcon) => {
  const {notificationPanelOpened, toggleNotificationPanel} = props;
  const notificationsNum = 7;

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
      <span className="notificationIcon__badge" aria-live="polite" aria-atomic="true">
        {notificationsNum} <span className="notificationIcon__a11yContent">{(notificationsNum === 1) ? 'notification' : 'notifications'}</span>
      </span>
    </button>
  );
})

NotificationIcon.propTypes = {
  notificationPanelOpened: PropTypes.bool,
  toggleNotificationPanel: PropTypes.func
}

export default NotificationIcon;