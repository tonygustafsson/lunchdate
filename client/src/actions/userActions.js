export const userSetName = (name) => {
    return {
        type: 'USER_SET_NAME',
        payload: name
    };
};

export const userEditNameChange = (name) => {
    return {
        type: 'USER_EDIT_NEW_NAME_CHANGE',
        payload: name
    };
};

export const userToggleEditMode = () => {
    return {
        type: 'USER_TOGGLE_EDIT_MODE'
    };
};

export const userGetNameFromLocalStorge = () => {
    return (dispatch) => {
        var name = localStorage.getItem('name');

        if (name === null) {
            localStorage.setItem('name', 'Anonymous');
            dispatch(userSetName('Anonymous'));
            return;
        }

        dispatch(userSetName(name));
    };
};

export const userSaveNameToLocalStorge = (name) => {
    return (dispatch) => {
        localStorage.setItem('name', name);

        dispatch(userSetName(name));
    };
};