import React, { memo } from 'react';
import {
  Form,
  Title,
  EncouragingStatement,
  FacebookButton,
  FacebookIcon
} from '../style';
import facebookIcon from '../../../images/facebook.svg';

const SignUpFrom = () => {
  return (
    <Form>
      <Title>Sign up</Title>
      <EncouragingStatement>
        Sign up to discover new movies from your friends.
      </EncouragingStatement>
      <FacebookButton>
        <FacebookIcon src={facebookIcon} alt="Facebook icon" />
        Sign up with Facebook
      </FacebookButton>
    </Form>
  );
}

export default memo(SignUpFrom);