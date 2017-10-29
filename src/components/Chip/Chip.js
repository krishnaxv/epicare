import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ececec;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 32px;
  font-size: 1.6rem;

  &.chip.primary {
    background-color: #80184c;
    color: #fff;
  }

  &.chip.warning {
    background-color: #feaf0d;
    color: #fff;
  }

  &.chip.alert {
    background-color: #d93737;
    color: #fff;
  }
`;

const Icon = styled.i`
  font-size: 1.8rem;
  margin-right: 8px;
`;

const Chip = props => (
  <Wrapper style={props.style} className={props.className}>
    {props.icon && <Icon className="material-icons">{props.icon}</Icon>}
    {props.text}
  </Wrapper>
);

export default Chip;
