import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UsersList from './UsersList';

const propTypes = {
   users : PropTypes.array.isRequired
};

class UsersManagement extends Component {
  render() {
    return(
      <article className="content responsive-tables-page">
        <div className="title-block">
          <h1 className="title"> Manage Users </h1>
          <p className="title-description"> Add/Edit app users </p>
        </div>
        <UsersList
          users={this.props.users}
        />
      </article>
    );
  }
}

UsersManagement.propTypes = propTypes;
export default UsersManagement;
