import moment from "moment";
import React, { Component } from "react";
import { getStocks } from "../libs/DataAccess";
import StockEarningsHistoryTable from "../components/StockEarningsHistoryTable";
import "./Calendar.css";

export default class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: null
    };
  }

  async componentDidMount() {
    //const thisWeekStart = moment().clone().startOf("week");
    const lastWeekStart = moment().clone().subtract(1, "week").startOf("week");
    const nextWeekEnd = moment().clone().add(1, "week").endOf("week");
    const stocks = getStocks(lastWeekStart, nextWeekEnd);
    stocks.sort((s1, s2) => s1.earningsDate - s2.earningsDate);
    this.setState({ stocks: stocks });
  }

  renderTables() {
    const today = moment().startOf("day");
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

    return tables.map(t => <StockEarningsHistoryTable key={t.key}
      title={t.title} hasMultipleStocks={true} hasPastEarningsOnly={false} history={t.stocks} />);

  }

  render() {
    return (
      <div className="calendar">
        {this.state.stocks && this.renderTables()}
      </div>
    );
  }

}