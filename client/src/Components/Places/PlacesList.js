import React, { Component } from 'react';
import PlacesListItem from './PlacesListItem.js';
import './PlacesList.css';

class PlacesList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="PlacesList">
        <h2>Places</h2>

        <ul>
          {this.props.places.map((place) => {
              return <PlacesListItem key={place.key} place={place} removePlace={this.props.removePlace} />
          })}
        </ul>
      </div>
    );
  }
}

export default PlacesList;
