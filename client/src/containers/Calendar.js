import { connect } from 'react-redux';
import { calendarToggleEditMode, calendarSetDate, calendarChangeDate, datesListAjaxGet } from '../actions';
import CalendarList from '../Components/Calendar/CalendarList';
import CalendarEdit from '../Components/Calendar/CalendarEdit';
import './Calendar.css';

const mapStateToProps = (state, ownProps) => {
  return {
    showDatesForDate: state.dates.showDatesForDate,
    showDatesForDateTemp: state.dates.showDatesForDateTemp,
    calendarEditMode: state.dates.calendarEditMode
  };
};

export const CalendarListComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      calendarToggleEditMode: () => { dispatch(calendarToggleEditMode()); }
    };
  }
)(CalendarList);

export const CalendarEditComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      calendarChangeDate: (date) => { dispatch(calendarChangeDate(date)); },
      calendarSetDate: (date) => { dispatch(calendarSetDate(date)); dispatch(datesListAjaxGet(date)); },
      calendarToggleEditMode: () => { dispatch(calendarToggleEditMode()); }
    };
  }
)(CalendarEdit);

