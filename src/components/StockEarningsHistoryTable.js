import moment from "moment";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "./Tooltip";
import Constants from "../Constants"
import Utilities from "../libs/Utilities";
import EarningsChangeDisplay from "./EarningsChangeDisplay";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./StockEarningsHistoryTable.css";

class StockEarningsHistoryTable extends Component {

  pushIf(arr, elem, condition) {
    if (condition) arr.push(elem);
  }

  createColumns() {

    const columns = [];

    columns.push({ dataField: 'key', text: '', sort: false, hidden: true });
    this.pushIf(columns, { dataField: 'symbol', text: 'Symbol', sort: true }, this.props.hasMultipleStocks);
    this.pushIf(columns, { dataField: 'company', text: 'Company', sort: true }, this.props.hasMultipleStocks);

    columns.push({
      dataField: 'earningsDate', text: 'Date', sort: true, sortFunc: (a, b, order) => {
        return (order === 'asc') ? moment(a) - moment(b) : moment(b) - moment(a);
      }
    });

    columns.push({ dataField: 'earningsTime', text: 'Time', sort: true });

    columns.push({
      dataField: 'earningsReaction',
      text: '',
      sort: false,
      headerFormatter: () => {
        return (
          <>
            Reaction
            <Tooltip icon={faInfoCircle} content={Constants.Tooltip_Earnings_Reaction} placement="top" />
          </>)
      }
    });

    columns.push({ dataField: 'actualEPS', text: 'Actual EPS', sort: true });
    columns.push({ dataField: 'consensusEPS', text: 'Consensus EPS', sort: true });
    this.pushIf(columns, { dataField: 'details', text: 'Details', sort: false }, this.props.showDetails);

    return columns;

  }

  createData() {

    const now = moment();
    const data = this.props.stocks.map((h, i) => {

      const o = {};
      o.key = i;

      if (this.props.hasMultipleStocks) {
        o.symbol = h.symbol;
        o.company = h.companyName;
      }
      o.earningsDate = h.earningsDate.format("M/D/YYYY");
      o.earningsTime = h.earningsTime;

      if (h.earningsDate.isBefore(now)) {
        o.earningsReaction = <EarningsChangeDisplay earningsChange={h.earningsChange} earningsChangePct={h.earningsChangePct} />
        o.actualEPS = Utilities.formatCurrency(h.earningsActualEPS);
        o.consensusEPS = Utilities.formatCurrency(h.earningsConsensusEPS);
      }

      if (this.props.showDetails) {
        o.details = h.details ? <Tooltip icon={faInfoCircle} content={h.details} placement="left" /> : "";
      }

      return o;
    });

    return data;

  }

  renderTable() {

    const columns = this.createColumns();
    const data = this.createData();
    const classes = this.props.hasMultipleStocks ? "enabled-links" : "";
    const defaultSorted = [{ dataField: 'symbol', order: 'asc' }];

    const rowEvents = {
      onClick: (event, row) => {
        event.preventDefault();
        if (this.props.hasMultipleStocks) {
          this.props.history.push(`/stocks/${row.symbol}`);
        }
      }
    };

    return (
      <>
        <h5>
          {this.props.title}
          {this.props.infoText && <Tooltip icon={faInfoCircle} content={this.props.infoText} placement="top" />}
        </h5>
        <BootstrapTable
          bootstrap4
          striped
          hover
          condensed
          classes={classes}
          keyField='key'
          columns={columns}
          data={data}
          defaultSortDirection="asc"
          defaultSorted={defaultSorted}
          rowEvents={rowEvents} />
      </>
    );

  }

  renderNoTable() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <p>No reported earnings.</p>
      </>
    )
  }

  render() {
    return (
      <section className="stock-earnings-history-table">
        {this.props.stocks.length > 0 ? this.renderTable() : this.renderNoTable()}
      </section>
    )
  }

}

export default withRouter(StockEarningsHistoryTable);