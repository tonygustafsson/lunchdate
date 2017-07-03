import React, { Component } from 'react';
import "./PlacesListItem.css";

class PlacesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <li className="PlacesListItem">
        <img src={process.env.PUBLIC_URL + "/img/places/" + this.props.place.identifier + ".png"} alt={this.props.place.name + " logo"} className="place-logo" />
        {this.props.place.name}
        <a onClick={() => this.props.removePlace(this.props.place.key)}> [del]</a>
      </li>
    );
  }
}

export default PlacesListItem;
