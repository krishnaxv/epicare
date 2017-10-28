import React, { Component } from 'react';

// absolute imports
import Header from '../Header/Header.js';
import Tabs from '../Tabs/Tabs.js';

class ClinicalOverview extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tabs />
      </div>
    );
  }
}
export default ClinicalOverview;
