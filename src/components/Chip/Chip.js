import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  height: 32px;
  border-radius: 32px;
`;

const Icon = styled.i`
  font-size: 1.6rem;
  margin-right: 8px;
`;

const Chip = props => (
  <Wrapper style={props.style}>
    {props.icon && <Icon className="material-icons">{props.icon}</Icon>}
    {props.text}
  </Wrapper>
);

export default Chip;
