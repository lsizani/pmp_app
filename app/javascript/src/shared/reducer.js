import { combineReducers } from 'redux'
import tasksReducer  from '../tasks/reducers/tasksReducer';
import todosReducer from '../todos/reducers/index';

export const reducer = combineReducers({
  todosReducer,
  tasksReducer
});