export const calendarToggleEditMode = dates => {
    return {
        type: 'CALENDAR_TOGGLE_EDIT_MODE'
    };
};

export const calendarSetDate = (date) => {
    return {
        type: 'CALENDAR_SET_DATE',
        payload: date
    };
};
