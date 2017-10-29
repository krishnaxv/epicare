import React, { Component } from 'react';
import { first } from 'lodash';
import { TextField } from '../FormField/TextField';
import { RaisedPrimaryButton } from '../FormField/Button';
import { patientHelper } from '../../helpers';

class AddAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      empi: '',
      isSearchComplete: false
    };
  }

  handleFormChange(event) {
    const { target } = event;
    const { checked, name, type, value } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

  onSubmitAddAppointment(e) {
    e.preventDefault();
    const { firstName, lastName, empi } = this.state;
    patientHelper.getPatients({ firstName, lastName, empi }).then(data => {
      const { firstName, lastName, empi, gender, dob } = first(data);
      this.setState({
        patient: {
          firstName,
          lastName,
          empi,
          gender,
          dob
        },
        isSearchComplete: true
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.isSearchComplete && (
          <div>
            <p>{`${this.state.patient.lastName}, ${this.state.patient
              .firstName}`}</p>
            <p>{this.props.timeOffset}</p>
          </div>
        )}
        {!this.state.isSearchComplete && (
          <form onSubmit={e => this.onSubmitAddAppointment(e)}>
            <TextField
              name="firstName"
              placeholder="First Name"
              type="text"
              value={this.props.firstName}
              onChange={e => this.handleFormChange(e)}
            />
            <TextField
              name="lastName"
              placeholder="Last Name"
              type="text"
              value={this.props.lastName}
              onChange={e => this.handleFormChange(e)}
            />
            <TextField
              name="empi"
              placeholder="Patient EMPI"
              type="text"
              value={this.props.empi}
              onChange={e => this.handleFormChange(e)}
            />
            <RaisedPrimaryButton type="submit">Search</RaisedPrimaryButton>
          </form>
        )}
      </div>
    );
  }
}

export default AddAppointment;
