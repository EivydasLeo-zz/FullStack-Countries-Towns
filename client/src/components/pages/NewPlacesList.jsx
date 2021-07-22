import React, { Component } from 'react';
import { getPlaces } from './../utils/requests';
import { deleteOnePlace } from './../utils/requests';

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

  async handleDelete(userId) {
    await deleteOnePlace(userId);
    this.getPlaces();
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
              <button className="btn btn-warning">Edit</button>
              <button onClick={() => this.handleDelete(_id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default NewPlacesList;
