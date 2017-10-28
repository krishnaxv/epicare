import React, { Component } from 'react';
import { MDCTextfield } from '@material/textfield/dist/mdc.textfield';
import '@material/textfield/dist/mdc.textfield.css';

import { getRandomId } from '../../../utils';
import './style.css';

class MultiLineTextField extends Component {
  constructor(props) {
    super(props);
    this.multiLineTextField = null;
  }

  componentDidMount() {
    const multiLineTextField = new MDCTextfield(this.multiLineTextField);
  }

  render() {
    const { name, onChange, placeholder, value } = this.props;
    const randomId = getRandomId();
    return (
      <div className="app-textfield--multiline">
        <div
          className="mdc-textfield mdc-textfield--multiline"
          ref={multiLineTextField => {
            this.multiLineTextField = multiLineTextField;
          }}
        >
          <textarea
            name={name}
            id={`multiLineTextField-${randomId}`}
            className="mdc-textfield__input"
            rows="8"
            cols="40"
            value={value}
            onChange={onChange}
          />
          <label
            htmlFor={`multiLineTextField-${randomId}`}
            className="mdc-textfield__label"
          >
            {placeholder}
          </label>
        </div>
      </div>
    );
  }
}

export default MultiLineTextField;
