import { connect } from 'react-redux'
import TasksList from '../components/TasksList';
import * as c from '../constants/filters';

const getVisibleTasks = (tasks, filter) => {
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
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = (state) => ({
  tasks: getVisibleTasks(state.tasksReducer.tasks, state.visibilityFilter)
});

// const mapDispatchToProps = {
//   onTodoClick: toggleTodo
// }

const VisibleTasksList = connect(
  mapStateToProps,
)(TasksList);

export default VisibleTasksList;
