import { connect } from 'react-redux';
import { datesListAjaxGet, placesListAjaxGet, datesCreateAjaxPost, datesRemoveAjaxPost, datesAddParticipantAjaxPost,
          datesRemoveParticipantAjaxPost, datesShowNewDateForm, placesToggleNewPlaceForm } from '../actions';
import DatesList from '../components/Dates/DatesList';
import DateCreate from '../components/Dates/DateCreate';
import './Dates.css';

const mapStateToProps = (state, ownProps) => {
  return {
    dates: state.dates.list,
    places: state.places.list,
    loading: state.dates.loading,
    newDateData: state.dates.newDateData,
    showNewDateForm: state.dates.showNewDateForm,
    user: state.user.name,
    contactServerError: state.dates.contactServerError
  };
};

export const DatesListComponent = connect(
  mapStateToProps,
  (dispatch) => {
    dispatch(datesListAjaxGet());
    dispatch(placesListAjaxGet); 

    setInterval(() => {
      // Refresh page every minute
      dispatch(datesListAjaxGet());
      dispatch(placesListAjaxGet); 
    }, 60000);

    return {
      datesRemoveAjaxPost: (id) => { dispatch(datesRemoveAjaxPost(id)) },
      datesShowNewDateForm: (showNewDateForm) => { dispatch(datesShowNewDateForm(showNewDateForm)); },
      datesAddParticipantAjaxPost: (dateId, name) => { dispatch(datesAddParticipantAjaxPost(dateId, name)); },
      datesRemoveParticipantAjaxPost: (dateId, name) => { dispatch(datesRemoveParticipantAjaxPost(dateId, name)); }
    };
  }
)(DatesList);

export const DatesCreateComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      datesCreateAjaxPost: (newDateData) => {
        dispatch(datesCreateAjaxPost(newDateData));
        dispatch(datesShowNewDateForm());
      },
      cancel: () => {
        dispatch(datesShowNewDateForm());
      },
      placesToggleNewPlaceForm: () => {
        dispatch(placesToggleNewPlaceForm());
      },
    };
  })(DateCreate);
