import React, { Component } from 'react';
import Header from './header.js/Header';
import './container.scss';
import './list.scss';
import './avatar.scss';

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