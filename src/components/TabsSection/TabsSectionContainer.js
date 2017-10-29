import React, { Component } from 'react';
import styled from 'styled-components';
import patientHelper from '../../helpers/patientHelper';

const FlyerContainer = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e1e4e7;
  display: flex;

  div {
    p:first-child {
      margin-bottom: 4px;
    }
  }
`;

const Icon = styled.div`
  color: #f78f1e;
  margin-right: 12px;
`;

const Card = styled.div`padding: 16px;`;

const CardHead = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const List = styled.div`
  color: #000;

  ul {
    li {
      border-bottom: 1px solid #e1e4e7;
    }
  }
`;

class TabsSectionContainer extends Component {
  constructor() {
    super();
    this.state = { careGaps: [] };
  }
  componentDidMount() {
    patientHelper
      .getPatientSummary('P002')
      .then(res => {
        this.setState({ careGaps: res.careGaps });
        console.log(this.state);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    const textSmall = {
      color: '#8c8c8c',
      fontSize: 12
    };
    return (
      <div>
        <div className="panel active" hidden id="summary" role="tabpanel">
          <FlyerContainer>
            <Icon>
              <i className="material-icons">directions_walk</i>
            </Icon>
            <div>
              <p>Frequent Flyer</p>
              <p style={textSmall}>
                <span>3 ED Visits</span> in 12 months.
              </p>
            </div>
          </FlyerContainer>
          <Card>
            <CardHead>Measures not met</CardHead>
            <List>
              <ul>
                {this.state.careGaps.map((gaps, i) => {
                  return (
                    <li key={i}>
                      <p>{gaps.measureName}</p>
                      <p>{gaps.testDate}</p>
                    </li>
                  );
                })}
              </ul>
            </List>
          </Card>
        </div>
        <div className="panel" hidden id="clinical-data" role="tabpanel">
          Item Two
        </div>
        <div className="panel" hidden id="care-team" role="tabpanel">
          Item Three
        </div>
      </div>
    );
  }
}
export default TabsSectionContainer;
