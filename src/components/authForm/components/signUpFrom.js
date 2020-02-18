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

const SignUpFrom = () => {
  return (
    <Form>
      <Container>
        <Title>Sign up</Title>

        <EncouragingStatement>
          Sign up to discover new movies from your friends.
        </EncouragingStatement>

        <FacebookButton>
          <FacebookIcon src={facebookIcon} alt="Facebook icon" />
          Sign up with Facebook
        </FacebookButton>

        <Divider>or</Divider>

        <Input 
          type="email" 
          aria-label="email"
          placeholder="Email"
        />

        <Input 
          type="text"
          aria-label="user name"
          placeholder="Username"
        />

        <Input 
          type="password"
          aria-label="password"
          placeholder="Password"
        />

        <Button 
          type="submit"
          bg="pink"
        >Sign up</Button>
      </Container>

      <Container>
        <P>
          Have an account?
          <Link href="#">Log in</Link>
        </P>
      </Container>
    </Form>
  );
}

export default memo(SignUpFrom);