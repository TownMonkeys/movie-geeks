import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import './App.scss';
import './sass/basic-components/container.scss';
import './sass/basic-components/list.scss';
import './sass/basic-components/image.scss';
import './sass/basic-components/avatar.scss';
import './sass/basic-components/button.scss';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  state = { 
    test: 1
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main className="main" role="main">
            <Switch>
              <Route path="/" exact component={Dashboard} /> 
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;