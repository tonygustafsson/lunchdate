import { connect } from 'react-redux';
import { placesCreateAjaxPost, placesRemoveAjaxPost, placesToggleNewPlaceForm, placesUploadLogoChange } from '../actions';
import PlacesList from '../components/Places/PlacesList';
import PlaceCreate from '../components/Places/PlaceCreate';
import './Places.css';

const mapStateToProps = (state, ownProps) => {
  return {
    places: state.places.list,
    loading: state.places.loading,
    newDateData: state.dates.newDateData,
    showNewPlaceForm: state.places.showNewPlaceForm
  };
};

export const PlacesListComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      placesRemoveAjaxPost: (id) => {
        dispatch(placesRemoveAjaxPost(id))
      },
      placesToggleNewPlaceForm: () => {
        dispatch(placesToggleNewPlaceForm());
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
      placesCreateAjaxPost: (newPlaceName) => {
        dispatch(placesCreateAjaxPost(newPlaceName))
      },
      placesToggleNewPlaceForm: () => {
        dispatch(placesToggleNewPlaceForm());
      }
    };
  })(PlaceCreate);
