import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import GlobalStyles from './global.css';
import Header from './components/header';
import Home from './pages/home';
import Auth from './pages/auth';
import { 
  StyledApp,
  Main
} from './style';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Main>
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
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
    </>
  );
}

export default App;