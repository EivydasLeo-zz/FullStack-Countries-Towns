import React, { Component } from 'react';
import { editOnePlace, getPlaces } from './../utils/requests';
import { deleteOnePlace } from './../utils/requests';

class NewPlacesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getAllPlaces();
  }

  async getAllPlaces() {
    const places = await getPlaces();
    this.setState({ data: places });
  }

  async handleDelete(userId) {
    await deleteOnePlace(userId);
    this.getAllPlaces();
  }

  async handleEdit(userId, newBody) {
    await editOnePlace(userId, newBody);
    this.getAllPlaces();
  }

  async filterOneKind(kind) {
    const allPlaces = await getPlaces();
    const filtered = allPlaces.filter((place) => place.preference === kind);
    console.log(filtered);
    this.setState({ data: filtered });
  }

  render() {
    return (
      <div className="container">
        <div className="filteredBtn">
          <button onClick={() => this.filterOneKind('Town')} className="btn btn-primary">
            Towns
          </button>
          <button onClick={() => this.filterOneKind('Country')} className="btn btn-success">
            Countries
          </button>
          <button onClick={() => this.getAllPlaces()} className="btn btn-info ">
            All Places
          </button>
        </div>
        <div className="newPlacesList-container">
          {this.state.data.map(({ _id, title, continent, population, preference }) => (
            <div key={_id} className="card bg-dark cardPlaces ">
              <div className="card-body">
                <h5 className="card-title ">{title}</h5>
                <h6 className="card-subtitle mb-2 ">Continent: {continent}</h6>
                <h6 className="card-subtitle mb-2 ">Population: {population}</h6>
                <h6 className="card-subtitle mb-2 ">Preference: {preference}</h6>
                <button onClick={() => this.handleEdit(_id)} className="btn btn-warning">
                  Edit
                </button>
                <button onClick={() => this.handleDelete(_id)} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NewPlacesList;
