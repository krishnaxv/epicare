import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { firebaseAuth } from '../../config/constants';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   firebaseAuth().onAuthStateChanged(user => {
  //     if (user) {
  //       history.push('/');
  //     } else {
  //       history.push('/login');
  //     }
  //   });
  // }

  render() {
    return this.props.children;
  }
}

export default App;
