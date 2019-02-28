import React, { Component } from 'react';
import Header from './header.js/Header';
import './App.scss';
import './container.scss';
import './list.scss';
import './image.scss';
import './avatar.scss';
import './button.scss';

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