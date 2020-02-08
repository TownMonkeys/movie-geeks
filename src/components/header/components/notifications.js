import React, { memo, useState, useCallback } from 'react';
import {
  CommunicationBtn,
  NotificationsNumber,
  NotificationsWord
} from '../style';
import Icon from './bellSvg';

const Notifications = (props) => {
  const [ expanded, setExpanded ] = useState(false);

  const toggle = useCallback(() => {
    setExpanded(!expanded);
  }, [ expanded ]);

  return (
    <>
      <CommunicationBtn
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
      </CommunicationBtn>
    </>
  );
}

export default memo(Notifications);