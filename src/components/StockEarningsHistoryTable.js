import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "./Tooltip";
import Constants from "../Constants"
import EarningsChangeDisplay from "./EarningsChangeDisplay";
import "./StockEarningsHistoryTable.css";

export default class StockEarningsHistoryTable extends Component {

  formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
      .format(amount)
  }

  renderNoHistory() {
    return (
      <>
        <h5>No reported earnings history.</h5>
      </>
    )
  }

  renderHistory() {

    return (
      <>
        <h5>Earnings History:</h5>
        <Table bordered striped hover size="sm">
          <thead>
            <tr>
              <th>Earnings Date</th>
              <th>Earnings Time</th>
              <th>
                Earnings Reaction
                <Tooltip icon={faInfoCircle} content={Constants.Tooltip_Earnings_Reaction} />
              </th>
              <th>Actual EPS</th>
              <th>Consensus EPS</th>
            </tr>
          </thead>
          <tbody>
            {this.props.earningsHistories.map((h, i) =>
              <tr key={i}>
                <td>{h.earningsDate.format("M/D/YYYY")}</td>
                <td>{h.earningsTime}</td>
                <td>
                  <EarningsChangeDisplay earningsChange={h.earningsChange} earningsChangePct={h.earningsChangePct} />
                </td>
                <td>{this.formatCurrency(h.actualEPS)}</td>
                <td>{this.formatCurrency(h.consensusEPS)}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </>
    )
  }

  render() {
    return (
      <section className="stock-earnings-history-table">
        {this.props.earningsHistories.length > 0 ? this.renderHistory() : this.renderNoHistory()}
      </section>
    )
  }

}