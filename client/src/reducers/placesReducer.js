const initState = {
  list: [],
  loading: true,
  newPlaceName: ''
};

const placesReducer = (state = initState, action) => {
  console.log('Reached reducer', action);

  switch (action.type) {
    case 'DONE_LOADING_PLACES':
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