import React, { memo } from 'react';
import user from '../../images/avatar.svg';
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
        <img src={user} alt="Yurio's Avatar" className="image avatar notification__avatar avatar_size_med"/>
        <p className="notification__content">
          <span className="notification__name">Yurio</span> joined the party.
        </p>
      </a>
    </li>
  );
});

Notification.propTypes = {
  notificationPanelOpened: PropTypes.bool
}

export default memo(Notification);