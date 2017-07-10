const apiUrl = 'http://localhost:8080/lunchdate/place';

export const placesListStart = () => {
    return {
        type: 'PLACES_LIST_START'
    };
};

export const placesListDone = places => {
    return {
        type: 'PLACES_LIST_DONE',
        payload: places
    };
};

export const placesCreateNewNameChange = newName => {
    return {
        type: 'PLACES_CREATE_NEW_NAME_CHANGE',
        payload: newName
    };
};

export const placesCreateBegin = () => {
    return {
        type: 'PLACES_CREATE_BEGIN'
    };
};

export const placesCreateDone = () => {
    return {
        type: 'PLACES_CREATE_DONE',
    };
};

export const placesRemoveStart = () => {
    return {
        type: 'PLACES_REMOVE_START'
    };
};

export const placesRemoveDone = () => {
    return {
        type: 'PLACES_REMOVE_DONE',
    };
};

export const placesUpdateList = (responseJson) => {
    return () => {
        var places = [];

        responseJson.forEach(place => {
            places.push({
                'key': place.id,
                'name': place.name,
                'imageUrl': place.imageUrl,
                'identifier': place.identifier
            });
        });

        return places;
    }
};

export const placesListAjaxGet = (dispatch) => {
    dispatch(placesListStart());

    fetch(apiUrl + '/list')
        .then((response) => response.json())
        .then((responseJson) => {
            const places = dispatch(placesUpdateList(responseJson));
            dispatch(placesListDone(places));
        })
        .catch((error) => {
            throw (error);
        });
};

export const placesCreateAjaxPost = (newPlaceName) => {
    return (dispatch) => {
        dispatch(placesCreateBegin());

        fetch(apiUrl + '/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newPlaceName
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                const places = dispatch(placesUpdateList(responseJson));
                dispatch(placesCreateDone());
                dispatch(placesListDone(places));
            })
            .catch((error) => {
                throw (error);
            });
    };
};

export const placesRemoveAjaxPost = id => {
    return (dispatch) => {
        dispatch(placesRemoveStart());

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
                const places = dispatch(placesUpdateList(responseJson));
                dispatch(placesRemoveDone());
                dispatch(placesListDone(places));
            })
            .catch((error) => {
                throw (error);
            });
    };
};