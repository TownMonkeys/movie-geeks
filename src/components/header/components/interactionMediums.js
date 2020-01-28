import React, { memo, useState } from 'react';
import { 
  StyledInteractionMediums,
  InteractionMedium,
  NotificationsBtn,
  NotificationsIcon
} from '../style';
import Notifications from './notifications';

const InteractionMediums = () => {
  return (
    <StyledInteractionMediums>
      <InteractionMedium>
        <Notifications />
      </InteractionMedium>
      <InteractionMedium>
        
      </InteractionMedium>
    </StyledInteractionMediums>
  );
}

export default memo(InteractionMediums);