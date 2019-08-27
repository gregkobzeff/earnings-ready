import moment from "moment";
import React, { Component } from "react";
import { Table, ProgressBar } from "react-bootstrap";
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

  getChangeSymbol(value) {
    return value >= 0 ? "+" : ""
  }

  getBarStyle(percent) {
    const scale = 10;
    const widthPct = (percent >= 25) ? 25 : percent;
    return { 'width': (widthPct * scale) + 'px' };
  }

  async componentDidMount() {
    //const thisWeekStart = moment().clone().startOf('week');
    const lastWeekStart = moment().clone().subtract(1, 'week').startOf('week');
    const nextWeekEnd = moment().clone().add(1, 'week').endOf('week');
    const stocks = getStocks(lastWeekStart, nextWeekEnd);
    stocks.sort((s1, s2) => s1.earningsDate - s2.earningsDate);
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
        <h5>{table.title}</h5>
        <Table bordered striped hover size="sm">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Earnings Date</th>
              <th>Earnings Time</th>
              <th>Earnings Reaction</th>
            </tr>
          </thead>
          <tbody>
            {table.stocks.map((s, i) =>
              <LinkContainer key={i} to={`/stocks/${s.symbol}`}>
                <tr>
                  <td>{s.symbol}</td>
                  <td>{s.earningsDate.format("M/D/YYYY")}</td>
                  <td>{s.earningsTime}</td>
                  <td>
                    {s.earningsProximity.startsWith("B") &&
                      <>
                        <ProgressBar
                          now={100}
                          max={100}
                          style={this.getBarStyle(Math.abs(s.earningsChangePct))}
                          variant={s.earningsChange >= 0 ? "success" : "danger"}
                        />
                        <div>
                          {this.getChangeSymbol(s.earningsChange) + s.earningsChangePct + "% "
                            + "(" + this.getChangeSymbol(s.earningsChange) + s.earningsChange + ")"}
                        </div>
                      </>
                    }
                  </td>
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
    const todayStocks = this.state.stocks.filter(s => s.earningsDate.isSame(today, "d"));
    const thisWeekStocks = this.state.stocks.filter(s => s.earningsProximity === "B0" || s.earningsProximity === "A0");
    const nextWeekStocks = this.state.stocks.filter(s => s.earningsProximity === "A1");
    const lastWeekStocks = this.state.stocks.filter(s => s.earningsProximity === "B1");
    const tables = [
      { key: "T1", title: "Today", stocks: todayStocks },
      { key: "T2", title: "This Week", stocks: thisWeekStocks },
      { key: "T3", title: "Next Week", stocks: nextWeekStocks },
      { key: "T4", title: "Last Week", stocks: lastWeekStocks }
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