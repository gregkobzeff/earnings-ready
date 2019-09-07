import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./Signup.css";

export default class Signup extends Component {

  render() {
    return (
      <div className="signup">
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <h3>Signup Page</h3>
      </div>
    );
  }

}