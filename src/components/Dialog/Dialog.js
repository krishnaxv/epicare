import React, { Component } from 'react';
import { MDCDialog } from '@material/dialog/dist/mdc.dialog';
import '@material/dialog/dist/mdc.dialog.css';

class Dialog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const dialog = new MDCDialog(this.dialog);

    dialog.listen('MDCDialog:accept', () => {
      this.props.onAccept();
    });

    dialog.listen('MDCDialog:cancel', () => {
      this.props.onCancel();
    });

    dialog.show();
  }

  render() {
    return (
      <aside
        ref={dialog => {
          this.dialog = dialog;
        }}
        className="mdc-dialog"
      >
        <div className="mdc-dialog__surface">
          <header className="mdc-dialog__header">
            <h2 className="mdc-dialog__header__title">Add Appointment</h2>
          </header>
          <section className="mdc-dialog__body">{this.props.children}</section>
          {/* <footer className="mdc-dialog__footer">
            <button
              type="button"
              className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel"
            >
              Cancel
            </button>
            <button
              type="button"
              className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept"
            >
              {this.props.acceptText}
            </button>
          </footer> */}
        </div>
        <div className="mdc-dialog__backdrop" />
      </aside>
    );
  }
}

export default Dialog;
