import React, { memo, useState, useCallback } from 'react';
import {
  CommunicationButton,
  NotificationsNumber,
  NotificationsWord
} from '../style';
import Icon from '../../../svgs/bell';

const Notifications = (props) => {
  const [ expanded, setExpanded ] = useState(false);

  const toggle = useCallback(() => {
    setExpanded(!expanded);
  }, [ expanded ]);

  return (
    <>
      <CommunicationButton
        aria-label="toggle notifications panel"
        aria-controls="notificationPanel"
        aria-pressed={expanded} 
        aria-expanded={expanded}
        onClick={toggle}
      >
        <Icon />
        <NotificationsNumber
          aria-live="polite"
          aria-atomic="true"
        >
          7 <NotificationsWord>notifications</NotificationsWord>
        </NotificationsNumber>
      </CommunicationButton>
    </>
  );
}

export default memo(Notifications);