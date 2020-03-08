import React, { memo } from 'react';
import { 
  StyledAvatar
} from './style';
import fallbackAvatar from '../../images/avatar.svg';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    email: state.firebase.auth.email
  }
}

export default connect(mapStateToProps)(memo(Avatar));