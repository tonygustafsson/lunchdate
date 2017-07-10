import { combineReducers } from 'redux';

import routerReducer from './routerReducer';
import placesReducer from './placesReducer';
import datesReducer from './datesReducer';

const reducers = combineReducers({
  router: routerReducer,
  places: placesReducer,
  dates: datesReducer
})

export default reducers