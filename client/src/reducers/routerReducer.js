const initState = {
  showNewDateForm: false,
  showNewPlaceForm: false
};

const routerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_NEW_DATE_FORM':
      return { ...state, showNewDateForm: !state.showNewDateForm };
    case 'TOGGLE_NEW_PLACE_FORM':
      return { ...state, showNewPlaceForm: !state.showNewPlaceForm };
    default:
      return state;
  }
}

export default routerReducer;