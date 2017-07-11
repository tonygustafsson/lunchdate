import { combineReducers } from 'redux';

import routerReducer from './routerReducer';
import placesReducer from './placesReducer';
import datesReducer from './datesReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  router: routerReducer,
  places: placesReducer,
  dates: datesReducer,
  user: userReducer
})

export default reducers