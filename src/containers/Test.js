import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { trace } from "../libs/DataAccess";
import "./Test.css";

export default class Test extends Component {

  async componentDidMount() {
    await trace();
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