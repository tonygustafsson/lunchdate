import React, { Component } from 'react';
import PlaceCreate from './PlaceCreate.js';
import PlacesList from './PlacesList.js';

class Places extends Component {
  constructor(props) {
    super(props);

    this.updatePlaces = this.updatePlaces.bind(this);
    this.removePlace = this.removePlace.bind(this);

    this.state = {
        'places': []
    };
  }

  updatePlaces(places) {
    this.setState({
      'places': places
    });
  }

  componentDidMount() {
    this.listPlaces();
  }

  listPlaces() {
    return fetch('http://localhost:3000/lunchdate/place/list')
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

                  this.setState({
                    places: places
                  });
              });
  }

  removePlace(id) {
    fetch('http://localhost:3000/lunchdate/place/remove', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id
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

          this.setState({
            places: places
          });
      });
  }

  render() {
    return (
      <div className="Places">
        <PlaceCreate places={this.state.places} updatePlaces={this.updatePlaces} />
        <PlacesList places={this.state.places} removePlace={this.removePlace} />

        <hr />
      </div>
    );
  }
}

export default Places;
