import React from 'react';
import Footer from '../Footer';

const Main = props => [
  <main key="1">{props.children}</main>,
  <Footer key="2" />
];

export default Main;
