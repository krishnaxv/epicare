import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

const dummyContacts = [
  {
    name: 'Amar',
    unread: false,
    chats: [],
    id: 1,
    primaryString: 'primaryString',
    secondaryString: 'secondaryString'
  },
  {
    name: 'Akhbar',
    unread: false,
    chats: [],
    id: 2,
    primaryString: 'primaryString',
    secondaryString: 'secondaryString'
  },
  {
    name: 'Anthony',
    unread: true,
    chats: ['Unread message'],
    id: 3,
    primaryString: 'primaryString',
    secondaryString: 'secondaryString'
  }
];

const ListItem = ({ id, primaryString, secondaryString }) => {
  return (
    <Link to={`/contacts/${id}/chat`}>
      <li className="mdc-list-item">
        <span className="mdc-list-item__start-detail" aria-hidden="true">
          {primaryString[0].toUpperCase() + primaryString[1].toUpperCase()}
        </span>
        <span className="mdc-list-item__text">
          {primaryString}
          <span className="mdc-list-item__text__secondary">
            {secondaryString}
          </span>
        </span>
      </li>
    </Link>
  );
};

class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listItems = map(dummyContacts, (c, index) => (
      <ListItem
        key={index}
        id={c.id}
        primaryString={c.primaryString}
        secondaryString={c.secondaryString}
      />
    ));
    return <ul className="mdc-list">{listItems}</ul>;
  }
}

export default Contacts;
