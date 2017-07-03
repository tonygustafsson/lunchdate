import React, { Component } from 'react';

class DatesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <li className="DatesListItem">
        Time: {this.props.date.time}<br />
        User: {this.props.date.user}<br />
        Place: {this.props.date.place}<br />
        TakeAway: {this.props.date.takeaway ? 'Yes' : 'No'}<br />
        Note: {this.props.date.note ? this.props.date.note : ''}<br />
        <a onClick={() => this.props.removeDate(this.props.date.key)}> [del]</a>
      </li>
    );
  }
}

export default DatesListItem;
