import React, { memo } from 'react';
import ReactAvatar from 'react-avatar';
import { 
  StyledAvatar
} from './style';

const Avatar = (props) => {
  const { user, size } = props;
  const { name, avatar } = user;

  return (
    // <StyledAvatar 
    //   src={avatar} 
    //   alt="User's avatar" 
    //   size={size}
    // />
    <ReactAvatar email="moaaz_bs@yahoo.com" name="Moaaz Bhnas" />
  );
}

export default memo(Avatar);