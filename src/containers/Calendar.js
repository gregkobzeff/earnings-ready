import moment from "moment";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { getStocks } from '../libs/DataAccess';
import "./Calendar.css";

export default class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: null
    };
  }

  async componentDidMount() {
    const thisWeekStart = moment().clone().startOf('week');
    const lastWeekStart = moment().clone().subtract(1, 'week').startOf('week');
    const nextWeekEnd = moment().clone().add(1, 'week').endOf('week');
    const stocks = getStocks(lastWeekStart, nextWeekEnd);
    this.setState({ stocks: stocks });
  }

  renderTable(table) {

    if (table.stocks.length === 0) return (
      <>
        <h3>{table.title}</h3>
        <p>No reported earnings.</p>
      </>
    );

    return (
      <div key={table.key}>
        <h3>{table.title}</h3>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Earnings Date</th>
              <th>Earnings Time</th>
            </tr>
          </thead>
          <tbody>
            { table.stocks.map( (s, i) => 
              <LinkContainer key={i} to={`/stocks/${s.symbol}`}>
                <tr>
                  <td>{s.symbol}</td>
                  <td>{(s.earningsProximity.startsWith("B") ? s.lastEarningsDate : s.nextEarningsDate).format("M/D/YYYY")}</td>
                  <td>{(s.earningsProximity.startsWith("B") ? s.lastEarningsTime : s.nextEarningsTime)}</td>
                </tr>
              </LinkContainer>
            )}
          </tbody>
        </Table>
      </div>
    );
  }

  renderTables() {
    const today = moment().startOf('day');
    const todayStocks = this.state.stocks.filter(s => s.lastEarningsDate.isSame(today, "d") || s.nextEarningsDate.isSame(today, "d"));
    const thisWeekStocks = this.state.stocks.filter(s => ["B0", "A0"].includes(s.earningsProximity));
    const nextWeekStocks = this.state.stocks.filter(s => s.earningsProximity === "A1");
    const lastWeekStocks = this.state.stocks.filter(s => s.earningsProximity === "B1");
    const tables = [
      { key: "T", title: "Today", stocks: todayStocks },
      { key: "TW", title: "This Week", stocks: thisWeekStocks },
      { key: "NW", title: "Next Week", stocks: nextWeekStocks },
      { key: "LW", title: "Last Week", stocks: lastWeekStocks }
    ];

    return tables.map(t => this.renderTable(t));
  }

  render() {
    return (
      <div className="calendar">
        {this.state.stocks && this.renderTables()}
      </div>
    );
  }

}