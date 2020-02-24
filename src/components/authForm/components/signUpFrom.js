import React, { memo, useState, useCallback } from 'react';
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
  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log({
      email,
      username,
      password
    });
  }, [ email, username, password ]);

  return (
    <Form onSubmit={handleSubmit} >
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
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <Input 
          type="text"
          aria-label="user name"
          placeholder="Username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />

        <Input 
          type="password"
          aria-label="password"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
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