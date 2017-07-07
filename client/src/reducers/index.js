import { combineReducers } from 'redux';
import placesReducer from './placesReducer';
import datesReducer from './datesReducer';

const reducers = combineReducers({
  places: placesReducer,
  dates: datesReducer
})

export default reducers