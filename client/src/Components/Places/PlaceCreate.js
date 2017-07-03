import React, { Component } from 'react';

class PlaceCreate extends Component {
  constructor(props) {
    super(props);

    this.updateNewPlaceName = this.updateNewPlaceName.bind(this);
    this.createNewPlace = this.createNewPlace.bind(this);

    this.state = {
      newPlaceName: ""
    };
  }

  componentDidMount() {

  }

  updateNewPlaceName(e) {
    this.setState({
      newPlaceName: e.target.value,
    });
  }

  createNewPlace(e) {
    e.preventDefault();

    fetch('http://localhost:3000/lunchdate/place/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.newPlaceName
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        var places = [];

        responseJson.forEach(place => {
            places.push({
              'key': place.id,
              'name': place.name,
              'identifier': place.identifier
            });
        });

        this.props.updatePlaces(places);
    })
    .then((e) => {
      this.setState({
          newPlaceName: ''
      });
    });
  }

  render() {
    return (
      <div className="PlaceCreate">
        <h2>Create new place</h2>

        <form method="post" onSubmit={this.createNewPlace}>
          <input type="text" value={this.state.newPlaceName} onChange={this.updateNewPlaceName} />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default PlaceCreate;
