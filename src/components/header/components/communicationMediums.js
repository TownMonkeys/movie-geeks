import React, { memo } from 'react';
import { 
  StyledCommunicationMediums,
  CommunicationMedium,
  NotificationsBtn,
  NotificationsIcon
} from '../style';
import Notifications from './notifications';

const InteractionMediums = () => {
  return (
    <StyledCommunicationMediums>
      <CommunicationMedium>
        <Notifications />
      </CommunicationMedium>
      <CommunicationMedium>
        
      </CommunicationMedium>
    </StyledCommunicationMediums>
  );
}

export default memo(InteractionMediums);