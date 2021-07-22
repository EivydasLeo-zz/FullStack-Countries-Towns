import React, { Component } from 'react';
import { postNewPlace } from '../utils/requests';
class NewPlace extends Component {
  state = {
    title: '',
    continent: '',
    population: 0,
    preference: '',
  };

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  handleContinent = (event) => {
    this.setState({ continent: event.target.value });
  };
  handlePopulation = (event) => {
    this.setState({ population: event.target.value });
  };
  handlePreference = (event) => {
    this.setState({ preference: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const objToSend = {
      title: this.state.title,
      continent: this.state.continent,
      population: this.state.population,
      preference: this.state.preference,
    };
    postNewPlace(objToSend);
    const history = this.props.history;
    history.push('/places');
    console.log('I will send this ', objToSend);
  };

  render() {
    return (
      <div className="NewPlace__Container ">
        <form onSubmit={this.handleSubmit} className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12">
            <label className="visually-hsidden">Country or Town Title:</label>
            <div className="input-group">
              <input
                value={this.state.title}
                onChange={this.handleTitle}
                type="text"
                className="form-control"
                placeholder="Title"
              />
            </div>
            <label className="visually-hsidden">Continent:</label>
            <div className="input-group">
              <input
                value={this.state.continent}
                onChange={this.handleContinent}
                type="text"
                className="form-control"
                placeholder="Continent"
              />
            </div>
            <label className="visually-hsidden">Population:</label>
            <div className="input-group">
              <input
                value={this.state.population}
                onChange={this.handlePopulation}
                type="text"
                className="form-control"
                placeholder="Population"
              />
            </div>
          </div>
          <div className="col-12">
            <label className="visually-hidden" htmlFor="inlineFormSelectPref">
              Preference:
            </label>
            <select onChange={this.handlePreference} className="form-select" id="inlineFormSelectPref">
              <option>Choose...</option>
              <option value="Country">Country</option>
              <option value="Town">Town</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-secondary formBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPlace;
