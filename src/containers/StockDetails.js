import React, { Component } from "react";
import { getStock } from "../libs/DataAccess";
import StockDetailsHeader from "../components/StockDetailsHeader"
import StockEarningsHistoryTable from "../components/StockEarningsHistoryTable"
import "./StockDetails.css";

export default class StockDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      stock: null
    };
  }

  async componentDidMount() {
    const stock = getStock(this.props.match.params.symbol);
    this.setState({
      isLoading: false,
      stock: stock,
    });
  }

  renderNotFound() {
    const symbol = this.props.match.params.symbol;
    return (
      <h3>Sorry, symbol {symbol} not found!</h3>
    );
  }

  renderStock() {

    const stock = this.state.stock;

    return (
      <>
        <StockDetailsHeader stock={stock} />
        <StockEarningsHistoryTable
          title="Earnings History"
          hasMultipleStocks={false}
          hasPastEarningsOnly={true}
          history={stock.earningsHistories} />
      </>
    );
  }

  render() {

    return (
      <div className="stock-details container">
        {this.state.isLoading ? null : this.state.stock != null ? this.renderStock() : this.renderNotFound()}
      </div>
    );
  }

}