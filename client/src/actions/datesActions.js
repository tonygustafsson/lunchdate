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
        type: 'DATES_CREATE_BEGIN'
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

export const datesUpdateList = (responseJson) => {
    return () => {
        var dates = [];

        responseJson.forEach(date => {
            dates.push({
                'key': date.id,
                'time': date.time,
                'user': date.user,
                'place': date.place,
                'takeaway': date.takeaway,
                'note': date.note
            });
        });

        return dates;
    }
};

export const datesListAjaxGet = (dispatch) => {
    dispatch(datesListStart());

    fetch('http://localhost:3000/lunchdate/date/list')
        .then((response) => response.json())
        .then((responseJson) => {
            const dates = dispatch(datesUpdateList(responseJson));
            dispatch(datesListDone(dates));
        })
        .catch((error) => {
            throw (error);
        });
};

export const datesCreateAjaxPost = (newDate) => {
    return (dispatch) => {
        dispatch(datesCreateBegin());

        fetch('http://localhost:3000/lunchdate/date/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                time: newDate.dateTime,
                user: newDate.dateUser,
                place: newDate.datePlace,
                takeaway: newDate.dateTakeAway,
                note: newDate.dateNote
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

export const datesRemoveAjaxPost = id => {
    return (dispatch) => {
        dispatch(datesRemoveStart());

        fetch('http://localhost:3000/lunchdate/date/remove', {
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