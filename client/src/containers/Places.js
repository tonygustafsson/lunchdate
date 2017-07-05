import { connect } from 'react-redux';
import { placesListAjaxGet, placesCreateAjaxPost, placesRemoveAjaxPost, placesCreateNewNameChange } from '../actions';
import PlacesList from '../components/Places/PlacesList';
import PlaceCreate from '../components/Places/PlaceCreate';

const mapStateToProps = (state, ownProps) => {
  return {
    places: state.places.list,
    loading: state.places.loading,
    newPlaceName: state.places.newPlaceName
  };
};

export const PlacesListComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      onLoad: dispatch(placesListAjaxGet),
      placesRemoveAjaxPost: (id) => { dispatch(placesRemoveAjaxPost(id)) }
    };
  }
)(PlacesList);

export const PlaceCreateComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      placesCreateNewNameChange: (newPlaceName) => { dispatch(placesCreateNewNameChange(newPlaceName)) },
      placesCreateAjaxPost: (newPlaceName) => { dispatch(placesCreateAjaxPost(newPlaceName)) },
    };
  })(PlaceCreate);
