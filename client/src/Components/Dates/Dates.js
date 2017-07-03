import React, { Component } from 'react';
import DateCreate from './DateCreate.js';
import DatesList from './DatesList.js';

class Dates extends Component {
  constructor(props) {
    super(props);

    this.updateDates = this.updateDates.bind(this);
    this.removeDate = this.removeDate.bind(this);

    this.state = {
        'dates': []
    };
  }

  updateDates(dates) {
    this.setState({
      'dates': dates
    });
  }

  componentDidMount() {
    this.listDates();
  }

  listDates() {
    return fetch('http://localhost:3000/lunchdate/date/list')
              .then((response) => response.json())
              .then((responseJson) => {
                  var dates = [];

                  responseJson.forEach(date => {
                      dates.push({
                        'key': date.id,
                        'time': date.time,
                        'user': date.user,
                        'takeaway': date.takeaway,
                        'note': date.note
                      });
                  });

                  this.setState({
                    dates: dates
                  });
              });
  }

  removeDate(id) {
    fetch('http://localhost:3000/lunchdate/date/remove', {
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
          var dates = [];

          responseJson.forEach(date => {
              dates.push({
                'key': date.id,
                'time': date.time,
                'user': date.user,
                'takeaway': date.takeaway,
                'note': date.note
              });
          });

          this.setState({
            dates: dates
          });
      });
  }

  render() {
    return (
      <div className="Dates">
        <DateCreate dates={this.state.dates} updateDates={this.updateDates} />
        <DatesList dates={this.state.dates} removeDate={this.removeDate} />

        <hr />
      </div>
    );
  }
}

export default Dates;
