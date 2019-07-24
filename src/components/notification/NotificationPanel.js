import React, { useEffect, useRef, useCallback, memo } from 'react';
import Notification from './Notification';
import './NotificationPanel.scss';
import PropTypes from 'prop-types';

const NotificationPanel = (props) => {
  /* props */
  const {closeNotificationPanel} = props;

  /* refs */
  const notificationPanel = useRef();

  /* functions */
  const handleKeyDown = useCallback((e) => {
    const escIsPressed = e.keyCode === 27;
    if (escIsPressed) {
      closeNotificationPanel();
    }
  }, [])

  const handleClickOutside = useCallback((e) => {
    const clickIsOnNotificationPanel = notificationPanel.current.contains(e.target);
    const clickIsOnNotificationIcon = props.notificationIcon.current.contains(e.target);
    if (!(clickIsOnNotificationPanel || clickIsOnNotificationIcon)) {
      closeNotificationPanel();
    }
  }, [])

  useEffect(function addOutsideClickHandler() {
    document.addEventListener('mousedown', handleClickOutside);

    return function removeHandler() {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <div 
      className="notificationPanel header__notificationPanel" 
      id="notificationPanel"
      onKeyDown={(e) => handleKeyDown(e)}
      ref={notificationPanel}
    >
      <span aria-label="Up Arrow" className="notificationPanel__arrow"></span>

      <ul className="list notificationList">
        {
          Array(7).fill(null).map((e, index) => (
            <Notification key={index} />
          ))
        }
      </ul>
    </div>
  );
}

NotificationPanel.propTypes = {
  notificationIcon: PropTypes.object
}

export default memo(NotificationPanel);