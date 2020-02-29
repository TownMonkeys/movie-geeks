import React, { memo, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Form,
  Container,
  Title,
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
import { logIn, logInWithFacebook } from '../../../store/actions/authActions';

const LoginForm = (props) => {
  // props
  const { logIn, logInWithFacebook, authError } = props;

  // inputs
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    
    const credentials = { email, password }
    logIn(credentials);
  }, [ email, password ]);

  return (
    <Form onSubmit={handleSubmit} >
      <Container>
        <Title>Log in</Title>

        <FacebookButton onClick={logInWithFacebook} >
          <FacebookIcon src={facebookIcon} alt="Facebook icon" />
          Log in with Facebook
        </FacebookButton>

        <Divider>or</Divider>

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
        >Log in</Button>
      </Container>

      <Container>
        <P>
          Don't have an account?
          <StyledLink to="/signup">Sign up</StyledLink>
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
    logIn: (credentials) => dispatch(logIn(credentials)),
    logInWithFacebook: () => dispatch(logInWithFacebook())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(LoginForm));