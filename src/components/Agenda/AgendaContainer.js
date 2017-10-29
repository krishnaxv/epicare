import React, { Component } from 'react';

import { Agenda } from './';
import { userHelper } from '../../helpers';
import { getUserId } from '../../services/firebaseService';

class AgendaContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventList: [
        {
          startTime: 1509215400000,
          endTime: 1509215580000,
          patientId: 'P001',
          title: 'Chart Review'
        }
      ]
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

  render() {
    return <Agenda eventList={this.state.eventList} />;
  }
}

export default AgendaContainer;
