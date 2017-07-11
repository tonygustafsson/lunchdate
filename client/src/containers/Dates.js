import { connect } from 'react-redux';
import { datesListAjaxGet, placesListAjaxGet, datesCreateAjaxPost, datesRemoveAjaxPost, datesCreateNewDataChange, toggleShowNewDateForm, datesCreateReset, toggleShowNewPlaceForm } from '../actions';
import DatesList from '../components/Dates/DatesList';
import DateCreate from '../components/Dates/DateCreate';
import './Dates.css';

const mapStateToProps = (state, ownProps) => {
  return {
    dates: state.dates.list,
    places: state.places.list,
    loading: state.dates.loading,
    newDateData: state.dates.newDateData,
    showNewDateForm: state.router.showNewDateForm,
    user: state.user.name
  };
};

export const DatesListComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      onLoad: (() => { dispatch(datesListAjaxGet); dispatch(placesListAjaxGet); })(),
      datesRemoveAjaxPost: (id) => { dispatch(datesRemoveAjaxPost(id)) },
      toggleShowNewDateForm: () => { dispatch(toggleShowNewDateForm()); }
    };
  }
)(DatesList);

export const DatesCreateComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      datesCreateNewDataChange: (key, newData) => {
        dispatch(datesCreateNewDataChange(key, newData));
      },
      datesCreateAjaxPost: (newDateData) => {
        dispatch(datesCreateAjaxPost(newDateData));
        dispatch(datesCreateReset());
        dispatch(toggleShowNewDateForm());
      },
      cancel: () => {
        dispatch(datesCreateReset());
        dispatch(toggleShowNewDateForm());
      },
      toggleShowNewPlaceForm: () => {
        dispatch(toggleShowNewPlaceForm());
      }
    };
  })(DateCreate);
