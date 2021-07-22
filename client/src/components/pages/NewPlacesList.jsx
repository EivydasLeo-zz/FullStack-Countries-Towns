import React, { Component } from 'react';
import { getPlaces } from './../utils/requests';
import { Link } from 'react-router-dom';

class NewPlacesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getPlaces();
  }

  async getPlaces() {
    const places = await getPlaces();
    this.setState({ data: places });
  }

  render() {
    return (
      <div className="newPlacesList-container">
        {this.state.data.map(({ _id, title, continent, population, preference }) => (
          <div key={_id} className="card bg-dark cardPlaces ">
            <div className="card-body">
              <h5 className="card-title ">{title}</h5>
              <h6 className="card-subtitle mb-2 ">Continent: {continent}</h6>
              <h6 className="card-subtitle mb-2 ">Population: {population}</h6>
              <h6 className="card-subtitle mb-2 ">Preference: {preference}</h6>
              <Link to="#" className="btn btn-warning">
                Edit
              </Link>
              <Link to="#" className="btn btn-danger">
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default NewPlacesList;
