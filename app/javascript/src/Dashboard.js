import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import TasksList from './tasks/containers/TasksList';

class Dashboard extends Component {
  render() {
    return(
      <article className="content dashboard-page">
        <section className="section">
          <div className="row sameheight-container">
            <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-5 stats-col">

            </div>
            <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-7 history-col">

            </div>
          </div>
        </section>

        <section className="section">
          <div className="row sameheight-container">

            <div className="col-xl-8">

            </div>

            <div className="col-xl-4">

            </div>
          </div>
        </section>
        <section className="section map-tasks">
          <div className="row sameheight-container">
            <div className="col-md-7">
              <TasksList />
            </div>
            <div className="col-md-5">
            </div>
          </div>
        </section>
      </article>
    )
  }
}

export default Dashboard;
