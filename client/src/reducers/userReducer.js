const initState = {
  name: 'Anonymous',
  editMode: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_SET_NAME':
      return { ...state, name: action.payload };
    case 'USER_TOGGLE_EDIT_MODE':
      return { ...state, editMode: !state.editMode };
    default:
      return state;
  }
}

export default userReducer;