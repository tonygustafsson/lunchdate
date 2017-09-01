import { backendApiUrl } from '../config';

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
        type: 'PLACES_CREATE_START'
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

export const placesUploadLogoStart = () => {
    return {
        type: 'PLACES_UPLOAD_LOGO_START'
    };
};

export const placesUploadLogoDone = () => {
    return {
        type: 'PLACES_UPLOAD_LOGO_DONE'
    };
};

export const placesToggleNewPlaceForm = () => {
    return {
        type: 'PLACES_TOGGLE_NEW_PLACE_FORM',
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

    fetch(backendApiUrl + '/place/list')
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

        fetch(backendApiUrl + '/place/create', {
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

        fetch(backendApiUrl + '/place/remove', {
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

export const placesUploadLogoChange = (place, files) => {
    return (dispatch) => {
        dispatch(placesUploadLogoStart());

        const file = files[0],
            reader = new FileReader();

        reader.onloadend = function (theFile) {
            fetch(backendApiUrl + '/place/uploadLogo', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    placeIdentifier: place.identifier,
                    fileContent: reader.result
                })
            })
                .then((response) => {
                    let random = Math.random(),
                        newImgPath = '/img/places/' + place.identifier + '.png?bust=' + random;

                    place.imageUrl = newImgPath;

                    dispatch(placesUploadLogoDone());
                })
                .catch((error) => {
                    throw error;
                });
        };

        reader.readAsDataURL(file);
    };
};