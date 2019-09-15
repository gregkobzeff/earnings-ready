import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./Settings.css";

export default class Settings extends Component {

  render() {
    return (
      <div className="settings">
        <Helmet>
          <title>Settings</title>
        </Helmet>
        <h3>Settings Page</h3>
      </div>
    );
  }

}