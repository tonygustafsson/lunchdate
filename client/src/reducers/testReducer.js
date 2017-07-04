const testReducer = (state = 'Init paragraph', action) => {
  switch (action.type) {
    case 'TEST_ACTION':
    console.log(action.text);
      return [
        action.text,
      ]
    default:
      return state
  }
}

export default testReducer