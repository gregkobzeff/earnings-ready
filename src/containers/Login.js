import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./Login.css";

export default class Login extends Component {

  render() {
    return (
      <div className="login">
        <Helmet>
          <title>Log In</title>
        </Helmet>
        <h3>Login Page</h3>
      </div>
    );
  }

}