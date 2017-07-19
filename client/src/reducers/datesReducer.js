const initNewDateData = {
  date: new Date().toISOString().split('T')[0],
  time: '12:00',
  user: '',
  place: '',
  takeAway: false,
  note: ''
}

const initState = {
  list: [],
  loading: true,
  newDateData: initNewDateData,
  showNewDateForm: false
};

const datesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DATES_LIST_DONE':
      return { ...state, loading: false, list: action.payload };
    case 'DATES_CREATE_NEW_DATA_CHANGE':
      switch (action.key) {
        case 'date':
          return { ...state, newDateData: { ...state.newDateData, date: action.payload } };
        case 'time':
          return { ...state, newDateData: { ...state.newDateData, time: action.payload } };
        case 'user':
          return { ...state, newDateData: { ...state.newDateData, user: action.payload } };
        case 'place':
          return { ...state, newDateData: { ...state.newDateData, place: action.payload } };
        case 'takeAway':
          return { ...state, newDateData: { ...state.newDateData, takeAway: !state.newDateData.dateTakeAway } };
        case 'note':
          return { ...state, newDateData: { ...state.newDateData, note: action.payload } };
        default:
          return state;
      }
    case 'DATES_SHOW_NEW_DATE_FORM':
      return { ...state, showNewDateForm: !state.showNewDateForm };
    case 'DATES_CREATE_RESET':
      return { ...state, newDateData: initNewDateData };
    case 'DATES_CREATE_DONE':
      return { ...state };
    case 'DATES_ADD_PARTICIPANT_START':
      return { ...state, loading: true };
    case 'DATES_ADD_PARTICIPANT_DONE':
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
}

export default datesReducer;