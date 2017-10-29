import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../services/firebaseService';
import { Login } from './';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      error: '',
      isAuthenticated: false
    };
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
    signIn(email, password).then(data => {
      this.setState({
        isAuthenticated: true
      });
    });
  }

  render() {
    const { isLoading, email, password, error, isAuthenticated } = this.state;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

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
