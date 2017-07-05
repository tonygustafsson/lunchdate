import { connect } from 'react-redux';
import { placesListAjaxGet, saveNewPlace, removePlace, changeNewPlaceName } from '../actions';
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
      removePlace: (id) => { dispatch(removePlace(id)) }
    };
  }
)(PlacesList);

export const PlaceCreateComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      changeNewPlaceName: (newPlaceName) => { dispatch(changeNewPlaceName(newPlaceName)) },
      saveNewPlace: (newPlaceName) => { dispatch(saveNewPlace(newPlaceName)) },
    };
  })(PlaceCreate);
