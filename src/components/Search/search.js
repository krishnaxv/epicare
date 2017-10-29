import React, { Component } from 'react';
import TextField from '../FormField/TextField/TextField';
import styled from 'styled-components';
import patientHelper from '../../helpers/patientHelper';
import { map } from 'lodash';
import { RaisedPrimaryButton } from '../FormField/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`padding: 16px 8px;`;

const PatientItem = styled.div`border-bottom: 1px solid #e8e8e8;`;

const Icon = styled.i`vertical-align: middle;`;

const PatientDetails = styled.p`
  padding: 8px;
  font-size: 1.6rem;
`;

const PatientHeading = styled.h3`
  padding: 8px;
  color: #98466f;
`;

class PatientSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilters: true,
      patients: [],
      filters: {
        firstName: '',
        lastName: '',
        empi: ''
      }
    };
  }

  setFilter(field, value) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        [field]: value
      })
    });
  }

  searchPatients(e) {
    e.preventDefault();
    patientHelper
      .searchPatients(this.state.filters)
      .then(res => {
        const data = res.data;
        if (data.length < 1) {
          return;
        }
        this.setState({
          showFilters: false,
          patients: this.state.patients.concat(data)
        });
      })
      .catch(err => {});
  }

  showSearch() {
    this.setState({
      showFilters: true,
      patients: []
    });
  }

  render() {
    if (this.state.showFilters) {
      return (
        <Wrapper>
          <h3>Search Patients</h3>
          <form onSubmit={e => this.searchPatients(e)}>
            <TextField
              placeholder="Last Name"
              onChange={this.setFilter.bind(this, 'firstName')}
            />
            <TextField
              placeholder="First Name"
              onChange={this.setFilter.bind(this, 'lastName')}
            />
            <TextField
              placeholder="EMPI"
              onChange={this.setFilter.bind(this, 'empi')}
            />
            <RaisedPrimaryButton type="submit">Search</RaisedPrimaryButton>
          </form>
        </Wrapper>
      );
    } else {
      console.log(this.state.patients);
      const patientList = map(this.state.patients, (patient, index) => {
        console.log(patient);
        return (
          <Link to={`/patients/${patient.empi}/clinical-overview`}>
            <PatientItem key={index}>
              <PatientHeading>
                {patient.firstName}, {patient.lastName}
              </PatientHeading>
              <PatientDetails>
                {patient.empi} {patient.dob} {patient.gender}
              </PatientDetails>
            </PatientItem>
          </Link>
        );
      });
      return (
        <Wrapper>
          <h3>
            <Icon onClick={() => this.showSearch()} className="material-icons">
              keyboard_arrow_left
            </Icon>Searched Patients
          </h3>
          {patientList}
        </Wrapper>
      );
    }
  }
}

export default PatientSearch;
