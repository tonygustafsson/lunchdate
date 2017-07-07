import { connect } from 'react-redux';
import { datesListAjaxGet, datesCreateAjaxPost, datesRemoveAjaxPost, datesCreateNewDataChange } from '../actions';
import DatesList from '../components/Dates/DatesList';
import DateCreate from '../components/Dates/DateCreate';
import './Dates.css';

const mapStateToProps = (state, ownProps) => {
  return {
    dates: state.dates.list,
    places: state.places.list,
    loading: state.dates.loading,
    newDateData: state.dates.newDateData
  };
};

export const DatesListComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      onLoad: dispatch(datesListAjaxGet),
      datesRemoveAjaxPost: (id) => { dispatch(datesRemoveAjaxPost(id)) }
    };
  }
)(DatesList);

export const DatesCreateComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      datesCreateNewDataChange: (key, newData) => dispatch(datesCreateNewDataChange(key, newData)),
      datesCreateAjaxPost: (newDateData) => { dispatch(datesCreateAjaxPost(newDateData)); },
    };
  })(DateCreate);
