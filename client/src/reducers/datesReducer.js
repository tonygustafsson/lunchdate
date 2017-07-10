const initNewDateData = {
  dateTime: '',
  dateUser: '',
  datePlace: '',
  dateTakeAway: false,
  dateNote: ''
}

const initState = {
  list: [],
  loading: true,
  newDateData: initNewDateData
};

const datesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DATES_LIST_DONE':
      return { ...state, loading: false, list: action.payload };
    case 'DATES_CREATE_NEW_DATA_CHANGE':
      // Temp solution, could not make the key dynamic
      switch (action.key) {
        case 'dateTime':
          return { ...state, newDateData: { ...state.newDateData, dateTime: action.payload } };
        case 'dateUser':
          return { ...state, newDateData: { ...state.newDateData, dateUser: action.payload } };
        case 'datePlace':
          return { ...state, newDateData: { ...state.newDateData, datePlace: action.payload } };
        case 'dateTakeAway':
          return { ...state, newDateData: { ...state.newDateData, dateTakeAway: !state.newDateData.dateTakeAway } };
        case 'dateNote':
          return { ...state, newDateData: { ...state.newDateData, dateNote: action.payload } };
        default:
          return state;
      }
    case 'DATES_CREATE_RESET':
      return { ...state, newDateData: initNewDateData };
    case 'DATES_CREATE_DONE':
      return { ...state };
    default:
      return state;
  }
}

export default datesReducer;