import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { Route, Switch } from 'react-router';
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar>
          <Switch>
            <Route path="/"></Route>
            <Route></Route>
          </Switch>
        </Navbar>
        <Main />
      </div>
    );
  }
}

export default App;
