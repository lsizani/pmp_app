import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TasksList = ({tasks, actions}) =>(
  <div className="tasks-block">
    <ul className="item-list">
      {
        tasks.map(task =>
          <TaskItem task={task}
          />
        )
      }
    </ul>
  </div>
);

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default TasksList;