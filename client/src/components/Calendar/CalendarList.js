import React from 'react';
import { Icon } from 'react-mdl';

const CalendarList = ({ showDatesForDate, calendarToggleEditMode, calendarEditMode }) => {
    if (calendarEditMode) return null;

    return (
        <div className="calendar-list" onClick={e => { calendarToggleEditMode(); }}>
            <Icon name="alarm" /> {showDatesForDate}
        </div>
    );
}

export default CalendarList;
