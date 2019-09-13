import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./Preferences.css";

export default class Preferences extends Component {

  render() {
    return (
      <div className="preferences">
        <Helmet>
          <title>Preferences</title>
        </Helmet>
        <h3>Preferences Page</h3>
      </div>
    );
  }

}