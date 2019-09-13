import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./SignUp.css";

export default class SignUp extends Component {

  render() {
    return (
      <div className="sign-up">
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <h3>SignUp Page</h3>
      </div>
    );
  }

}