import * as c from '../constants/actionTypes';


export function loadTasks() {
  return { type: c.LOAD_TASKS }
}

export function loadTasksResponse(json){
  return { type: c.LOAD_TASKS_RESPONSE, tasks: json }
}

export const fetchTasks = payload => dispatch => {
  dispatch(loadTasks());
  return fetch(`/api/v1/tasks.json`)
    .then(response => response.json())
    .then(json => dispatch(loadTasksResponse(json)))
};

