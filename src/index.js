import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyles from './global.css';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import dotenv from 'dotenv';
import firebase from './config/firebaseConfig';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore';
import firebaseConfig from './config/firebaseConfig';
import { AuthProvider } from './auth';

// Environment variables
dotenv.config();

// redux
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, firebaseConfig)
  )
);

const rrfConfig = {
  useFirestoreForProfile: true,
  userProfile: 'users'
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps} >
      <Router>
        <AuthProvider>
          <GlobalStyles />
          <App />
        </AuthProvider>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>, 
  document.getElementById('root')
);

