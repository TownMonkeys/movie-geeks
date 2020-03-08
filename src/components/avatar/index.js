import React, { memo } from 'react';
import { 
  StyledAvatar
} from './style';
import fallbackAvatar from '../../images/avatar.svg';

const Avatar = (props) => {
  // props
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