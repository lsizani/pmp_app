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
                <li className="active"> <a href="index.html">
                  <i className="fa fa-home"> </i> Dashboard
                </a> </li>
                <li> <a href="">
                  <i className="fa fa-th-large"> </i> Items Manager
                  <i className="fa arrow"> </i>
                </a>
                  <ul>
                    <li> <a href="items-list.html">
                      Items List
                    </a> </li>
                    <li> <a href="item-editor.html">
                      Item Editor
                    </a> </li>
                  </ul>
                </li>
                <li> <a href="">
                  <i className="fa fa-bar-chart"> </i> Charts
                  <i className="fa arrow"> </i>
                </a>
                  <ul>
                    <li> <a href="charts-flot.html">
                      Flot Charts
                    </a> </li>
                    <li> <a href="charts-morris.html">
                      Morris Charts
                    </a> </li>
                  </ul>
                </li>
                <li> <a href="">
                  <i className="fa fa-table"> </i> Tables
                  <i className="fa arrow"> </i>
                </a>
                  <ul>
                    <li> <a href="static-tables.html">
                      Static Tables
                    </a> </li>
                    <li> <a href="responsive-tables.html">
                      Responsive Tables
                    </a> </li>
                  </ul>
                </li>
                <li> <a href="forms.html">
                  <i className="fa fa-pencil-square-o"> </i> Forms
                </a> </li>
                <li> <a href="">
                  <i className="fa fa-desktop"> </i> UI Elements
                  <i className="fa arrow"> </i>
                </a>
                  <ul>
                    <li> <a href="buttons.html">
                      Buttons
                    </a> </li>
                    <li> <a href="cards.html">
                      Cards
                    </a> </li>
                    <li> <a href="typography.html">
                      Typography
                    </a> </li>
                    <li> <a href="icons.html">
                      Icons
                    </a> </li>
                    <li> <a href="grid.html">
                      Grid
                    </a> </li>
                  </ul>
                </li>
                <li> <a href="">
                  <i className="fa fa-file-text-o"></i> Pages
                  <i className="fa arrow"></i>
                </a>
                  <ul>
                    <li> <a href="login.html">
                      Login
                    </a> </li>
                    <li> <a href="signup.html">
                      Sign Up
                    </a> </li>
                    <li> <a href="reset.html">
                      Reset
                    </a> </li>
                    <li> <a href="error-404.html">
                      Error 404 App
                    </a> </li>
                    <li> <a href="error-404-alt.html">
                      Error 404 Global
                    </a> </li>
                    <li> <a href="error-500.html">
                      Error 500 App
                    </a> </li>
                    <li> <a href="error-500-alt.html">
                      Error 500 Global
                    </a> </li>
                  </ul>
                </li>
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