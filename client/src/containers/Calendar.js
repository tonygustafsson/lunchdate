import { connect } from 'react-redux';
import { calendarToggleEditMode, calendarSetDate, datesListAjaxGet } from '../actions';
import CalendarList from '../components/Calendar/CalendarList';
import CalendarEdit from '../components/Calendar/CalendarEdit';
import './Calendar.css';

const mapStateToProps = (state, ownProps) => {
  return {
    showDatesForDate: state.dates.showDatesForDate,
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
      calendarSetDate: (date) => { dispatch(calendarSetDate(date)); dispatch(datesListAjaxGet(date)); },
      calendarToggleEditMode: () => { dispatch(calendarToggleEditMode()); }
    };
  }
)(CalendarEdit);

