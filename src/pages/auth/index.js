import React, { memo } from 'react';
import {
  AuthPage
} from './style';
import AuthForm from '../../components/authForm';

const SignUp = (props) => {
  const { action } = props;

  return (
    <AuthPage>
      <AuthForm action={action} />
    </AuthPage>
  );
}

export default memo(SignUp);