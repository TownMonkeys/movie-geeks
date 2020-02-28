import React, { memo, useEffect } from 'react';
import {
  AuthPage
} from './style';
import AuthForm from '../../components/authForm';
import { connect } from 'react-redux';
import { resetError } from '../../store/actions/authActions';

const Auth = (props) => {
  const { action, resetAuthError } = props;

  useEffect(resetAuthError, [ action ]);

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

const mapDispatchToProps = (dispatch) => {
  return {
    resetAuthError: () => {
      dispatch(resetError())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Auth));