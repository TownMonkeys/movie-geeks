import React, { useEffect, useState } from 'react';
import firebase from './config/firebaseConfig';
// import 'firebase/auth';
import { useHistory } from 'react-router-dom';
import usePrevious from './hooks/usePrevious';

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  // props
  const { children } = props;
  // console.log(props);

  // state
  const [ user, setUser ] = useState('notSet');
  console.log('user: ', user);
  
  // Add auth listener
  useEffect(function addAuthStateListener() {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);
  
  // Redirect based on the user state
  const history = useHistory();
  const prevUser = usePrevious(user);
  useEffect(function redirectBasedOnAuthState() {
    if (!prevUser && user.uid) { // to redirect only if a user wasn't authenticated, and then signed in
      history.push('/');
    }
  }, [ user ]);

  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {user !== 'notSet' && 
        children
      }
    </AuthContext.Provider>
  )
}

// export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

// facebookAuthProvider.setCustomParameters({
//   'display': 'popup'
// });