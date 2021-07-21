import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
