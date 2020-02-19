import React, { memo } from 'react';
import {
  Form,
  Container,
  Title,
  EncouragingStatement,
  FacebookButton,
  FacebookIcon,
  Divider,
  Input,
  Button,
  P,
  Link
} from '../style';
import facebookIcon from '../../../images/facebook.svg';

const LoginForm = () => {
  return (
    <Form>
      <Container>
        <Title>Log in</Title>

        <FacebookButton>
          <FacebookIcon src={facebookIcon} alt="Facebook icon" />
          Log in with Facebook
        </FacebookButton>

        <Divider>or</Divider>

        <Input 
          type="email" 
          aria-label="email"
          placeholder="Email"
        />

        <Input 
          type="password"
          aria-label="password"
          placeholder="Password"
        />

        <Button 
          type="submit"
          bg="pink"
        >Log in</Button>
      </Container>

      <Container>
        <P>
          Don't have an account?
          <Link href="#">Sign up</Link>
        </P>
      </Container>
    </Form>
  );
}

export default memo(LoginForm);