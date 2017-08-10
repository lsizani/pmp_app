import * as c from '../constants/actionTypes';

export function loadTasks() {
  return { type: c.LOAD_TASKS }
}

export function loadTasksResponse(json){
  return { type: c.LOAD_TASKS_RESPONSE, tasks: json }
}

export function setVisibilityFilter(filter){
  return { type: c.SET_VISIBILITY_FILTER, filter}
}

export function toggleTask(status) {
  return { type: c.TOGGLE_TASK, status}
}


export const fetchTasks = payload => dispatch => {
  dispatch(loadTasks());
  return fetch(`/api/v1/tasks.json`, {credentials: 'same-origin'})
    .then(function (response) {
      if(response.ok){
        return response.json();
      }else {
        return [];
      }
    })
    .then(json => dispatch(loadTasksResponse(json)))
};
