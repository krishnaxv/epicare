import React, { Component } from 'react';
import { map, range, toString, toInteger } from 'lodash';
import { format, startOfDay } from 'date-fns';
import { DayViewItem } from './';

// In millisecond
const timeslotOffsetList = range(0, 86400000 + 900000, 900000);

class DayView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const startOfDayTS = startOfDay(new Date());
    return (
      <ul>
        {map(timeslotOffsetList, (timeOffset, index) => {
          const time = format(
            new Date(
              toInteger(format(startOfDayTS, 'x')) + toInteger(timeOffset)
            ),
            'HH mm A'
          );
          return <DayViewItem key={index} timeOffset={toString(time)} />;
        })}
      </ul>
    );
  }
}

export default DayView;
