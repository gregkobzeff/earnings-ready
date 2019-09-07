import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./Test.css";

export default class Test extends Component {

  async componentDidMount() {

  }

  render() {

    return (
      <div className="test">
        <Helmet>
          <title>Test</title>
        </Helmet>
        <h3>Test Page</h3>
      </div>
    );
  }

}