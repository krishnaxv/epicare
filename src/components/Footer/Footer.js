import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import NavList from './NavList';

const fadeIn = keyframes`
  from {
    bottom: -32px;
  }

  to {
    bottom: 0px;
  }
`;

const Wrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  animation: ${fadeIn} 0.5s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  padding-top: 8px;
`;

const optionList = [
  {
    id: 1,
    displayName: 'Calender',
    icon: 'favorite',
    linkTo: 'calender'
  },
  {
    id: 2,
    displayName: 'Search',
    icon: 'search',
    linkTo: 'search'
  },
  {
    id: 3,
    displayName: 'Profile',
    icon: 'person',
    linkTo: 'profile'
  },
  {
    id: 4,
    displayName: 'Chat',
    icon: 'message',
    linkTo: 'chat'
  }
];

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 0
    };
  }

  render() {
    return (
      <Wrapper>
        <NavList list={optionList} activeLink={this.state.activeLink} />
      </Wrapper>
    );
  }
}

export default Footer;
