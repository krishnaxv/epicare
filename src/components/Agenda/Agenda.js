import React from 'react';
import styled from 'styled-components';
import { DayView } from '../Calendar';
import Dialog from '../Dialog';
import { AddAppointment } from '../Appointment';

const Wrapper = styled.div`padding-bottom: 56px;`;

const Agenda = props => (
  <Wrapper>
    <DayView eventList={props.eventList} onClick={props.onClick} />
    {props.addEvent && (
      <Dialog
        onAccept={props.onAccept}
        onCancel={props.onCancel}
        acceptText="Search"
      >
        <AddAppointment />
      </Dialog>
    )}
  </Wrapper>
);

export default Agenda;
