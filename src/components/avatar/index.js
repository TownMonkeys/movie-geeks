import React, { memo } from 'react';
import fallbackAvatar from '../../images/avatar.svg';
import { 
  StyledAvatar
} from './style';

const Avatar = (props) => {
  const { size, email } = props;

  return (
    <StyledAvatar 
      email={email}
      src={fallbackAvatar}
      alt="User's avatar" 
      size={size}
      round
    />
  );
}

export default memo(Avatar);