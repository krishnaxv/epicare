import React from 'react';

const RaisedPrimaryButton = props => (
  <button
    className="mdc-button mdc-button--raised mdc-button--primary"
    type={props.type}
  >
    {props.children}
  </button>
);

export default RaisedPrimaryButton;
