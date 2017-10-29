import React, { Component } from 'react';
import styled from 'styled-components';
import { DayView } from '../Calendar';
import Dialog from '../Dialog';
import { AddAppointment } from '../Appointment';

const Wrapper = styled.div`padding-bottom: 56px;`;

class Agenda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeOffset: 0
    };
  }

  trackEventViewClicked(timeOffset) {
    this.props.onClick(timeOffset);
    this.setState({
      isEventViewClicked: true
    });
  }

  render() {
    return (
      <Wrapper>
        <DayView
          eventList={this.props.eventList}
          onClick={timeOffset => this.trackEventViewClicked(timeOffset)}
        />
        {this.props.addEvent && (
          <Dialog>
            <AddAppointment timeOffset={this.state.timeOffset} />
          </Dialog>
        )}
      </Wrapper>
    );
  }
}

export default Agenda;
