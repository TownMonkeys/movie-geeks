import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase'

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  // props
  const { children } = props;
  
  // user state
  const [ user, setUser ] = useState('userNotSet');
  console.log('auth provider: ', user);
  
  // Add auth listener
  useEffect(function addAuthStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('auth change');
      setUser(user);
    });
  }, []);
  
  // Redirect based on the user state
  const history = useHistory();
  useEffect(function redirectBasedOnAuthState() {
    if (user) {
      history.push('/');
    }
  }, [ user ]);

  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {!(user === 'userNotSet') && 
        children
      }
    </AuthContext.Provider>
  )
}