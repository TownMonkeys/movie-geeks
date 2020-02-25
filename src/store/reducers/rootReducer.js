import { combineReducers } from 'redux';
import authReducer from './authReducer';
import movieReducer from './movieReducer';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  movie: movieReducer,
  firebase: firebaseReducer
});

export default rootReducer;