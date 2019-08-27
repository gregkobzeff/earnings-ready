import moment from "moment-timezone";
import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import "./Test.css";

export default class Test extends Component {

  async componentDidMount() {

  }

  render() {

    let moment1 = moment("2019-08-24");
    let moment2 = moment.tz("2019-08-24", "America/New_York");
    console.log(moment1, moment2);

    return (
      <div className="test">
        <h3>Test Page</h3>
        <ProgressBar variant="success" now={60} max={100} />
      </div>
    );
  }

}