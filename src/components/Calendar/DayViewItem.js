import React, { Component } from 'react';
import styled from 'styled-components';
import { EventView } from './';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
`;

const Time = styled.div`
  width: 80px;
  text-align: center;
  font-size: 1.2rem;
`;

const Event = styled.div`
  position: relative;
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
    const { item, onClick } = this.props;
    return (
      <Wrapper>
        <Time>{item.timeOffset}</Time>
        <Event onClick={onClick}>
          {item.event && <EventView event={item.event} />}
        </Event>
      </Wrapper>
    );
  }
}

export default DayViewItem;
