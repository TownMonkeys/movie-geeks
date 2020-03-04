import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Header from './components/header';
import Auth from './pages/auth';
import Home from './pages/home';
import Profile from './pages/profile';
import { 
  StyledApp,
  Main
} from './style';

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Main>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/user" component={Profile} />
          <Route 
            path="/signup" 
            component={props => <Auth {...props} action={'signup'} />} 
          />
          <Route 
            path="/login" 
            component={props => <Auth {...props} action={'login'} />} 
          />
        </Switch>
      </Main>
    </StyledApp>
  );
}

export default App;