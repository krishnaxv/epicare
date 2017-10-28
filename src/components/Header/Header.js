import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`display: flex;`;

const AppHeader = styled.header`
  font-size: 1.4rem;
  display: flex;
  background-color: #e5e5e5;
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

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <AppHeader>
          <Avatar src="https://avatars3.githubusercontent.com/u/8594438?s=460&v=4" />
          <div>Female, 24 Yrs Old</div>
        </AppHeader>
      </Wrapper>
    );
  }
}

export default Header;
