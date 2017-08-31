import React from 'react';
import { Textfield, Button } from 'react-mdl';

export default class CalendarEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toISOString().split('T')[0],
    }
  }

  render() {
    if (!this.props.calendarEditMode) return null;

    return (
      <div className="calendar-edit-container">
        <form onSubmit={e => {
          e.preventDefault();
          this.props.calendarSetDate(this.state.date);
        }}>
          <Textfield type="date" floatingLabel value={this.state.date} onChange={(e) => { this.setState({ 'date': e.target.value }); }} label="Date" autoFocus />
          <Button raised accent type="submit">Save</Button>
        </form>
      </div>
    );
  }
}
