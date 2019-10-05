import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { getStockDetails, getEarnings, getConnectedStocks } from "../libs/DataAccess";
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
      connectedStocks: null
    };
  }

  async loadStock(symbol) {
    const stock = await getStockDetails(symbol);
    const earnings = await getEarnings([symbol]);
    const connectedStocks = await getConnectedStocks(symbol);
    this.setState({
      isLoading: false,
      symbol: symbol,
      stock: stock,
      earnings: earnings,
      connectedStocks: connectedStocks
    });
  }

  async componentDidMount() {
    await this.loadStock(this.props.match.params.symbol);
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

    const infoText = `Connections are stocks that have relationships to a specific stock. For example, they could  
     be competitors or parts suppliers. Connections that report earlier than ${this.state.symbol} can provide 
     clues as to how ${this.state.symbol} will report.`;

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
          title="Earnings - Connections"
          infoText={infoText}
          showDetails={true}
          hasMultipleStocks={true}
          stocks={this.state.connectedStocks} />
        <div className="text-center">
          <Link to="/connections/edit" className="btn btn-primary btn-sm">Edit Connections</Link>
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="stock-details container">
        <Helmet>
          <title>Stock Details</title>
        </Helmet>
        {this.state.isLoading ? null : this.state.stock != null ? this.renderStock() : this.renderNotFound()}
      </div>
    );
  }

}