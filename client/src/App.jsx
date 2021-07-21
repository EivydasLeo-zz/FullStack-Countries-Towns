import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router';
import NewPlaces from './components/pages/NewPlaces';
import NewPlacesList from './components/pages/NewPlacesList';
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route path="/new_place" component={NewPlaces}></Route>
            <Route path="/places" component={NewPlacesList}></Route>
          </Switch>
        </div>
        ;
      </div>
    );
  }
}

export default App;
