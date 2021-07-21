import React, { Component } from 'react';

class NewPlaces extends Component {
  state = {};
  render() {
    return (
      <div className="NewPlaces__Container ">
        <form className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12">
            <label className="visually-hsidden">Country or Town Title</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Title" />
            </div>
            <label className="visually-hsidden">Continent</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Continent" />
            </div>
            <label className="visually-hsidden">Population</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Population" />
            </div>
          </div>
          <div className="col-12">
            <label className="visually-hidden" htmlFor="inlineFormSelectPref">
              Preference
            </label>
            <select className="form-select" id="inlineFormSelectPref">
              <option selected>Choose...</option>
              <option value={1}>Country</option>
              <option value={2}>Town</option>
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

export default NewPlaces;
