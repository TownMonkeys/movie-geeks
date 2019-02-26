import React from 'react';
import user from '../../images/user.jpg';

const Notification = () => {
  return (
    <li className="notificationsList__item">
      <a href="" className="link notificationsList__link">
        <img src={user} alt="Moaaz's Avatar" className="image avatar notificationsList__avatar"/>
        <p className="notificationsList__content">
          <span className="notificationsList__name">Moaaz Bhnas</span> joined the party.
        </p>
      </a>
    </li>
  );
}

export default Notification;