import React from 'react';
import user from '../../images/user.jpg';
import './Notification.scss';

const Notification = React.forwardRef((props, ref) => {
  const {notificationPanelOpened} = props;

  return (
    <li className="notification">
      <a 
        href="#" 
        className="link notification__link" 
        tabIndex={notificationPanelOpened ? '0' : '-1'}
        ref={ref}
      >
        <img src={user} alt="Moaaz's Avatar" className="image avatar notification__avatar avatar_size_med"/>
        <p className="notification__content">
          <span className="notification__name">Moaaz Bhnas</span> joined the party.
        </p>
      </a>
    </li>
  );
});

export default Notification;