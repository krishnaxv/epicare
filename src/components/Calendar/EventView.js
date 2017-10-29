import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  border-left: 2px solid #8018c4;
  min-height: 32px;
  width: 100%;
  background-color: #e5e5e5;
  padding: 0 8px;
  z-index: 1;
`;

class EventView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heightOffset: 1
    };
  }

  componentDidMount() {
    this.setState({
      heightOffset:
        (this.props.event.endTime - this.props.event.startTime) / 1800000
    });
  }

  render() {
    return (
      <Wrapper style={{ height: `${32 * this.state.heightOffset}px` }}>
        {this.props.event.title}
      </Wrapper>
    );
  }
}

export default EventView;
