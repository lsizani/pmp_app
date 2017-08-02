import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../components/TaskItem';
import AddTask from '../components/AddTask';
import { loadTasks, fetchTasks } from "../actions/actions";
import { provide} from "../../shared/provide"
import { connect } from 'react-redux'

class TasksList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTasks())
  }

  render() {
    const { tasks } = this.props;
    return(
      <div className="card tasks sameheight-item" data-exclude="xs,sm" style={{height: '490px'}}>
        <div className="card-header bordered">
          <div className="header-block">
            <h3 className="title"> Tasks </h3>
          </div>
          <div className="header-block pull-right">
            <AddTask />
          </div>
        </div>
        <div className="card-block">
          <div className="tasks-block">
            <ul className="item-list">
              {
                tasks.map((task, i) => (
                  <TaskItem
                    task={task}
                    key={i}
                    actions={{}}
                  />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  tasks: state.tasksReducer.tasks,
});
export default provide(
  connect(mapStateToProps)(TasksList)
);

