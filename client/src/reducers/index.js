import { combineReducers } from 'redux';
import placesReducer from './placesReducer';

const reducers = combineReducers({
  places: placesReducer
})

export default reducers