import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
    <Router>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Main>
          <Switch>
            <Route path="/" exact component={Home} />
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
    </Router>
  );
}

export default App;