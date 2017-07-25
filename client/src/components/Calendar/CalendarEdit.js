import React from 'react';
import { Textfield, Button } from 'react-mdl';

const CalendarEdit = ({ showDatesForDate, showDatesForDateTemp, calendarEditMode, calendarChangeDate, calendarSetDate, calendarToggleEditMode }) => {
  if (!calendarEditMode) return null;

  return (
    <div className="calendar-edit-container">
      <form onSubmit={e => {
        e.preventDefault();
        calendarSetDate(showDatesForDateTemp);
      }}>
        <Textfield type="date" floatingLabel value={showDatesForDateTemp} onChange={(e) => { calendarChangeDate(e.target.value) }} label="Date" autoFocus />
        <Button raised accent type="submit">Save</Button>
      </form>
    </div>
  );
}

export default CalendarEdit;
