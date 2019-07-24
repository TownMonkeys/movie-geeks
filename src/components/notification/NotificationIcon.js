import React, { useCallback, memo, forwardRef } from 'react';
import notifications from '../../images/notifications.svg';
import './NotificationIcon.scss';
import PropTypes from 'prop-types';

const NotificationIcon = forwardRef((props, notificationIcon) => {
  /* props */
  const {notificationButtonPressed, toggleNotificationPanel, closeNotificationPanel} = props;
  const notificationsNum = 7;

  const handleEscKey = useCallback((e) => {
    const escIsPressed = e.keyCode === 27;
    if (escIsPressed) {
      closeNotificationPanel();
    }
  }, [])

  return (
    <button 
      className="button notificationIcon header__notificationIcon" 
      type="button"
      aria-controls="notificationPanel" 
      aria-pressed={notificationButtonPressed} 
      aria-expanded={notificationButtonPressed}
      onClick={toggleNotificationPanel}
      onKeyDown={(e) => handleEscKey(e)}
      ref={notificationIcon}
    >
      <img src={notifications} alt="Notification Icon" className="image"/>
      <span className="notificationIcon__badge" aria-live="polite" aria-atomic="true">
        {notificationsNum} 
        <span className="notificationIcon__a11yContent">{(notificationsNum === 1) ? 'notification' : 'notifications'}</span>
      </span>
    </button>
  );
})

NotificationIcon.propTypes = {
  notificationPanelOpened: PropTypes.bool,
  toggleNotificationPanel: PropTypes.func
}

export default memo(NotificationIcon);