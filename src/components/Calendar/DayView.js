import React, { Component } from 'react';
import { chain, map, range, toString, toInteger } from 'lodash';
import { format, startOfDay } from 'date-fns';
import { DayViewItem } from './';

// In millisecond
const timeslotOffsetList = range(0, 86400000 + 1800000, 1800000);

class DayView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const startOfDayTS = startOfDay(new Date());
    return (
      <ul>
        {map(timeslotOffsetList, (timeOffsetMS, index) => {
          const time =
            toInteger(format(startOfDayTS, 'x')) + +toInteger(timeOffsetMS);
          const timeOffset = format(new Date(time), 'HH:mm A');

          // Format prop
          const event = chain(this.props.eventList)
            .filter((event, index) => time === event.startTime)
            .first()
            .assignIn({ timeOffset: toString(timeOffset) })
            .value();
          return <DayViewItem key={index} event={event} />;
        })}
      </ul>
    );
  }
}

export default DayView;
