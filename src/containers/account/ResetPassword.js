import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./ResetPassword.css";

export default class ResetPassword extends Component {

  render() {
    return (
      <div className="reset-password">
        <Helmet>
          <title>Reset Password</title>
        </Helmet>
        <h3>Reset Password Page</h3>
      </div>
    );
  }

}