import React from 'react';
import user from '../../images/user.jpg';

const Notification = React.forwardRef((props, ref) => {
  const {notificationsPanelOpened} = props;

  return (
    <li className="notificationsList__item">
      <a 
        href="#" 
        className="link notificationsList__link" 
        tabIndex={notificationsPanelOpened ? '0' : '-1'}
        ref={ref}
      >
        <img src={user} alt="Moaaz's Avatar" className="image avatar notificationsList__avatar"/>
        <p className="notificationsList__content">
          <span className="notificationsList__name">Moaaz Bhnas</span> joined the party.
        </p>
      </a>
    </li>
  );
});

export default Notification;