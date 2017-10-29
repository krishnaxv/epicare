import React, { Component } from 'react';
import { AutoSizer, List } from 'react-virtualized';
import { assign, cloneDeep, filter, toLower } from 'lodash';
import { TextField } from '../FormField/TextField';

import 'react-virtualized/styles.css';
import './style.css';

const activeItem = 0;

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem,
      searchText: props.searchText || '',
      showOptionList: props.showOptionList || false,
      optionList: props.optionList,
      optionListInputThreshold: props.optionListInputThreshold || 10
    };
    this.optionListClone = cloneDeep(this.state.optionList);
  }
  componentDidMount() {
    window.addEventListener('click', e => {
      if (
        e.target.closest('.autocomplete') === null &&
        this.state.showOptionList
      ) {
        this.setState({
          showOptionList: false
        });
      }
    });

    const autocompleteInput = this.autocomplete.querySelector('input');
    autocompleteInput.addEventListener('keydown', e => {
      switch (e.key) {
        case 'ArrowDown':
          this.setState({
            activeItem:
              this.state.activeItem === this.state.optionList.length - 1
                ? 0
                : this.state.activeItem + 1
          });
          break;
        case 'ArrowUp':
          this.setState({
            activeItem:
              this.state.activeItem === 0
                ? this.state.optionList.length - 1
                : this.state.activeItem - 1
          });
          break;
        case 'Enter':
          this.handleOptionClick(this.state.optionList[this.state.activeItem]);
          break;
        default:
      }
    });
    autocompleteInput.addEventListener('focus', e => {
      if (this.props.defaultListVisibility) {
        this.setState({ showOptionList: true });
      }
    });
  }

  handleUpdateText(e) {
    const { value } = e.target;
    const optionList =
      value === ''
        ? this.optionListClone
        : [
            ...[{ id: null, text: value }],
            ...filter(
              this.optionListClone,
              option => toLower(option.text).indexOf(toLower(value)) !== -1
            )
          ];
    this.setState({
      activeItem: optionList.length === 1 ? 0 : 1,
      searchText: value,
      showOptionList: true,
      optionList
    });
    if (typeof this.props.onUpdateText !== 'undefined') {
      this.props.onUpdateText(e);
    }
  }

  handleOptionClick(option) {
    this.setState({
      activeItem: 0,
      searchText: option.text,
      showOptionList: false
    });
    // Focus in autocomplete input element
    // this.autocomplete.querySelector('input').focus();
    // Remove focus from autocomplete input element
    this.autocomplete.querySelector('input').blur();
    this.props.onOptionClick(option);
  }

  rowRenderer({ key, index, isScrolling, isVisible, style }) {
    const { optionList } = this.state;
    const text = optionList[index].text;
    return (
      <li
        key={key}
        className="mdc-list-item"
        style={
          this.state.activeItem === index
            ? assign({ backgroundColor: '#e5e5e5' }, style)
            : style
        }
        onClick={() => this.handleOptionClick(optionList[index])}
      >
        <div
          className="mdc-list-item__content"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </li>
    );
  }

  render() {
    const { placeholder } = this.props;
    const { optionList } = this.state;
    const rowHeight = 32;
    return (
      <div
        className="autocomplete"
        ref={autocomplete => {
          this.autocomplete = autocomplete;
        }}
      >
        <TextField
          placeholder={placeholder}
          type="text"
          value={this.state.searchText}
          onChange={e => this.handleUpdateText(e)}
        />
        {this.state.showOptionList && (
          <ul className="mdc-list mdc-elevation--z4">
            {optionList.length === 0 && (
              <li
                className="mdc-list-item"
                style={{ height: `${rowHeight}px` }}
              >
                <div className="mdc-list-item__content">
                  No search result found.
                </div>
              </li>
            )}
            <AutoSizer disableHeight>
              {({ width }) => (
                <List
                  autoHeight
                  height={200}
                  width={width}
                  rowCount={optionList.length}
                  rowHeight={rowHeight}
                  rowRenderer={rowRenderer => this.rowRenderer(rowRenderer)}
                />
              )}
            </AutoSizer>
          </ul>
        )}
      </div>
    );
  }
}

export default Autocomplete;
