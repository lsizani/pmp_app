import React, {Component} from 'react';
import AddTaskButton from './AddTaskButton';
import FilterTasksButtons from './FilterTasksButtons'
import VisibleTasksList from '../containers/VisibleTasksList';


class Tasks extends Component{
  render(){
    return(
      <div className="card tasks sameheight-item">
        <div className="card-header bordered">
          <div className="header-block">
            <h3 className="title"> Tasks </h3>
          </div>
          <div className="header-block pull-right">
            <AddTaskButton />
          </div>
        </div>
        <div className="card-block">
          <VisibleTasksList />
        </div>
        <div className="footer-block top-bordered padding-10">
          <FilterTasksButtons />
        </div>
      </div>
    );
  }
}

export default Tasks;