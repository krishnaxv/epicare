import React from 'react';
import { DayView } from '../Calendar';
import styled from 'styled-components';

const Wrapper = styled.div`padding-bottom: 56px;`;

const Agenda = props => (
  <Wrapper>
    <DayView />
  </Wrapper>
);

export default Agenda;
