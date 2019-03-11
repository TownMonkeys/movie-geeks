import React from 'react';
import user from '../../images/user.svg';
import './Notification.scss';
import PropTypes from 'prop-types';

const Notification = React.forwardRef((props, ref) => {
  return (
    <li className="notification">
      <a 
        href="#" 
        className="link notification__link" 
        ref={ref}
      >
        <img src={user} alt="Hajar's Avatar" className="image avatar notification__avatar avatar_size_med"/>
        <p className="notification__content">
          <span className="notification__name">Hajar Bhnas</span> joined the party.
        </p>
      </a>
    </li>
  );
});

Notification.propTypes = {
  notificationPanelOpened: PropTypes.bool
}

export default Notification;