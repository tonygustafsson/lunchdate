import { appConfig } from '../config';

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

export const datesCreateBegin = () => {
    return {
        type: 'DATES_CREATE_START'
    };
};

export const datesCreateDone = () => {
    return {
        type: 'DATES_CREATE_DONE'
    };
};

export const datesRemoveStart = () => {
    return {
        type: 'DATES_REMOVE_START'
    };
};

export const datesRemoveDone = () => {
    return {
        type: 'DATES_REMOVE_DONE'
    };
};

export const datesAddParticipantStart = name => {
    return {
        type: 'DATES_ADD_PARTICIPANT_START',
        payload: name
    };
};

export const datesRemoveParticipantStart = name => {
    return {
        type: 'DATES_ADD_PARTICIPANT_START',
        payload: name
    };
};

export const datesShowNewDateForm = showNewDateForm => {
    return {
        type: 'DATES_SHOW_NEW_DATE_FORM',
        payload: showNewDateForm
    };
};

export const datesContactServerError = error => {
    return {
        type: 'DATES_CONTACT_SERVER_ERROR',
        payload: error
    };
};

export const datesUpdateList = responseJson => {
    return () => {
        var dates = [];

        responseJson.forEach(date => {
            dates.push({
                key: date.id,
                date: date.date,
                time: date.time,
                user: date.user,
                place: date.place,
                takeaway: date.takeaway,
                note: date.note,
                participants: date.participants
            });
        });

        return dates;
    };
};

export const datesListAjaxGet = (date = new Date().toISOString().split('T')[0]) => {
    return dispatch => {
        dispatch(datesListStart());

        fetch(appConfig.backendApiUrl + '/date/list?date=' + date)
            .then(response => response.json())
            .then(responseJson => {
                const dates = dispatch(datesUpdateList(responseJson));
                dispatch(datesListDone(dates));
            })
            .catch(error => {
                dispatch(datesContactServerError(error));
            });
    };
};

export const datesCreateAjaxPost = newDate => {
    return dispatch => {
        dispatch(datesCreateBegin());

        fetch(appConfig.backendApiUrl + '/date/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
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
            .then(response => response.json())
            .then(responseJson => {
                const dates = dispatch(datesUpdateList(responseJson));
                dispatch(datesCreateDone());
                dispatch(datesListDone(dates));
                //dispatch(datesCreateSlackPost(newDate));
            })
            .catch(error => {
                throw error;
            });
    };
};

export const datesCreateSlackPost = date => {
    return () => {
        let text = `${date.user} created a date at ${date.date} ${date.time} a clock at ${date.place}`;

        fetch(appConfig.slackApiUrl, {
            method: 'POST',
            body: JSON.stringify({ text: text })
        });
    };
};

export const datesRemoveAjaxPost = id => {
    return dispatch => {
        dispatch(datesRemoveStart());

        fetch(appConfig.backendApiUrl + '/date/remove', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                const dates = dispatch(datesUpdateList(responseJson));
                dispatch(datesCreateDone());
                dispatch(datesListDone(dates));
            })
            .catch(error => {
                throw error;
            });
    };
};

export const datesAddParticipantAjaxPost = (dateId, name) => {
    return dispatch => {
        dispatch(datesAddParticipantStart());

        fetch(appConfig.backendApiUrl + '/date/addParticipant', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dateId: dateId,
                name: name
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                const dates = dispatch(datesUpdateList(responseJson));
                dispatch(datesCreateDone());
                dispatch(datesListDone(dates));
            })
            .catch(error => {
                throw error;
            });
    };
};

export const datesRemoveParticipantAjaxPost = (dateId, name) => {
    return dispatch => {
        dispatch(datesRemoveParticipantStart());

        fetch(appConfig.backendApiUrl + '/date/removeParticipant', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dateId: dateId,
                name: name
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                const dates = dispatch(datesUpdateList(responseJson));
                dispatch(datesCreateDone());
                dispatch(datesListDone(dates));
            })
            .catch(error => {
                throw error;
            });
    };
};
