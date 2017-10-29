import React, { Component } from 'react';
import styled from 'styled-components';
import { EventView } from './';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const Time = styled.div`
  width: 80px;
  text-align: center;
  font-size: 1.2rem;
`;

const Event = styled.div`
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  margin-left: 8px;
  min-height: 32px;
`;

class DayViewItem extends Component {
  constructor(props) {
    super(props);
  }

  addEvent() {}

  render() {
    const { event, onClick } = this.props;
    console.log(event);
    return (
      <Wrapper>
        <Time>{event.timeOffset}</Time>
        <Event onClick={() => onClick()}>
          <EventView>{event.title}</EventView>
        </Event>
      </Wrapper>
    );
  }
}

export default DayViewItem;
