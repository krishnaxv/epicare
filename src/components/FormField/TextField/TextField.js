import React, { Component } from 'react';
import { MDCTextfield } from '@material/textfield/dist/mdc.textfield';
import '@material/textfield/dist/mdc.textfield.css';

import { getRandomId } from '../../../utils';
import './style.css';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.textField = null;
    this.textFieldRef = null;
  }
  componentDidMount() {
    this.textFieldRef = new MDCTextfield(this.textField);
  }
  render() {
    const {
      autoFocus,
      helpText,
      name,
      onChange,
      placeholder,
      required,
      type,
      value
    } = this.props;
    const randomId = getRandomId();
    return (
      <div className="app-textfield--wrapper">
        <div
          className="mdc-textfield"
          ref={textField => {
            this.textField = textField;
          }}
        >
          <input
            autoFocus={autoFocus}
            name={name}
            required={required}
            type={type}
            className="mdc-textfield__input"
            id={`textField-${randomId}`}
            aria-controls={`validationMessage-${randomId}`}
            value={value}
            onChange={e => onChange(e)}
          />
          <label
            htmlFor={`textField-${randomId}`}
            className="mdc-textfield__label"
          >
            {placeholder}
          </label>
        </div>
        {helpText && (
          <p
            className="mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg"
            id={`validationMessage-${randomId}`}
          >
            {helpText}
          </p>
        )}
      </div>
    );
  }
}

export default TextField;
