import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./Trends.css";

export default class Trends extends Component {

  render() {
    return (
      <div className="Trends">
        <Helmet>
          <title>Trends</title>
        </Helmet>
        <h3>Trends Page</h3>
      </div>
    );
  }

}