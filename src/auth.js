import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  // props
  const { children } = props;

  // user state
  const [ user, setUser ] = useState(null);

  useEffect(function addAuthStateListener() {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}