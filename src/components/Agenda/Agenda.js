import React from 'react';
import styled from 'styled-components';
import { DayView } from '../Calendar';

const Wrapper = styled.div`padding-bottom: 56px;`;

const Agenda = props => (
  <Wrapper>
    <DayView eventList={props.eventList} />
  </Wrapper>
);

export default Agenda;
