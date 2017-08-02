import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions';

let AddTask = ({ dispatch }) => {
  return(
    <a className="btn btn-primary btn-sm rounded pull-right">
      Add Task
    </a>
  )
};

export default AddTask;
