import React, { Component } from 'react';
import './App.css';
import ItemList from './items-list'
import Navigation from './navbar'
import Accounts from './accounts'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import AddItem from './add-item'

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      baseURL: 'http://localhost:3000',
    }
  }

  render() {
    return (
    <Router>
      <div className="App">
        <div className="nav">
          <Navigation/>
        </div>
        <div className="body">
          <Route path="/home"
          render={() => (<ItemList baseUrl={this.state.baseURL}/>)}/>
          <Route path="/accounts"
          render={() => (<Accounts baseUrl={this.state.baseURL}/>)}/>
          <Route path="/add-item"
          render={() => (<AddItem baseUrl={this.state.baseURL}/>)}/>
      </div>
    </div>
    </Router>
    );
  }
}

export default App;
