import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import './App.scss';
import './container.scss';
import './list.scss';
import './image.scss';
import './avatar.scss';
import './button.scss';
import Dashboard from './dashboard/Dashboard';

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