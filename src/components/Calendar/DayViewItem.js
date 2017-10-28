import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
`;

const Time = styled.div`
  width: 120px;
  text-align: center;
`;

const Event = styled.div``;

const DayViewItem = props => {
  return (
    <Wrapper>
      <Time>{props.timeOffset}</Time>
      <Event>Event</Event>
    </Wrapper>
  );
};

export default DayViewItem;
