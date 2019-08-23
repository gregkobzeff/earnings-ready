import React, { Component } from "react";
import "./StockDetails.css";

export default class StockDetails extends Component {
  
  render() {

    const symbol = this.props.match.params.symbol;

    return (
        <div className="stock-details">
          <h3>StockDetails Page for {symbol}</h3>
        </div>
      );
    }

}