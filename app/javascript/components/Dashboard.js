import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  
};

class Dashboard extends Component {
  render() {
    return(
      <article className="content dashboard-page">
        <section className="section">
          <div className="row sameheight-container">
            <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-5 stats-col">
              Stats
            </div>
            <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-7 history-col">
              history
            </div>
          </div>
        </section>

        <section className="section">
          <div className="row sameheight-container">

            <div className="col-xl-8">
              items
            </div>

            <div className="col-xl-4">
              sales breakdown
            </div>
          </div>
        </section>
        <section className="section map-tasks">
          <div className="row sameheight-container">
            <div className="col-md-8">
              sales by country
            </div>

            <div className="col-md-4">
              tasks
            </div>
          </div>
        </section>
      </article>
    )
  }
}

Dashboard.PropTypes = propTypes;
export default Dashboard;
