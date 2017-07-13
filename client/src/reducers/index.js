import { combineReducers } from 'redux';

import placesReducer from './placesReducer';
import datesReducer from './datesReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  places: placesReducer,
  dates: datesReducer,
  user: userReducer
})

export default reducers