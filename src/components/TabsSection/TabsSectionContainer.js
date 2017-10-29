import React, { Component } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import patientHelper from '../../helpers/patientHelper';
import AccordionList from '../AccordionList';

const FlyerContainer = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e1e4e7;
  display: flex;
  background-color: #fff;
  box-shadow: 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 3px 0px;

  div {
    p:first-child {
      margin-bottom: 4px;
    }
  }
`;

const Icon = styled.div`
  font-size: 1.8rem;
  color: #f78f1e;
  margin-right: 12px;

  i {
    font-size: 28px;
  }
`;

const Card = styled.div`
  padding: 16px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 3px 0px;
  background-color: #fff;
`;

const CardHead = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #80184c;
`;

const List = styled.div`
  color: #000;

  ul {
    li {
      border-bottom: 1px solid #e1e4e7;
      padding: 14px 0;

      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
      }

      p {
        font-size: 1.7rem;
        margin-bottom: 4px;
        font-weight: 600;

        span {
          color: #8c8c8c;
          font-weight: 600;
          margin-right: 8px;
        }
      }
    }
  }
`;

const CareTeamWrapper = styled.div`
  background-color: #f8f8f8;
  border-top: 1px solid #e1e4e7;
  padding: 16px;

  ul {
    border: 1px solid #e1e4e7;
    border-radius: 3px;

    li {
      padding: 16px;
      background: #fff;
      border-bottom: 1px solid #e1e4e7;

      &:last-child {
        border-bottom: none;
      }

      div {
        color: #8c8c8c;
        font-size: 1.7rem;
        margin-bottom: 4px;

        span {
          color: #000;

          i {
            font-size: 19px;
            vertical-align: -4px;
            padding-left: 5px;
          }
        }
        a {
          color: #8c8c8c;
        }
      }
    }
  }
`;

class TabsSectionContainer extends Component {
  constructor() {
    super();
    this.state = { careGaps: [], cdiGaps: [], careTeam: [] };
  }
  componentDidMount() {
    patientHelper
      .getPatientSummary('P002')
      .then(res => {
        this.setState({ careGaps: res.careGaps, cdiGaps: res.cdiGaps });
      })
      .catch(err => {
        throw new Error(err);
      });

    patientHelper
      .getCareTeam('P002')
      .then(res => {
        this.setState({ careTeam: res.careTeam });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    const textSmall = {
      color: '#8c8c8c',
      fontSize: '1.6rem'
    };

    const textBold = {
      fontSize: '1.8rem',
      fontWeight: 600
    };

    const background = {
      backgroundColor: '#f8f8f8',
      marginBottom: '60px'
    };
    return (
      <div style={background}>
        <div className="panel active" hidden id="summary" role="tabpanel">
          <FlyerContainer>
            <Icon>
              <i className="material-icons">directions_run</i>
            </Icon>
            <div>
              <p style={textBold}>Frequent Flyer</p>
              <p style={textSmall}>
                <span>3 ED Visits</span> in 12 months.
              </p>
            </div>
          </FlyerContainer>
          <Card>
            <CardHead>Measures Not Met</CardHead>
            <List>
              <ul>
                {this.state.careGaps.map((gaps, i) => {
                  return (
                    <li key={i}>
                      {gaps.measureName && <p>{gaps.measureName}</p>}
                      {gaps.testDate && (
                        <p>
                          <span>Last Test Date: </span>
                          {format(new Date(gaps.testDate), 'MM/DD/YYYY')}
                        </p>
                      )}
                      {gaps.testScore && (
                        <p>
                          <span>Test Result: </span>
                          {gaps.testScore}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </List>
          </Card>

          <Card>
            <CardHead>Clinical Documentation Gap</CardHead>
            <List>
              <ul>
                {this.state.cdiGaps.map((gaps, i) => {
                  return (
                    <li key={i}>
                      {gaps.name && <p>{gaps.name}</p>}
                      {gaps.recordDate && (
                        <p>
                          <span>Last Recorded: </span>
                          {format(new Date(gaps.recordDate), 'MM/DD/YYYY')}
                        </p>
                      )}
                      {gaps.testScore && (
                        <p>
                          <span>Test Result: </span>
                          {gaps.testScore}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </List>
          </Card>
        </div>
        <div className="panel" hidden id="clinical-data" role="tabpanel">
          <AccordionList />
        </div>
        <div className="panel" hidden id="care-team" role="tabpanel">
          <CareTeamWrapper>
            <ul>
              {this.state.careTeam.map((member, i) => {
                return (
                  <li key={i}>
                    <div>
                      <span>Name: </span>
                      {member.lastName}, {member.firstName}
                    </div>
                    <div>
                      <span>
                        Number<i className="material-icons">phone</i>:{' '}
                      </span>
                      <a href={`tel: ${member.phone}`}>{member.phone}</a>
                    </div>
                    <div>
                      <span>Working Hours: </span>
                      {member.workHours.startTime} - {member.workHours.endTime}
                    </div>
                  </li>
                );
              })}
            </ul>
          </CareTeamWrapper>
        </div>
      </div>
    );
  }
}
export default TabsSectionContainer;
