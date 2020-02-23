import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// Redux
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import dotenv from 'dotenv';

// Environment variables
dotenv.config();

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root')
);
