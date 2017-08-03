import * as c from '../constants/filters';
import { SET_VISIBILITY_FILTER } from '../constants/actionTypes';

const visibilityFilter = (state = c.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
}

export default visibilityFilter
