import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

const propTypes = {

};

class SideBarNav extends Component {
  render() {
    return(
      <div>
        <aside className="sidebar">
          <div className="sidebar-container">
            <div className="sidebar-header">
              <div className="brand">
                <div className="logo">
                  <span className="l l1"> </span>
                  <span className="l l2"> </span>
                  <span className="l l3"> </span>
                  <span className="l l4"> </span>
                  <span className="l l5"> </span>
                  </div> PMP APP</div>
            </div>
            <nav className="menu">
              <ul className="nav metismenu" id="sidebar-menu">
                <li className="active"> <a href="/">
                  <i className="fa fa-home"> </i> Dashboard</a>
                </li>
                <li> <a href="">
                  <i className="fa fa-calendar"> </i> Calendar Events
                  <i className="fa arrow"> </i></a>
                  <ul>
                    <li> <a href="/calender_events">
                      Events
                    </a> </li>
                    <li> <a href="/calender_event_registers">
                      Registers
                    </a> </li>
                    <li> <a href="/rosters">
                      Roster
                    </a> </li>
                  </ul>
                </li>
                <li> <a href="">
                  <i className="fa fa-table"> </i> Tables
                  <i className="fa arrow"> </i>
                </a>
                  <ul>
                    <li> <a href="/mentors">
                      Mentors
                    </a> </li>
                    <li> <a href="/head_mentors">
                      Head Mentors
                    </a> </li>
                    <li> <a href="/sscs">
                      SSC's
                    </a> </li>
                    <li> <a href="/mentees">
                      Mentees
                    </a> </li>
                  </ul>
                </li>
                <li> <a href="#">
                  <i className="fa fa-pencil-square-o"> </i> Forms
                </a> </li>
              </ul>
            </nav>
          </div>
          <footer className="sidebar-footer">
            Copyright
          </footer>
        </aside>
        <div className="sidebar-overlay" id="sidebar-overlay"> </div>
      </div>
    )
  }
}

SideBarNav.propTypes = propTypes;
export default SideBarNav;