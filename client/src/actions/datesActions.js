const apiUrl = 'http://localhost:8081/lunchdate/date';

export const datesListStart = () => {
    return {
        type: 'DATES_LIST_START'
    };
};

export const datesListDone = dates => {
    return {
        type: 'DATES_LIST_DONE',
        payload: dates
    };
};

export const datesCreateNewDataChange = (key, newData) => {
    return {
        type: 'DATES_CREATE_NEW_DATA_CHANGE',
        key: key,
        payload: newData
    };
};

export const datesCreateBegin = () => {
    return {
        type: 'DATES_CREATE_START'
    };
};

export const datesCreateDone = () => {
    return {
        type: 'DATES_CREATE_DONE',
    };
};

export const datesRemoveStart = () => {
    return {
        type: 'DATES_REMOVE_START'
    };
};

export const datesRemoveDone = () => {
    return {
        type: 'DATES_REMOVE_DONE',
    };
};

export const datesAddParticipantStart = (name) => {
    return {
        type: 'DATES_ADD_PARTICIPANT_START',
        payload: name
    };
};

export const datesRemoveParticipantStart = (name) => {
    return {
        type: 'DATES_ADD_PARTICIPANT_START',
        payload: name
    };
};

export const datesShowNewDateForm = () => {
    return {
        type: 'DATES_SHOW_NEW_DATE_FORM'
    };
};

export const datesContactServerError = (error) => {
    return {
        type: 'DATES_CONTACT_SERVER_ERROR',
        payload: error
    };
};

export const datesUpdateList = (responseJson) => {
    return () => {
        var dates = [];

        responseJson.forEach(date => {
            dates.push({
                'key': date.id,
                'date': date.date,
                'time': date.time,
                'user': date.user,
                'place': date.place,
                'takeaway': date.takeaway,
                'note': date.note,
                'participants': date.participants
            });
        });

        return dates;
    }
};

export const datesListAjaxGet = (date = new Date().toISOString().split('T')[0]) => {
    return (dispatch) => {
        dispatch(datesListStart());

        fetch(apiUrl + '/list?date=' + date)
            .then((response) => response.json())
            .then((responseJson) => {
                const dates = dispatch(datesUpdateList(responseJson));
                dispatch(datesListDone(dates));
            })
            .catch((error) => {
                dispatch(datesContactServerError(error));
            });
    }
};

export const datesCreateAjaxPost = (newDate) => {
    return (dispatch) => {
        dispatch(datesCreateBegin());

        fetch(apiUrl + '/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: newDate.date,
                time: newDate.time,
                user: newDate.user,
                place: newDate.place,
                takeaway: newDate.takeAway,
                note: newDate.note
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                const dates = dispatch(datesUpdateList(responseJson));
                dispatch(datesCreateDone());
                dispatch(datesListDone(dates));
            })
            .catch((error) => {
                throw (error);
            });
    };
};

export const datesCreateReset = () => {
    return {
        type: 'DATES_CREATE_RESET',
    };
};

export const datesRemoveAjaxPost = id => {
    return (dispatch) => {
        dispatch(datesRemoveStart());

        fetch(apiUrl + '/remove', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                const dates = dispatch(datesUpdateList(responseJson));
                dispatch(datesCreateDone());
                dispatch(datesListDone(dates));
            })
            .catch((error) => {
                throw (error);
            });
    };
};

export const datesAddParticipantAjaxPost = (dateId, name) => {
    return (dispatch) => {
        dispatch(datesAddParticipantStart());

        fetch(apiUrl + '/addParticipant', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dateId: dateId,
                name: name
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                const dates = dispatch(datesUpdateList(responseJson));
                dispatch(datesCreateDone());
                dispatch(datesListDone(dates));
            })
            .catch((error) => {
                throw (error);
            });
    };
};

export const datesRemoveParticipantAjaxPost = (dateId, name) => {
    return (dispatch) => {
        dispatch(datesRemoveParticipantStart());

        fetch(apiUrl + '/removeParticipant', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dateId: dateId,
                name: name
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                const dates = dispatch(datesUpdateList(responseJson));
                dispatch(datesCreateDone());
                dispatch(datesListDone(dates));
            })
            .catch((error) => {
                throw (error);
            });
    };
};
