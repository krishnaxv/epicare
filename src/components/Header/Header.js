import React, { Component } from 'react';
import styled from 'styled-components';

// Absolute imports
import Chip from '../Chip';
import patientHelper from '../../helpers/patientHelper';

const Wrapper = styled.div`display: flex;`;

const AppHeader = styled.header`
  font-size: 1.4rem;
  display: flex;
  background-color: #f2f2f2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #e1e4e7;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const PatientDemographic = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const PrimaryBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  > div {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const SecondaryBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    flex-direction: row;
    margin-right: 8px;

    &:first-child {
      margin-bottom: 8px;
    }

    > p {
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }
    }

    > div {
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const PatientName = props => <div style={props.style}>{props.name}</div>;

class Header extends Component {
  constructor() {
    super();
    this.state = { patient: {} };
  }

  componentDidMount() {
    patientHelper
      .getPatientData('P001')
      .then(res => {
        this.setState({ patient: res });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const patient = this.state.patient;
    const patientName = {
      fontSize: '2rem',
      fontWeight: 500
    };

    const patientDetails = {
      color: '#8c8c8c',
      fontSize: '1.7rem'
    };

    return (
      <Wrapper>
        <AppHeader>
          <Avatar src="https://avatars3.githubusercontent.com/u/8594438?s=460&v=4" />
          <PatientDemographic>
            <PrimaryBody>
              {patient.lastName && (
                <PatientName
                  style={patientName}
                  name={`${patient.lastName}, ${patient.firstName}`}
                />
              )}
              <Chip text={patient.empi} />
            </PrimaryBody>
            <SecondaryBody>
              <div>
                {patient.gender && (
                  <p style={patientDetails}>{patient.gender},</p>
                )}
                {patient.age && <p style={patientDetails}>{patient.age},</p>}
                {patient.dob && (
                  <p style={patientDetails}>Born on {patient.dob}</p>
                )}
              </div>
              <div>
                {patient.healthInfo && (
                  <Chip
                    className="chip primary"
                    text={`${patient.healthInfo.risk.displayName} Risk`}
                    icon="favorite"
                  />
                )}
                {patient.healthInfo && (
                  <Chip
                    className="chip primary"
                    text={`${patient.healthInfo.careGaps} Care Gaps`}
                    icon="opacity"
                  />
                )}
              </div>
            </SecondaryBody>
          </PatientDemographic>
        </AppHeader>
      </Wrapper>
    );
  }
}

export default Header;
