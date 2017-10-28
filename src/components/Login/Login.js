import React from 'react';
import { TextField } from '../FormField/TextField';
import { RaisedPrimaryButton } from '../FormField/Button';
import Loader from '../Loader/Loader';

import './style.css';

const Login = props => (
  <div className="login__container">
    <div className="logo__container--primary">
      <h1>Epicare</h1>
    </div>
    <div className="form__container--login mdc-elevation--z16">
      <form onSubmit={props.onSubmitLogin}>
        <TextField
          name="email"
          helpText="Must be a valid email address"
          placeholder="Email"
          type="email"
          value={props.email}
          onChange={props.onUpdateEmail}
        />
        <TextField
          name="password"
          helpText="Required"
          placeholder="Password"
          type="password"
          value={props.password}
          onChange={props.onUpdatePassword}
        />
        <RaisedPrimaryButton type="submit">Sign In</RaisedPrimaryButton>
      </form>
    </div>
    {props.isLoading === true && <Loader />}
  </div>
);

export default Login;
