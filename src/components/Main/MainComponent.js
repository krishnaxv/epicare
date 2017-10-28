import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Main = props => [<Header key="0" />, props.children, <Footer key="1" />];

export default Main;
