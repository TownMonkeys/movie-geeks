import React, { useEffect } from 'react';
import Notification from './Notification';
import './NotificationPanel.scss';
import PropTypes from 'prop-types';

const NotificationPanel = (props) => {
  const notificationPanel = React.createRef();

  /* props */
  const {closeNotificationPanel} = props;

  const handleClickOutside = (e) => {
    const clickIsOnNotificationPanel = notificationPanel.current.contains(e.target);
    const clickIsOnNotificationIcon = props.notificationIcon.current.contains(e.target);
    if (!(clickIsOnNotificationPanel || clickIsOnNotificationIcon)) {
      closeNotificationPanel();
    }
  }

  const handleEscKey = (e) => {
    const escIsPressed = e.keyCode === 27;
    if (escIsPressed) {
      closeNotificationPanel();
    }
  }

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
      onKeyDown={handleEscKey}
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

export default NotificationPanel;