import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { getWatchListData } from "../libs/DataAccess";
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
    const stocks = await getWatchListData();
    this.setState({ stocks: stocks });
  }

  renderTable() {
    return (
      <StockEarningsTable
        title=""
        infoText=""
        showDetails={false}
        hasMultipleStocks={true}
        stocks={this.state.stocks} />
    );
  }

  render() {
    return (
      <div className="watch-list text-center">
        <Helmet>
          <title>WatchList</title>
        </Helmet>
        {this.state.stocks && this.renderTable()}
        <Link to="/watchlist/edit" className="btn btn-primary btn-sm">Edit WatchList</Link>
      </div>
    );
  }

}