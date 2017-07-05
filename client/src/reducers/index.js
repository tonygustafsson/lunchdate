import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import placesReducer from './placesReducer';

const reducers = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
  places: placesReducer
})

export default reducers