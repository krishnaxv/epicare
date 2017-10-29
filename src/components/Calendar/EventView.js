import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-left: 2px solid #8018c4;
  height: 32px;
`;

class EventView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default EventView;
