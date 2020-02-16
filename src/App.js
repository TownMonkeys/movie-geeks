import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './global.css';
import Header from './components/header';
import Home from './pages/home';
import { 
  StyledApp,
  Main
} from './style';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Main>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Main>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;