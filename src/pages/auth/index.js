import React, { memo } from 'react';
import {
  AuthPage
} from './style';
import AuthForm from '../../components/authForm';
import { connect } from 'react-redux';

const Auth = (props) => {
  const { action } = props;
  console.log('auth page: ', props);

  return (
    <AuthPage>
      <AuthForm action={action} />
    </AuthPage>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(memo(Auth));