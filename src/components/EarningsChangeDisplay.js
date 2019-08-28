import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import "./StockDetailsHeader.css";

export default class Calendar extends Component {

  getChangeSymbol(value) {
    return value >= 0 ? "+" : ""
  }

  getBarStyle(percent) {
    const scale = 10;
    const widthPct = (percent >= 25) ? 25 : percent;
    return { 'width': (widthPct * scale) + 'px' };
  }

  render() {
    return (
      <>
        <ProgressBar
          now={100}
          max={100}
          style={this.getBarStyle(Math.abs(this.props.earningsChangePct))}
          variant={this.props.earningsChange >= 0 ? "success" : "danger"}
        />
        <div>
          {this.getChangeSymbol(this.props.earningsChange) + this.props.earningsChangePct + "% "
            + "(" + this.getChangeSymbol(this.props.earningsChange) + this.props.earningsChange + ")"}
        </div>
      </>
    )
  }

}