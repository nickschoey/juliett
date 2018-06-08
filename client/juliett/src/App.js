import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      baseURL: 'http://localhost:3000',
    }
  }

  render() {
    return (
      <div className="App">
        <div className="navigation">

        </div>
        <div className="logo"></div>
        <div className="cards"></div>
      </div>
    );
  }
}

export default App;
