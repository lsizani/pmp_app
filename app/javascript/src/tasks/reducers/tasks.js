import { LOAD_TASKS_RESPONSE } from "../constants/actionTypes";

export const tasks = (state = [], action) => {
  switch (action.type) {
    case LOAD_TASKS_RESPONSE:
      return action.tasks;
    default:
      return state;
  }
};

export default tasks;