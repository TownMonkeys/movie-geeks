import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import App from './app';

class Root extends React.Component {
  render() {
    return  (
      <Router>
        <Switch>
          <Route  path="/" component={App} />
        </Switch>
      </Router>  
    );
  }
}





ReactDOM.render(<Root />, document.getElementById('root'));
