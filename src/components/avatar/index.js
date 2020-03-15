import React, { memo } from 'react';
import fallbackAvatar from '../../images/avatar.svg';
import { 
  StyledAvatar
} from './style';
import fallbackAvatar from '../../images/avatar.svg';

const Avatar = (props) => {
<<<<<<< HEAD
=======
  // props
>>>>>>> 1381882650cf298c3d6f2a2070fe6466b9f2f953
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