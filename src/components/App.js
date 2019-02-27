import React, { Component } from 'react';
import Header from './header.js/Header';
import './container.scss';

class App extends Component {
  state = {  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;