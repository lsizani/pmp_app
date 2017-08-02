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
    <li className="item">
      <div className="item-row">
        <div className="item-col item-col-title">
          <label>
            <input className="checkbox" type="checkbox" checked="checked" />
            <span>{task.taskName} Assigned To: {task.assignerName} By: {task.assigneeName} Status: {task.status}</span>
          </label>
        </div>
        <div className="item-col fixed item-col-actions-dropdown">
          <div className="item-actions-dropdown">
            <a className="item-actions-toggle-btn">
              <span className="inactive">
                  <i className="fa fa-cog"> </i>
              </span>
              <span className="active">
                <i className="fa fa-chevron-circle-right"> </i>
              </span>
            </a>
            <div className="item-actions-block">
              <ul className="item-actions-list">
                <li>
                  <a className="remove" href="#" data-toggle="modal" data-target="#confirm-modal">
                    <i className="fa fa-trash-o "> </i>
                  </a>
                </li>
                <li>
                  <a className="check" href="#">
                    <i className="fa fa-check"> </i>
                  </a>
                </li>
                <li>
                  <a className="edit" href="/app/assets/fonts">
                    <i className="fa fa-pencil"> </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

TaskItem.propTypes = propTypes;
export default TaskItem;
