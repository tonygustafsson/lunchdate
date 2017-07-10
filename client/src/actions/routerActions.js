export const toggleShowNewPlaceForm = (enable) => {
    return {
        type: 'TOGGLE_NEW_PLACE_FORM',
        payload: enable
    };
};

export const toggleShowNewDateForm = () => {
    return {
        type: 'TOGGLE_NEW_DATE_FORM'
    };
};