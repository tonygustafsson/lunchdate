import { userSetName } from '../actions';

export const LocalStorageMiddleware = store => next => action => {
    if (typeof window.localStorage === 'undefined') return next(action);

    switch (action.type) {
        case 'SET_NAME_TO_LOCALSTORAGE':
            window.localStorage.setItem('name', action.payload);
            store.dispatch(userSetName(action.payload));
            return next(action);
        case 'GET_NAME_FROM_LOCALSTORAGE':
            var value = window.localStorage.getItem('name');
            store.dispatch(userSetName(value));
            return next(action);
        default:
            return next(action);
    }
};

