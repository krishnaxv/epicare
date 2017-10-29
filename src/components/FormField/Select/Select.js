import React, { Component } from 'react';
import { MDCSelect } from '@material/select/dist/mdc.select';
import '@material/select/dist/mdc.select.css';

import './style.css';

class Select extends Component {
  constructor(props) {
    super(props);
    this.select = null;
  }
  componentDidMount() {
    const select = new MDCSelect(this.select);
    select.listen('MDCSelect:change', () => {
      // select.selectedOptions[0].textContent
      const event = {
        target: {
          checked: false,
          name: this.props.name,
          type: 'select',
          value: this.props.options[select.selectedIndex]
        }
      };
      this.props.onSelect(event);
    });
  }
  render() {
    const { options, placeholder } = this.props;
    return (
      <div
        className="mdc-select"
        role="listbox"
        tabIndex="0"
        ref={select => {
          this.select = select;
        }}
      >
        <span className="mdc-select__selected-text">{placeholder}</span>
        <div className="mdc-simple-menu mdc-select__menu">
          <ul className="mdc-list mdc-simple-menu__items">
            {options.map((option, index) => (
              <li
                key={index}
                className="mdc-list-item"
                role="option"
                tabIndex="0"
              >
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Select;
