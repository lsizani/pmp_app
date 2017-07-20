import React,  {Component} from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

class Tasks extends Component {
  render() {
    return(
      <div className="card tasks sameheight-item" data-exclude="xs,sm" style={{height: '490px'}}>
        <div className="card-header bordered">
          <div className="header-block">
            <h3 className="title"> Tasks </h3>
          </div>
          <div className="header-block pull-right"> <a href="" className="btn btn-primary btn-sm rounded pull-right">
            Add new
          </a> </div>
        </div>
        <div className="card-block">
          <div className="tasks-block">
            <ul className="item-list">
              <TaskItem
                task={{taskName: 'Meeting with Rudolf'}}
                actions={{}}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Tasks;

