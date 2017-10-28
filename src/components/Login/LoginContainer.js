import React, { Component } from 'react';

import { Login } from './';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        email: '',
        password: ''
      },
      isLoading: false,
      error: ''
    };
  }

  componentDidMount() {
    // this.props.checkAuth();
  }

  handleFormChange(event) {
    const { target } = event;
    const { checked, name, type, value } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

  handleSubmitLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
  }

  render() {
    const { login: { isLoading, email }, password, error } = this.state;
    return (
      <Login
        isLoading={isLoading}
        email={email}
        error={error}
        password={password}
        onUpdateEmail={e => this.handleFormChange(e)}
        onUpdatePassword={e => this.handleFormChange(e)}
        onSubmitLogin={e => this.handleSubmitLogin(e)}
      />
    );
  }
}

export default LoginContainer;
