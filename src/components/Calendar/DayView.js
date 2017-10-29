import React, { Component } from 'react';
import { chain, map, range, toInteger } from 'lodash';
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
            toInteger(format(startOfDayTS, 'x')) + toInteger(timeOffsetMS);

          // Format prop
          const eventItem = {
            event: chain(this.props.eventList)
              .filter(event => time === event.startTime)
              .first()
              .value(),
            timeOffset: time
          };

          return (
            <DayViewItem
              key={index}
              item={eventItem}
              onClick={this.props.onClick}
            />
          );
        })}
      </ul>
    );
  }
}

export default DayView;
