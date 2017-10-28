import React, { Component } from 'react';
import styled from 'styled-components';

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

class TabsSectionContainer extends Component {
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
