import React from 'react';

const DefaultButton = props => (
  <button className="mdc-button" type={props.type} onClick={props.onClick}>
    {props.children}
  </button>
);

export default DefaultButton;
