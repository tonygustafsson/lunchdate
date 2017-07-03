import React, { Component } from 'react';
import DatesListItem from './DatesListItem.js';

class DatesList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="DatesList">
        <h2>Dates</h2>

        <ul>
          {this.props.dates.map((date) => {
              return <DatesListItem key={date.key} date={date} removeDate={this.props.removeDate} />
          })}
        </ul>
      </div>
    );
  }
}

export default DatesList;
