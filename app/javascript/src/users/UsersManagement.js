import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import UsersList from './UsersList';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const propTypes = {
   users : PropTypes.array,
   loadingUsers: PropTypes.bool,
   //actions: PropTypes.object.isRequired,
};

class UsersManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRoleSelect = this.handleRoleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    this.setState({ showUserModal: false });
  }

  open() {
    this.setState({ showUserModal: true });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleRoleSelect(event) {
    const target = event.target;
    const value = target.value;
    this.setState({roles: [value]})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({canSubmit: false});
    $.ajax({
      type: 'POST',
      url: '/api/v1/users',
      data: {user: this.state},
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      },
    })
      .success((result) => {
        toastr["success"]("User created successfully");
        window.location.assign('/dashboard');
      }).error((result) => {
        toastr["error"]("Create User failed");

        this.setState({
          showUserModal: false,
          first_name: '',
          last_name: '',
          email: '',
          roles: '',
          student_number: '',
          password: '',
          password_confirmation: ''
        });
    });
  }

  render() {
    return(
      <article className="content responsive-tables-page">
        <div className="title-block">
          <h1 className="title"> Manage Users </h1>
          <p className="title-description"> Add/Edit app users </p>
        </div>
        { this.state.users &&
          <UsersList
            users={this.state.users}
          />
        }
        <div className="card-block">
          <button type="button"
                  className="btn btn-oval btn-primary pull-right"
                  onClick={this.open}>
            Add User
          </button>
        </div>
        <Modal show={this.state.showUserModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="card card-block sameheight-item">
              <FormGroup controlId="firstNameGroup">
                <ControlLabel bsClass="form-label">First Name</ControlLabel>
                <FormControl
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  placeholder="First Name"
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup controlId="lastNameGroup">
                <ControlLabel bsClass="form-label">Last Name</ControlLabel>
                <FormControl
                  type="text"
                  name="last_name"
                  value={this.state.last_name}
                  placeholder="Last Name"
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup controlId="emailGroup">
                <ControlLabel bsClass="form-label">Email</ControlLabel>
                <FormControl
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup controlId="passwordGroup">
                <ControlLabel bsClass="form-label">Password</ControlLabel>
                <FormControl
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup controlId="passwordConfirmGroup">
                <ControlLabel bsClass="form-label">Confirm Password</ControlLabel>
                <FormControl
                  type="password"
                  name="password_confirmation"
                  value={this.state.password_confirmation}
                  placeholder="Confirm Password"
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup controlId="roleSelectGroup">
                <ControlLabel bsClass="form-label">Select</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="Select"
                  name="roles"
                  onChange={this.handleRoleSelect}
                >
                  <option value="">Select</option>
                  <option value="sys_admin">Sys Admin</option>
                  <option value="admin">Admin</option>
                  <option value="ssc">SSC</option>
                  <option value="head">Head</option>
                  <option value="mentor">Mentor</option>
                  <option value="mentee">Mentee</option>
                </FormControl>
              </FormGroup>

              <FormGroup controlId="studentNumberGroup">
                <ControlLabel bsClass="form-label">Student Number</ControlLabel>
                <FormControl
                  type="text"
                  name="student_number"
                  value={this.state.student_number}
                  placeholder="Student Number"
                  onChange={this.handleInputChange}
                />
                <HelpBlock>Please ensure that this is correct</HelpBlock>
              </FormGroup>
              <FormGroup controlId="submitButton">
                <button type="button"
                        className="btn btn-primary-outline pull-right"
                        onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </FormGroup>
            </form>
          </Modal.Body>
        </Modal>
      </article>
    );
  }
}

UsersManagement.propTypes = propTypes;
export default UsersManagement;