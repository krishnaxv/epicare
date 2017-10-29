import React, { Component } from 'react';

import { Agenda } from './';
import { userHelper, patientHelper } from '../../helpers';
import { getUserId } from '../../services/firebaseService';

class AgendaContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventList: [
        {
          startTime: 1509215400000,
          endTime: 1509222600000,
          patientId: 'P001',
          title: 'Chart Review'
        }
      ],
      addEvent: false
    };
  }

  componentDidMount() {
    // getUserId().then(userId => {
    //   userHelper
    //     .getUserEvents(userId)
    //     .then(eventList => {
    //       this.setState({
    //         eventList
    //       });
    //     })
    //     .catch(error => console.log(error));
    // });
  }

  addEvent(timeOffset) {
    this.setState({
      addEvent: true
    });
  }

  handleAccept() {
    // this.setState({
    //   addEvent: false
    // });
  }

  handleCancel() {
    this.setState({
      addEvent: false
    });
  }

  render() {
    return (
      <Agenda
        eventList={this.state.eventList}
        onClick={timeOffset => this.addEvent(timeOffset)}
        addEvent={this.state.addEvent}
      />
    );
  }
}

export default AgendaContainer;
