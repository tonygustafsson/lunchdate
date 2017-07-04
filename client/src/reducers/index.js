import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import text from './testReducer'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  text
})

export default todoApp