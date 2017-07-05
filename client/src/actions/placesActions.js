export const loadPlaces = (dispatch) => {
    console.log('Hey from action loadPlaces');

    fetch('http://localhost:3000/lunchdate/place/list')
        .then((response) => response.json())
        .then((responseJson) => {
            var places = [];

            responseJson.forEach(place => {
                places.push({
                    'key': place.id,
                    'name': place.name,
                    'identifier': place.identifier
                });
            });

            dispatch(doneLoadingPlaces(places));
        });
}

export const doneLoadingPlaces = places => {
    return {
        type: 'DONE_LOADING_PLACES',
        payload: places
    }
}

export const changeNewPlaceName = newName => {
    return {
        type: 'CHANGE_NEW_PLACE_NAME',
        payload: newName
    }
}

export const beginSaveNewPlace = () => {
    return {
        type: 'BEGIN_SAVE_NEW_PLACE'
    }
}

export const doneSaveNewPlace = () => {
    return {
        type: 'DONE_SAVE_NEW_PLACE',
    }
}

export const saveNewPlace = (newPlaceName) => {
    return (dispatch) => {
        dispatch(beginSaveNewPlace());

        fetch('http://localhost:3000/lunchdate/place/create', {
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
                var places = [];

                responseJson.forEach(place => {
                    places.push({
                        'key': place.id,
                        'name': place.name,
                        'identifier': place.identifier
                    });
                });

                dispatch(doneSaveNewPlace());
                dispatch(doneLoadingPlaces(places));
            })
            .catch((error) => {
                throw (error);
            });
    }
}

export const beginRemovePlace = () => {
    return {
        type: 'BEGIN_REMOVE_PLACE'
    }
}

export const doneRemovePlace = () => {
    return {
        type: 'DONE_REMOVE_PLACE',
    }
}

export const removePlace = id => {
    return (dispatch) => {
        dispatch(beginRemovePlace());

        fetch('http://localhost:3000/lunchdate/place/remove', {
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
                var places = [];

                responseJson.forEach(place => {
                    places.push({
                        'key': place.id,
                        'name': place.name,
                        'identifier': place.identifier
                    });
                });

                dispatch(doneRemovePlace());
                dispatch(doneLoadingPlaces(places));
            })
            .catch((error) => {
                throw (error);
            });
    }
}