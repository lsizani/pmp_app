import { combineReducers } from 'redux';
import tasks from './tasks';
import visibilityFilter from './visibilityFilter';

const tasksReducer = combineReducers({
  tasks,
  visibilityFilter,
});

export default tasksReducer;