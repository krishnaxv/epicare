import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import NavList from './NavList';

const fadeIn = keyframes`
  from {
    transform: translateY(56px);
  }
  to {
    transform: translateY(0);
  }
`;

const Wrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  animation: ${fadeIn} 0.5s ease;
  z-index: 99999;
  background-color: #fff;
`;

const optionList = [
  {
    id: 1,
    displayName: 'Calender',
    icon: 'perm_contact_calendar',
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
      <Wrapper className="mdc-elevation--z4">
        <NavList list={optionList} activeLink={this.state.activeLink} />
      </Wrapper>
    );
  }
}

export default Footer;
