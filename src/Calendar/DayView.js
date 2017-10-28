import React, { Component } from 'react';
import { map, range } from 'lodash';
import { DayViewItem } from './';

const timeslotOffsetList = range(0, 86400, 900);

class DayView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {map(timeslotOffsetList, (item, index) => (
          <DayViewItem key={index} item={item} />
        ))}
      </ul>
    );
  }
}

export default DayView;
