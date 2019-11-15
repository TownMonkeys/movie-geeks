import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import './App.scss';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* {state} */}
        <Header />
        <main onClick={handleClick} className="main" role="main">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;