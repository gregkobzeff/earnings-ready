import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { getCalendar } from "../libs/DataAccess";
import StockEarningsTable from "../components/StockEarningsTable";
import "./Calendar.css";

export default class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: null
    };
  }

  async componentDidMount() {
    const stocks = await getCalendar();
    stocks.sort((s1, s2) => s1.earningsDate - s2.earningsDate);
    this.setState({ stocks: stocks });
  }

  renderTables() {
    const todayStocks = this.state.stocks.filter(s => s.earningsProximity.isToday);
    const thisWeekStocks = this.state.stocks.filter(s => s.earningsProximity.isThisWeek);
    const nextWeekStocks = this.state.stocks.filter(s => s.earningsProximity.isNextWeek);
    const lastWeekStocks = this.state.stocks.filter(s => s.earningsProximity.isLastWeek);
    const tables = [
      { key: "T1", title: "Today", stocks: todayStocks },
      { key: "T2", title: "This Week", stocks: thisWeekStocks },
      { key: "T3", title: "Next Week", stocks: nextWeekStocks },
      { key: "T4", title: "Last Week", stocks: lastWeekStocks }
    ];

    return tables.map(t => <StockEarningsTable
      key={t.key}
      infoText=""
      showDetails={false}
      title={t.title}
      hasMultipleStocks={true}
      stocks={t.stocks} />);

  }

  render() {
    return (
      <div className="calendar">
        <Helmet>
          <title>Calendar</title>
        </Helmet>
        {this.state.stocks && this.renderTables()}
      </div>
    );
  }

}