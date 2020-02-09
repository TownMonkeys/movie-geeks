import React, { memo, useState, useCallback  } from 'react';
import {
  CommunicationBtn,
} from '../style';
import Icon from '../../../svgs/chatSvg';

const Chat = (props) => {
  const [ expanded, setExpanded ] = useState(false);

  const toggle = useCallback(() => {
    setExpanded(!expanded);
  }, [ expanded ]);

  return (
    <>
      <CommunicationBtn
        aria-label="toggle chat panel"
        aria-controls="chatPanel"
        aria-pressed={expanded} 
        aria-expanded={expanded}
        onClick={toggle}
      >
        <Icon />
      </CommunicationBtn>
    </>
  );
}

export default memo(Chat);