import React, { Component } from 'react';
import Header from './header/Header';
import './App.scss';
import './Container.scss';
import './Link.scss';
import './List.scss';
import './Image.scss';
import './Avatar.scss';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
