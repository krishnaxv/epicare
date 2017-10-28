import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Main = props => [
  <Header key="0" />,
  <main key="1">{props.children}</main>,
  <Footer key="2" />
];

export default Main;
