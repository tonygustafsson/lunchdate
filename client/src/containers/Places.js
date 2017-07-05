import { connect } from 'react-redux';
import { doneLoadingPlaces, loadPlaces, saveNewPlace, removePlace, changeNewPlaceName } from '../actions';
import PlacesList from '../components/Places/PlacesList';
import PlaceCreate from '../components/Places/PlaceCreate';

const mapStateToProps = (state, ownProps) => {
  console.log('NewPlaceName is: ', state.places.newPlaceName);

  return {
    places: state.places.list,
    loading: state.places.loading,
    newPlaceName: state.places.newPlaceName
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return  {
    onLoad: dispatch(loadPlaces),
    changeNewPlaceName: (newPlaceName) => { dispatch(changeNewPlaceName(newPlaceName)) },
    saveNewPlace: (newPlaceName) => { dispatch(saveNewPlace(newPlaceName)) },
    removePlace: (id) => { dispatch(removePlace(id)) }
  }
}

export const PlacesListComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacesList);

export const PlaceCreateComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceCreate);
