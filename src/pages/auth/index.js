import React, { memo, useEffect } from 'react';
import {
  AuthPage
} from './style';
import AuthForm from '../../components/authForm';
import usePrevious from '../../hooks/usePrevious';
import { connect } from 'react-redux';

const Auth = (props) => {
  const { action, auth, history } = props;

  const prevAuthorized = usePrevious(auth.uid);
  useEffect(function redirectToHomeIfAuthorized () {
    if (auth.uid && !prevAuthorized) {
      history.push('/');
    }
  }, [auth.uid]);

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