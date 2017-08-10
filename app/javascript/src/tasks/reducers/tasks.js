import { LOAD_TASKS_RESPONSE } from "../constants/actionTypes";
import * as c from '../constants/filters';

export const tasks = (state = [], action) => {
  switch (action.type) {
    case LOAD_TASKS_RESPONSE:
      return action.tasks;
    default:
      return state;
  }
};

export const visibleTasks = (tasks, filter) => {
  switch (filter) {
    case c.SHOW_ALL:
      return tasks;
    case c.COMPLETED:
      return tasks.filter(t => t.status === 'completed');
    case c.IN_PROGRESS:
      return tasks.filter(t => t.status === 'in_progress');
    case c.PENDING:
      return tasks.filter(t => t.status === 'pending');
    default:
      return tasks;
  }
};


export default tasks;