import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  users: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    roles: PropTypes.array.isRequired,
  }).isRequired,
};

const UsersList = ({ users }) => {
  return(
    <div className="card-block">
      <section className="example">
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Roles</th>
              <th>#</th>
            </tr>
            </thead>
            <tbody>
            { users.map((user, i) => (
                <tr key={i}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.roles}</td>
                  <td>
                    <button type="button" className="btn btn-pill-left btn-danger">Delete User</button>
                    &nbsp;
                    <button type="button" className="btn btn-pill-right btn-success">Edit User</button>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default UsersList;