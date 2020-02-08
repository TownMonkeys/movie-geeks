import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import './index.scss';
import App from './App';
import Login from './components/login/Login';

class Root extends React.Component {
  render() {
    return  (
     <Router>
      <Switch>
        <Route  path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </Switch>
     </Router>  
    );
  }
}





ReactDOM.render(<Root />, document.getElementById('root'));
