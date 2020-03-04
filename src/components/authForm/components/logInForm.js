import React, { memo, useState, useCallback } from 'react';
import {
  Form,
  Container,
  Title,
  Divider,
  Input,
  AuthError,
  ErrorIcon,
  Button,
  P,
  StyledLink
} from '../style';
import FacebookButton from './facebookButton';
import errorIcon from '../../../images/alert.svg';
import { connect } from 'react-redux';
import { logIn } from '../../../store/actions/authActions';

const LoginForm = (props) => {
  // props
  const { logIn, authError } = props;

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

        {/* <FacebookButton />

        <Divider>or</Divider> */}

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

        {authError && <AuthError role="alert" >
          {authError}
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
    logIn: (credentials) => dispatch(logIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(LoginForm));