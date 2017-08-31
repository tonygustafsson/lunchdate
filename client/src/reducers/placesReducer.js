const initState = {
  list: [],
  loading: true,
  showNewPlaceForm: false
};

const placesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLACES_LIST_DONE':
      return { ...state, loading: false, list: action.payload };
    case 'PLACES_TOGGLE_NEW_PLACE_FORM':
      return { ...state, showNewPlaceForm: !state.showNewPlaceForm };
    case 'PLACES_CREATE_START':
      return { ...state, loading: true }
    case 'PLACES_CREATE_DONE':
      return { ...state, loading: false }
    case 'PLACES_REMOVE_START':
      return { ...state, loading: true }
    case 'PLACES_REMOVE_DONE':
      return { ...state, loading: false }
    case 'PLACES_UPLOAD_LOGO_START':
      return { ...state, loading: true }
    case 'PLACES_UPLOAD_LOGO_DONE':
      return { ...state, loading: false }
    default:
      return state;
  }
}

export default placesReducer;