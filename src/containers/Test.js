import moment from "moment-timezone";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
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
        <FontAwesomeIcon icon={faInfoCircle} size="lg" className="icon-info" />
      </div>
    );
  }

}