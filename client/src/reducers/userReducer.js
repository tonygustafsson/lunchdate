const initState = {
  name: 'Anonymous',
  editMode: false,
  newNameChange: 'Anonymous'
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_SET_NAME':
      return { ...state, name: action.payload, newNameChange: action.payload };
    case 'USER_EDIT_NEW_NAME_CHANGE':
      return { ...state, newNameChange: action.payload };
    case 'USER_TOGGLE_EDIT_MODE':
      return { ...state, editMode: !state.editMode };
    default:
      return state;
  }
}

export default userReducer;