import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
// import { Link } from 'react-router-dom';

const List = styled.ul`display: flex;`;

const Icon = styled.i`
  font-size: 1.6rem;
  color: #98466f;
`;

const ListItem = styled.li`
  font-size: 1.4rem;
  display: flex;
  flex-flow: column wrap;
  width: 25%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #98466f;
`;

const ListLink = ({ icon, displayName, linkTo }) => (
  <ListItem>
    <Icon className="material-icons">{icon}</Icon>
    <p>{displayName}</p>
  </ListItem>
);

const NavList = ({ list }) => {
  const links = map(list, (item, index) => (
    <ListLink
      key={index}
      icon={item.icon}
      displayName={item.displayName}
      linkTo={item.linkTo}
    />
  ));
  return <List>{links}</List>;
};

export default NavList;
