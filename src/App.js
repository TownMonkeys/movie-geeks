import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import './App.scss';
import './sass/basic-components/container.scss';
import './sass/basic-components/list.scss';
import './sass/basic-components/image.scss';
import './sass/basic-components/avatar.scss';
import './sass/basic-components/button.scss';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main className="main" role="main">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;