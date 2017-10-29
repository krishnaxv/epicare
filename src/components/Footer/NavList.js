import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  height: 56px;
`;

const Icon = styled.i`
  font-size: 3rem;
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
  padding: 8px;
`;

const ListLink = ({ icon, displayName, linkTo }) => (
  <ListItem>
    <Link to={linkTo}>
      <Icon className="material-icons">{icon}</Icon>
      {/* <p>{displayName}</p> */}
    </Link>
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
