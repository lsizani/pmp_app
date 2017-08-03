import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  task: PropTypes.shape({
    taskName: PropTypes.string.isRequired,
    assignerName: PropTypes.string,
    assigneeName: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  actions: PropTypes.object.isRequired,
};

const TaskItem = ({task}) => {
  return(
    <li className="item padding-10">
      <div className="item-row">
        <div className="item-col item-col-title">
          <input className="checkbox" type="checkbox" />
          <span>{task.taskName} Assigned To: {task.assignerName} By: {task.assigneeName} Status: {task.status}</span>
        </div>
        <div className="item-col fixed">
          <span className="inactive">
            <i className="fa fa-cog"> </i>
          </span>
        </div>
      </div>
    </li>
  );
};

TaskItem.propTypes = propTypes;
export default TaskItem;
