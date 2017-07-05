const initState = {
  list: [],
  loading: true,
  newPlaceName: ''
};

const placesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLACES_LIST_DONE':
      return { ...state, loading: false, list: action.payload };
    case 'CHANGE_NEW_PLACE_NAME':
      return { ...state, newPlaceName: action.payload }
    case 'DONE_SAVE_NEW_PLACE':
      return { ...state, newPlaceName: '' }
    default:
      return state;
  }
}

export default placesReducer;