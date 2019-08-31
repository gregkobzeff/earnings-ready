import React, { Component } from "react";
import { getStock, getStockEarnings, getConnectedStocks } from "../libs/DataAccess";
import StockDetailsHeader from "../components/StockDetailsHeader"
import StockEarningsTable from "../components/StockEarningsTable"
import "./StockDetails.css";

export default class StockDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      symbol: null,
      stock: null,
      earnings: null,
      connected: null
    };
  }

  loadStock(symbol) {
    const stock = getStock(symbol);
    const earnings = getStockEarnings(symbol);
    const connected = getConnectedStocks(symbol).filter(h => h.symbol !== symbol);
    this.setState({
      isLoading: false,
      symbol: symbol,
      stock: stock,
      earnings: earnings,
      connected: connected
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

    console.log("connected", this.state.connected);

    return (
      <>
        <StockDetailsHeader stock={this.state.stock} />
        <StockEarningsTable
          title={`Earnings History - ${this.state.symbol}`}
          infoText=""
          showDetails={false}
          hasMultipleStocks={false}
          stocks={this.state.earnings} />
        <StockEarningsTable
          title="Earnings - Connected Stocks"
          infoText={infoText}
          showDetails={true}
          hasMultipleStocks={true}
          stocks={this.state.connected} />
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