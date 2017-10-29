import React, { Component } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
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

  handleClickEvent(timeOffset) {
    this.props.onClick(timeOffset);
  }

  render() {
    const { item } = this.props;
    return (
      <Wrapper>
        <Time>{format(new Date(item.timeOffset), 'HH:mm A')}</Time>
        <Event onClick={() => this.handleClickEvent(item.timeOffset)}>
          {item.event && <EventView event={item.event} />}
        </Event>
      </Wrapper>
    );
  }
}

export default DayViewItem;
