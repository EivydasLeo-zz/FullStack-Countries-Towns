import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Home
          </Link>

          <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item  pr-1 pl-1">
                <Link className="nav-link" to="/new_place">
                  Create New Country or Town
                </Link>
              </li>
              <li className="nav-item pr-1 pl-1">
                <Link className="nav-link" to="/countries_towns">
                  Country And Town List
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
