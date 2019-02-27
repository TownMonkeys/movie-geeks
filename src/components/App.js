import React, { Component } from 'react';
import Header from './header/Header';
import './App.scss';
import './Container.scss';
import './Link.scss';
import './List.scss';
import './Image.scss';
import './Avatar.scss';
import Footer from './footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main role="main">
            <Route exact path="/" component={Dashboard} />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
