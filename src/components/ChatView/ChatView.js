import React, { Component } from 'react';
import { map } from 'lodash';
import Message from './Message';
import MessageInput from './MessageInput';
import { firebaseRef, firebaseAuth } from '../../config/constants';

class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  componentWillMount() {
    const { userId, patientId } = { userId: 1, patientId: 2 };
    this.setState({
      ref: firebaseRef.child(`messages/${userId}/${patientId}`)
    });
    this.state.ref.on('child_added', snapshot => {
      console.log(snapshot);
      this.setState({
        messages: this.state.messages.concat(snapshot)
      });
    });
  }
  addMessage(message) {
    debugger;
    this.state.ref.set(message);
  }
  render() {
    var messages = map(this.state.messages, (m, index) => (
      <Message key={index} message={m} />
    ));
    return (
      <div className="chatview">
        <div className="messages">{messages}</div>
        <MessageInput onClick={this.addMessage.bind()} />
      </div>
    );
  }
}
export default ChatView;
