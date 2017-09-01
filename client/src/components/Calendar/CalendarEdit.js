import React from 'react';
import { Dialog, DialogContent, DialogActions, Textfield, Button } from 'react-mdl';

export default class CalendarEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toISOString().split('T')[0],
    }
  }

  render() {
    return (
      <div className="calendar-edit-container">
        <form onSubmit={e => {
          e.preventDefault();
          this.props.calendarSetDate(this.state.date);
        }}>
          <Dialog open={this.props.calendarEditMode}>
            <DialogContent>
            <Textfield type="date" floatingLabel value={this.state.date} onChange={(e) => { this.setState({ 'date': e.target.value }); }} label="Date" autoFocus />
            </DialogContent>
            <DialogActions>
            <Button raised accent type="submit">Save</Button>            
            </DialogActions>
          </Dialog>
        </form>
      </div>
    );
  }
}
