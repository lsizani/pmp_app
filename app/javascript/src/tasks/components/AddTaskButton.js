import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions';

let AddTaskButton = ({ dispatch }) => {
  return(
    <a className="btn btn-primary btn-sm rounded pull-right">
      Add Task
    </a>
  )
};

export default AddTaskButton;
