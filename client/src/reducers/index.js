import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import text from './testReducer';
import placesReducer from './placesReducer';

const reducers = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
  text: text,
  places: placesReducer
})

export default reducers