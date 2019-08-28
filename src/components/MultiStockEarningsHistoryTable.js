import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Constants from "../Constants"
import Tooltip from "./Tooltip";
import EarningsChangeDisplay from "./EarningsChangeDisplay";
import "./MultiStockEarningsHistoryTable.css";

export default class MultiStockEarningsHistoryTable extends Component {

  //props: title, stocks

  renderNoHistory() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <p>No reported earnings.</p>
      </>
    )
  }

  renderHistory() {

    return (
      <>
        <h5>{this.props.title}</h5>
        <Table bordered striped hover size="sm">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company</th>
              <th>Earnings Date</th>
              <th>Earnings Time</th>
              <th>
                Earnings Reaction
                <Tooltip icon={faInfoCircle} content={Constants.Tooltip_Earnings_Reaction} />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.stocks.map((s, i) =>
              <LinkContainer key={i} to={`/stocks/${s.symbol}`}>
                <tr>
                  <td>{s.symbol}</td>
                  <td>{s.companyName}</td>
                  <td>{s.earningsDate.format("M/D/YYYY")}</td>
                  <td>{s.earningsTime}</td>
                  <td>
                    {s.earningsProximity.startsWith("B") &&
                      <EarningsChangeDisplay earningsChange={s.earningsChange} earningsChangePct={s.earningsChangePct} />
                    }
                  </td>
                </tr>
              </LinkContainer>
            )}
          </tbody>
        </Table>
      </>
    )
  }

  render() {
    return (
      <section className="multi-stock-earnings-history-table">
        {this.props.stocks.length > 0 ? this.renderHistory() : this.renderNoHistory()}
      </section>
    )
  }

}