import { facebookAuthProvider } from '../../auth';

export const signUp = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((response) => {
      return firestore.collection('users').doc(response.user.uid).set({
        username: credentials.username
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
  }
}

export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'SIGNOUT_ERROR', err })
    })
  }
}

export const logInWithFacebook = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().signInWithPopup(facebookAuthProvider).then(({user, additionalUserInfo}) => {
      (function addUsername() {
        const { isNewUser } = additionalUserInfo;
        if (isNewUser) {
          return firestore.collection('users').doc(user.uid).set({
            username: user.displayName.split(' ')[0]
          }) 
        }
      })();
      dispatch({ type: 'LOGIN_SUCCESS_FACEBOOK' })
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR_FACEBOOK', err })
    })
  }
}

export const resetError = () => {
  return { type: 'RESET_ERROR' }
}