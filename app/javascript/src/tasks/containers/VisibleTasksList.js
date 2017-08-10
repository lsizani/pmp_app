import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import TasksList from '../components/TasksList';
import * as c from '../constants/filters';
import * as actionCreators from '../actions/actions';

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
      return tasks;
  }
};

const mapStateToProps = (state) => ({
  tasks: getVisibleTasks(state.tasksReducer.tasks, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const VisibleTasksList = connect(mapStateToProps, mapDispatchToProps)(TasksList);
export default VisibleTasksList;
