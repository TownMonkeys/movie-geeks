import React, { memo, useState, useCallback  } from 'react';
import {
  CommunicationButton,
} from '../style';
import Icon from '../../../svgs/chat';

const Chat = (props) => {
  const [ expanded, setExpanded ] = useState(false);

  const toggle = useCallback(() => {
    setExpanded(!expanded);
  }, [ expanded ]);

  return (
    <>
      <CommunicationButton
        aria-label="toggle chat panel"
        aria-controls="chatPanel"
        aria-pressed={expanded} 
        aria-expanded={expanded}
        onClick={toggle}
      >
        <Icon />
      </CommunicationButton>
    </>
  );
}

export default memo(Chat);