import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./SignIn.css";

export default class SignIn extends Component {

  render() {
    return (
      <div className="sign-in">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <h3>SignIn Page</h3>
      </div>
    );
  }

}