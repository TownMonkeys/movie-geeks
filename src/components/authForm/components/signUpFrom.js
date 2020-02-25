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
  AuthError,
  ErrorIcon,
  Button,
  P,
  StyledLink
} from '../style';
import facebookIcon from '../../../images/facebook.svg';
import errorIcon from '../../../images/alert.svg';
import { connect } from 'react-redux';
import { signUp } from '../../../store/actions/authActions';

const SignUpFrom = (props) => {
  // props
  const { signUp, authError } = props;

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    signUp({ username, email, password });
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
          type="text"
          aria-label="user name"
          placeholder="Username"
          value={username}
          required
          onChange={event => setUsername(event.target.value)}
        />

        <Input 
          type="email" 
          aria-label="email"
          placeholder="Email"
          value={email}
          required
          onChange={event => setEmail(event.target.value)}
        />

        <Input 
          type="password"
          aria-label="password"
          placeholder="Password"
          value={password}
          required
          onChange={event => setPassword(event.target.value)}
        />

        {authError && <AuthError>
          {'login failed'}
          <ErrorIcon src={errorIcon} alt="" />
        </AuthError>}

        <Button 
          type="submit"
          bg="pink"
        >Sign up</Button>
      </Container>

      <Container>
        <P>
          Have an account?
          <StyledLink to="login">Log in</StyledLink>
        </P>
      </Container>
    </Form>
  );
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: creds => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(SignUpFrom));