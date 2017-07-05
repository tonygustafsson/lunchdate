const initState = {
  list: [],
  loading: true,
  newPlaceName: ''
};

const placesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLACES_LIST_DONE':
      return { ...state, loading: false, list: action.payload };
    case 'PLACES_CREATE_NEW_NAME_CHANGE':
      return { ...state, newPlaceName: action.payload }
    case 'PLACES_CREATE_DONE':
      return { ...state, newPlaceName: '' }
    default:
      return state;
  }
}

export default placesReducer;