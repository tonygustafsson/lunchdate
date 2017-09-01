const initState = {
  list: [],
  showDatesForDate: new Date().toISOString().split('T')[0],
  calendarEditMode: false,
  loading: true,
  showNewDateForm: false,
  contactServerError: false
};

const datesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DATES_LIST_DONE':
      return { ...state, loading: false, list: action.payload };
    case 'DATES_SHOW_NEW_DATE_FORM':
      return { ...state, showNewDateForm: action.payload };
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
    case 'CALENDAR_SET_DATE':
      return { ...state, showDatesForDate: action.payload, calendarEditMode: !state.calendarEditMode };
    case 'DATES_CONTACT_SERVER_ERROR':
      return { ...state, contactServerError: action.payload };
    default:
      return state;
  }
}

export default datesReducer;