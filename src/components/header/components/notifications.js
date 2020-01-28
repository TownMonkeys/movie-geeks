import React, { memo, useState, useCallback } from 'react';
import icon from '../../../images/bell.svg';
import {
  NotificationsBtn,
  NotificationsIcon,
  NotificationsNumber,
  NotificationsWord
} from '../style';

const Notifications = (props) => {
  const [ expanded, setExpanded ] = useState(false);

  const toggle = useCallback(() => {
    setExpanded(!expanded);
  }, [ expanded ]);

  return (
    <>
      <NotificationsBtn
        aria-label="toggle notifications panel"
        aria-controls="notificationPanel"
        aria-pressed={expanded} 
        aria-expanded={expanded}
        onClick={toggle}
      >
        <NotificationsIcon src={icon} alt="bell" />
        <NotificationsNumber
          aria-live="polite"
          aria-atomic="true"
        >
          7 <NotificationsWord>notifications</NotificationsWord>
        </NotificationsNumber>
      </NotificationsBtn>
    </>
  );
}

export default memo(Notifications);