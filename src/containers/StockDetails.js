import React, { Component } from "react";
import { getStock, getStockEarningsHistory, getStockGroupEarningsHistory } from "../libs/DataAccess";
import StockDetailsHeader from "../components/StockDetailsHeader"
import StockEarningsHistoryTable from "../components/StockEarningsHistoryTable"
import "./StockDetails.css";

export default class StockDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      symbol: null,
      stock: null,
      earningsHistory: null,
      groupEarningsHistory: null
    };
  }

  loadStock(symbol) {
    const stock = getStock(symbol);
    const earningsHistory = getStockEarningsHistory(symbol);
    const groupEarningsHistory = getStockGroupEarningsHistory(symbol).filter(h => h.symbol !== symbol);
    this.setState({
      isLoading: false,
      symbol: symbol,
      stock: stock,
      earningsHistory: earningsHistory,
      groupEarningsHistory: groupEarningsHistory
    });
  }

  async componentDidMount() {
    this.loadStock(this.props.match.params.symbol);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.symbol !== this.props.match.params.symbol) {
      this.loadStock(this.props.match.params.symbol);
    }
  }

  renderNotFound() {
    const symbol = this.props.match.params.symbol;
    return (
      <h3>Sorry, symbol {symbol} not found!</h3>
    );
  }

  renderStock() {

    return (
      <>
        <StockDetailsHeader stock={this.state.stock} />
        <StockEarningsHistoryTable
          title="Earnings History"
          hasMultipleStocks={false}
          highlightRecentPast={false}
          highlightRecentFuture={false}
          history={this.state.earningsHistory} />
        <StockEarningsHistoryTable
          title="Group Earnings History"
          hasMultipleStocks={true}
          highlightRecentPast={true}
          highlightRecentFuture={false}
          history={this.state.groupEarningsHistory} />
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