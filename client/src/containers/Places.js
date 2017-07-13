import { connect } from 'react-redux';
import { placesCreateAjaxPost, placesRemoveAjaxPost, placesCreateNewNameChange, datesCreateNewDataChange, toggleShowNewPlaceForm, placesUploadLogoChange } from '../actions';
import PlacesList from '../components/Places/PlacesList';
import PlaceCreate from '../components/Places/PlaceCreate';
import './Places.css';

const mapStateToProps = (state, ownProps) => {
  return {
    places: state.places.list,
    loading: state.places.loading,
    newPlaceName: state.places.newPlaceName,
    newDateData: state.dates.newDateData,
    showNewPlaceForm: state.router.showNewPlaceForm
  };
};

export const PlacesListComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      placesRemoveAjaxPost: (id) => {
        dispatch(placesRemoveAjaxPost(id))
      },
      datesCreateNewDataChange: (key, newData) => {
        dispatch(datesCreateNewDataChange(key, newData));
      },
      toggleShowNewPlaceForm: () => {
        dispatch(toggleShowNewPlaceForm());
      },
      placesUploadLogoChange: (place, files) => {
        dispatch(placesUploadLogoChange(place, files));
      }
    };
  }
)(PlacesList);

export const PlaceCreateComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      placesCreateNewNameChange: (newPlaceName) => {
        dispatch(placesCreateNewNameChange(newPlaceName))
      },
      placesCreateAjaxPost: (newPlaceName) => {
        dispatch(placesCreateAjaxPost(newPlaceName))
      },
      toggleShowNewPlaceForm: () => {
        dispatch(toggleShowNewPlaceForm());
      }
    };
  })(PlaceCreate);
