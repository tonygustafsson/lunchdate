export const userSetName = (name) => {
    return {
        type: 'USER_SET_NAME',
        payload: name
    };
};

export const userToggleEditMode = () => {
    return {
        type: 'USER_TOGGLE_EDIT_MODE'
    };
};

export const userGetNameFromLocalStorge = () => {
    return {
        type: 'GET_NAME_FROM_LOCALSTORAGE'
    };
};

export const userSaveNameToLocalStorge = (value) => {
    return {
        type: 'SET_NAME_TO_LOCALSTORAGE',
        payload: value
    };
};