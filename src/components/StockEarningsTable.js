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
import "./StockEarningsTable.css";

class StockEarningsTable extends Component {

  pushIf(arr, elem, condition) {
    if (condition) arr.push(elem);
  }

  createColumns() {

    const columns = [];

    columns.push({ dataField: 'key', text: '', sort: false, hidden: true });

    this.pushIf(columns, {
      dataField: 'symbol', text: 'Symbol', sort: true, sortFunc: (a, b, order) => {
        const symbolA = a.props.children[0];
        const symbolB = b.props.children[0];
        let result = 0;
        if (order === 'asc') result = symbolA > symbolB ? 1 : -1;
        if (order === 'desc') result = symbolB > symbolA ? 1 : -1;
        return result;
      }
    }, this.props.hasMultipleStocks);

    //this.pushIf(columns, { dataField: 'company', text: 'Company', sort: true }, this.props.hasMultipleStocks);

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
            <Tooltip icon={faInfoCircle} content={Constants.Tooltip_Earnings_Reaction} size="1x" placement="top" />
          </>)
      }
    });

    columns.push({ dataField: 'actualEPS', text: 'Actual EPS', sort: true });
    columns.push({ dataField: 'consensusEPS', text: 'Consensus EPS', sort: true });

    return columns;

  }

  createData() {

    const now = moment();
    const data = this.props.stocks.map((h, i) => {

      const o = {};
      o.key = i;

      if (this.props.hasMultipleStocks) {
        o.symbol =
          <>
            {h.symbol}
            {this.props.showDetails && h.details && <Tooltip icon={faInfoCircle} size="sm" content={h.details} placement="right" />}
          </>;
        //o.company = h.companyName;
      }
      o.earningsDate = h.earningsDate.format("M/D/YYYY");
      o.earningsTime = h.earningsTime;

      if (h.earningsDate.isBefore(now)) {
        o.earningsReaction = <EarningsChangeDisplay earningsChange={h.earningsChange} earningsChangePct={h.earningsChangePct} />
        o.actualEPS = Utilities.formatCurrency(h.earningsActualEPS);
        o.consensusEPS = Utilities.formatCurrency(h.earningsConsensusEPS);
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
          const symbol = row.symbol.props.children[0];
          this.props.history.push(`/stocks/${symbol}`);
        }
      }
    };

    return (
      <>
        {this.props.title &&
          <h5>
            {this.props.title}
            {this.props.infoText && <Tooltip icon={faInfoCircle} size="1x" content={this.props.infoText} placement="top" />}
          </h5>
        }
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
        <h5>{this.props.title}</h5>
        <p>No reported earnings.</p>
      </>
    )
  }

  render() {
    return (
      <section className="stock-earnings-table">
        {this.props.stocks.length > 0 ? this.renderTable() : this.renderNoTable()}
      </section>
    )
  }

}

export default withRouter(StockEarningsTable);