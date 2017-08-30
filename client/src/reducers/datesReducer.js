const currentISODate = new Date().toISOString().split('T')[0];

const initNewDateData = {
  date: currentISODate,
  time: '12:00',
  user: '',
  place: '',
  takeAway: false,
  note: ''
}

const initState = {
  list: [],
  showDatesForDate: currentISODate,
  showDatesForDateTemp: currentISODate,
  calendarEditMode: false,
  loading: true,
  newDateData: initNewDateData,
  showNewDateForm: false,
  contactServerError: false
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
          return { ...state, newDateData: { ...state.newDateData, takeAway: action.payload } };
        case 'note':
          return { ...state, newDateData: { ...state.newDateData, note: action.payload } };
        default:
          return state;
      }
    case 'DATES_SHOW_NEW_DATE_FORM':
      return { ...state, showNewDateForm: !state.showNewDateForm };
    case 'DATES_CREATE_RESET':
      return { ...state, newDateData: initNewDateData };
    case 'DATES_CREATE_START':
      return { ...state, loading: true };
    case 'DATES_REMOVE_START':
      return { ...state, loading: true };
    case 'DATES_REMOVE_DONE':
      return { ...state, loading: false };
    case 'DATES_CREATE_DONE':
      return { ...state };
    case 'DATES_ADD_PARTICIPANT_START':
      return { ...state, loading: true };
    case 'DATES_ADD_PARTICIPANT_DONE':
      return { ...state, loading: false, list: action.payload };
    case 'CALENDAR_TOGGLE_EDIT_MODE':
      return { ...state, calendarEditMode: !state.calendarEditMode };
    case 'CALENDAR_CHANGE_DATE':
      return { ...state, showDatesForDateTemp: action.payload };
    case 'CALENDAR_SET_DATE':
      return { ...state, showDatesForDate: action.payload, calendarEditMode: !state.calendarEditMode };
    case 'DATES_CONTACT_SERVER_ERROR':
      return { ...state, contactServerError: action.payload };
    default:
      return state;
  }
}

export default datesReducer;