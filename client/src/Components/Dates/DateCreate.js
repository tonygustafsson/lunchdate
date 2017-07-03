import React, { Component } from 'react';

class DateCreate extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createNewDate = this.createNewDate.bind(this);

    this.state = {
      newDateTime: "12:00",
      newDateUser: "",
      newDatePlace: "",
      newDateTakeAway: false,
      newDateNote: ""
    };
  }

  componentDidMount() {

  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  createNewDate(e) {
    e.preventDefault();

    fetch('http://localhost:3000/lunchdate/date/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        time: this.state.newDateTime,
        user: this.state.newDateUser,
        place: this.state.newDatePlace,
        takeaway: this.state.newDateTakeAway,
        note: this.state.newDateNote
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
              'place': date.place,
              'takeaway': date.takeaway,
              'note': date.note
            });
        });

        this.props.updateDates(dates);
    })
    .then((e) => {
      this.setState({
        newDateTime: "",
        newDateUser: "",
        newDatePlace: "",
        newDateTakeAway: false,
        newDateNote: ""
      });
    });
  }

  render() {
    return (
      <div className="PlaceDate">
        <h2>Create new date</h2>

        <form method="post" onSubmit={this.createNewDate}>
          <label htmlFor="newDateTime">Time</label>
          <input type="time" id="newDateTime" name="newDateTime" value={this.state.newDateTime} onChange={this.handleInputChange} />

          <label htmlFor="newDateUser">User</label>
          <input type="text" id="newDateUser" name="newDateUser" value={this.state.newDateUser} onChange={this.handleInputChange} />

          <label htmlFor="newDatePlace">Place</label>
          <input type="text" id="newDatePlace" name="newDatePlace" value={this.state.newDatePlace} onChange={this.handleInputChange} />

          <label htmlFor="newDateTakeAway">Takeaway</label>
          <input type="checkbox" id="newDateTakeAway" name="newDateTakeAway" checked={this.state.newDateTakeAway} onChange={this.handleInputChange} />

          <label htmlFor="newDateNote">Note</label>
          <input type="text" id="newDateNote" name="newDateNote" value={this.state.newDateNote} onChange={this.handleInputChange} />

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default DateCreate;
