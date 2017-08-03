import * as c from '../constants/actionTypes';


export function loadTasks() {
  return { type: c.LOAD_TASKS }
}

export function loadTasksResponse(json){
  return { type: c.LOAD_TASKS_RESPONSE, tasks: json }
}

export function filterTasks(filter) {
  return { type: c.FILTER_TASKS, filter}
}

export function setVisibilityFilter(filter){
  return { type: c.SET_VISIBILITY_FILTER, filter}
}


export const fetchTasks = payload => dispatch => {
  dispatch(loadTasks());
  return fetch(`/api/v1/tasks.json`)
    .then(response => response.json())
    .then(json => dispatch(loadTasksResponse(json)))
};

