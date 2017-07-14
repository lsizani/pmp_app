import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    notifications: PropTypes.number.isRequired,
  }).isRequired
};

const signOut = function() {
  window.location.assign('/users/sign_out');
};

const profile = function() {
  window.location.assign('/users/edit');
};

const dashboard = function() {
  window.location.assign('/dashboard');
};

const users = function() {
  window.location.assign('/users');
};


const transactionHistory = function() {
  window.location.assign('/dashboard/history');
};


const AppNavBar = ({ user }) => {
  return (
    <header className="header">
      <div className="header-block header-block-nav">
        <ul className="nav-profile">
          <li className="notifications new"> <a href="" data-toggle="dropdown">
            <i className="fa fa-bell-o"> </i>
            <sup>
              <span className="counter">{user.notifications}</span>
            </sup>
          </a>
            <div className="dropdown-menu notifications-dropdown-menu">
              <ul className="notifications-container">
              </ul>
              <footer>
                <ul>
                  <li> <a href="">
                    View All
                  </a> </li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="profile dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <div className="img"> </div> <span className="name">
                {user.first_name} {user.last_name}
    			    </span> </a>
            <div className="dropdown-menu profile-dropdown-menu" aria-labelledby="dropdownMenu1"> <a className="dropdown-item" onClick={profile}>
              <i className="fa fa-user icon"> </i>
              Profile
            </a> <a className="dropdown-item" href="/">
              <i className="fa fa-bell icon"> </i>
              Notifications
            </a> <a className="dropdown-item" href="/" onClick={users}>
              <i className="fa fa-users icon"> </i>
              Manage Users
            </a>
              <div className="dropdown-divider"> </div> <a className="dropdown-item" onClick={signOut}>
                <i className="fa fa-power-off icon"> </i>
                Logout
              </a> </div>
          </li>
        </ul>
      </div>
    </header>
  )
};

AppNavBar.propTypes = propTypes;
export default AppNavBar;