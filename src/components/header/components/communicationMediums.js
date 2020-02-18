import React, { memo } from 'react';
import { 
  StyledCommunicationMediums,
  CommunicationMedium
} from '../style';
import Notifications from './notifications';
import Chat from './chat';

const CommunicationMediums = () => {
  return (
    <StyledCommunicationMediums>
      <CommunicationMedium>
        <Chat />
      </CommunicationMedium>
      <CommunicationMedium>
        <Notifications />
      </CommunicationMedium>
    </StyledCommunicationMediums>
  );
}

export default memo(CommunicationMediums);