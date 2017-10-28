import React, { Component } from 'react';
import styled from 'styled-components';

// Absolute imports
import Chip from '../Chip';

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
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
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
  margin-bottom: 8px;

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

const PatientName = props => <div>{props.name}, </div>;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <AppHeader>
          <Avatar src="https://avatars3.githubusercontent.com/u/8594438?s=460&v=4" />
          <PatientDemographic>
            <PrimaryBody>
              <PatientName name="John Corbett" />
              <Chip text="P7856487" />
            </PrimaryBody>
            <SecondaryBody>
              <div>
                <p>Female,</p>
                <p>52 yrs,</p>
                <p>Born on 02/01/1963</p>
              </div>
              <div>
                <Chip text="High Risk" icon="favorite" />
                <Chip text="3 Care Gaps" icon="opacity" />
              </div>
            </SecondaryBody>
          </PatientDemographic>
        </AppHeader>
      </Wrapper>
    );
  }
}

export default Header;
