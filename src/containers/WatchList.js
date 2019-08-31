import React, { Component } from "react";
import { getWatchList } from "../libs/DataAccess";
import StockEarningsTable from "../components/StockEarningsTable";
import "./WatchList.css";

export default class WatchList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: null
    };
  }

  async componentDidMount() {
    const stocks = getWatchList();
    this.setState({ stocks: stocks });
  }

  renderTable() {
    return (
      <StockEarningsTable
        title="WatchList"
        infoText=""
        showDetails={false}
        hasMultipleStocks={true}
        stocks={this.state.stocks} />
    );
  }

  render() {
    return (
      <div className="watch-list">
        {this.state.stocks && this.renderTable()}
      </div>
    );
  }

}