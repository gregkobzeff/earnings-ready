import moment from "moment";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "./Tooltip";
import Constants from "../Constants"
import Utilities from "../libs/Utilities";
import EarningsChangeDisplay from "./EarningsChangeDisplay";
import "./StockEarningsHistoryTable.css";

export default class StockEarningsHistoryTable extends Component {

  renderNoHistory() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <p>No reported earnings.</p>
      </>
    )
  }

  renderHistory() {

    const now = moment();

    return (
      <>
        <h5>{this.props.title}</h5>
        <Table bordered striped hover size="sm">
          <thead>
            <tr>
              {this.props.hasMultipleStocks &&
                <>
                  <th>Symbol</th>
                  <th>Company</th>
                </>
              }
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
            {this.props.history.map((h, i) =>
              <LinkContainer key={i} to={`/stocks/${h.symbol}`}
                className={this.props.hasMultipleStocks ? "enabled-link" : "disabled-link"} >
                <tr className={
                  (this.props.highlightRecentPast && h.earningsProximity.isBeforeNow) ||
                    (this.props.highlightRecentFuture && h.earningsProximity.isAfterNow) ?
                    "highlight-recent" : ""}>

                  {this.props.hasMultipleStocks &&
                    <>
                      <td>{h.symbol}</td>
                      <td>{h.companyName}</td>
                    </>
                  }

                  <td>{h.earningsDate.format("M/D/YYYY")}</td>
                  <td>{h.earningsTime}</td>

                  {h.earningsDate.isBefore(now) &&
                    <>
                      <td>
                        <EarningsChangeDisplay earningsChange={h.earningsChange} earningsChangePct={h.earningsChangePct} />
                      </td>
                      <td>{Utilities.formatCurrency(h.earningsActualEPS)}</td>
                      <td>{Utilities.formatCurrency(h.earningsConsensusEPS)}</td>
                    </>
                  }
                  {h.earningsDate.isSameOrAfter(now) &&
                    <>
                      <td></td>
                      <td></td>
                      <td></td>
                    </>
                  }

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
      <section className="stock-earnings-history-table">
        {this.props.history.length > 0 ? this.renderHistory() : this.renderNoHistory()}
      </section>
    )
  }

}