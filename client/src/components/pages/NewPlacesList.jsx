import React, { Component } from 'react';
import { getPlaces } from './../utils/requests';

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
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Continent</th>
              <th>Population</th>
              <th>Preference</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(({ _id, title, continent, population, preference }) => (
              <tr key={_id}>
                <td>{title}</td>
                <td>{continent}</td>
                <td>{population}</td>
                <td>{preference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NewPlacesList;
