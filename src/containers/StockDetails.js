import React, { Component } from "react";
import { getStock, getStockEarningsHistory, getConnectedStockEarningsHistory } from "../libs/DataAccess";
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
      history: null,
      connectedHistory: null
    };
  }

  loadStock(symbol) {
    const stock = getStock(symbol);
    const history = getStockEarningsHistory(symbol);
    const connectedHistory = getConnectedStockEarningsHistory(symbol).filter(h => h.symbol !== symbol);
    this.setState({
      isLoading: false,
      symbol: symbol,
      stock: stock,
      history: history,
      connectedHistory: connectedHistory
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

    const infoText = `Connected stocks are stocks that have relationships to this stock. For example, they could  
     be competitors or parts suppliers. Connected stocks that report earlier than ${this.state.symbol} can provide 
     clues as to how ${this.state.symbol} will report.`;

    return (
      <>
        <StockDetailsHeader stock={this.state.stock} />
        <StockEarningsHistoryTable
          title={`Earnings History - ${this.state.symbol}`}
          infoText=""
          showDetails={false}
          hasMultipleStocks={false}
          highlightRecentPast={false}
          highlightRecentFuture={false}
          stocks={this.state.history} />
        <StockEarningsHistoryTable
          title="Earnings History - Connected Stocks"
          infoText={infoText}
          showDetails={true}
          hasMultipleStocks={true}
          highlightRecentPast={false}
          highlightRecentFuture={false}
          stocks={this.state.connectedHistory} />
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