import React, { memo, useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';
import {
  StyledHeader,
  Username
} from '../style';
import Avatar from '../../../components/avatar';
import { connect } from 'react-redux';

const Header = (props) => {
  const { profile } = props;

  const { user } = useContext(AuthContext);

  return (
    <StyledHeader>
      <Avatar email={user.email} size="10rem" />
      <Username>{profile.username}</Username>
    </StyledHeader>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(memo(Header));