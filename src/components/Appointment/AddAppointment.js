import React, { Component } from 'react';
import { TextField } from '../FormField/TextField';
import { RaisedPrimaryButton } from '../FormField/Button';

class AddAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      empi: ''
    };
  }

  handleFormChange(event) {
    const { target } = event;
    const { checked, name, type, value } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

  render() {
    return (
      <form>
        <TextField
          name="firstName"
          placeholder="First Name"
          type="text"
          value={this.props.firstName}
          onChange={e => this.props.handleFormChange(e)}
        />
        <TextField
          name="lastName"
          placeholder="Last Name"
          type="text"
          value={this.props.lastName}
          onChange={e => this.props.handleFormChange(e)}
        />
        <TextField
          name="empi"
          placeholder="Patient EMPI"
          type="text"
          value={this.props.empi}
          onChange={e => this.props.handleFormChange(e)}
        />
        <RaisedPrimaryButton type="submit">Search</RaisedPrimaryButton>
      </form>
    );
  }
}

export default AddAppointment;
