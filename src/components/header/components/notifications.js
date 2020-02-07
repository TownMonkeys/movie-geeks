import React, { memo, useState, useCallback } from 'react';
import icon from '../../../images/bell.svg';
import {
  CommunicationBtn,
  CommunicationIcon,
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
      <CommunicationBtn
        aria-label="toggle notifications panel"
        aria-controls="notificationPanel"
        aria-pressed={expanded} 
        aria-expanded={expanded}
        onClick={toggle}
      >
        <CommunicationIcon src={icon} alt="bell" />
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