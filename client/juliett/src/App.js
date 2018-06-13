import React, { Component } from 'react';
import './App.css';
import ItemList from './items-list'
import Navigation from './navbar'
import Accounts from './accounts'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddItem from './add-item'
import Pay from './pay'
import TransactionList from './transactionlist'

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      baseUrl: 'http://localhost:3000',
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
          render={() => (<ItemList baseUrl={this.state.baseUrl}/>)}/>
          <Route path="/pay"
          render={() => (<Pay baseUrl={this.state.baseUrl}/>)}/>
          <Route path="/accounts"
          render={() => (<Accounts baseUrl={this.state.baseUrl}/>)}/>
          <Route path="/add-item"
          render={() => (<AddItem baseUrl={this.state.baseUrl}/>)}/>
          <Route path="/recent-transactions"
          render={() => (<TransactionList baseUrl={this.state.baseUrl}/>)}/>

      </div>
    </div>
    </Router>
    );
  }
}

export default App;
