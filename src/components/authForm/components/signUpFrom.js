import React, { memo, useState, useCallback } from 'react';
import {
  Form,
  Container,
  Title,
  EncouragingStatement,
  Divider,
  Input,
  UsernameFeedback,
  AuthError,
  ErrorIcon,
  Button,
  P,
  StyledLink
} from '../style';
// import FacebookButton from './facebookButton';
import errorIcon from '../../../images/alert.svg';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signUp } from '../../../store/actions/authActions';
import { firestoreConnect } from 'react-redux-firebase';

const SignUpFrom = (props) => {
  // props
  const { signUp, authError, usernames } = props;

  // inputs
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ validUsername, setValidUsername ] = useState(null);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const credentials = { username, email, password }
    signUp(credentials);
  }, [ email, username, password ]);

  const handleUsernameChange = useCallback((event) => {
    const username = event.target.value;
    setUsername(username)
    setValidUsername(
      username !== '' ?
      !usernames[username] : 
      null
    )
  }, [ usernames ]);

  return (
    <Form onSubmit={handleSubmit} >
      <Container>
        <Title>Sign up</Title>

        <EncouragingStatement>
          Sign up to discover new movies from your friends.
        </EncouragingStatement>

        {/* <FacebookButton />

        <Divider>or</Divider> */}

        <Input 
          type="text"
          aria-label="user name"
          placeholder="Username"
          value={username}
          required
          onChange={handleUsernameChange}
        />

        {validUsername !== null && <UsernameFeedback aria-live="polite" aria-atomic="true" valid={validUsername}>
          {
            validUsername ?
            'Valid username' :
            <>Invalid username <ErrorIcon src={errorIcon} alt="" /></>
          }
        </UsernameFeedback>}

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
    authError: state.auth.authError,
    usernames: state.firestore.data.usernames
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) => dispatch(signUp(credentials))
  }
}

export default compose(
  firestoreConnect(() => ['usernames']),
  connect(mapStateToProps, mapDispatchToProps)
)(memo(SignUpFrom));