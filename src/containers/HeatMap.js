import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { getStocks } from '../libs/DataAccess';
import * as moment from "moment";
import "./HeatMap.css";

export default class HeatMap extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.stocks = getStocks();
  }

  getItemStyle(stock) {

    const now = moment();
    const thisWeekStart = now.clone().startOf('week');
    const lastWeekStart = thisWeekStart.clone().subtract(1, 'week');
    const nextWeekStart = thisWeekStart.clone().add(1, 'week');
    const twoWeeksStart = thisWeekStart.clone().add(2, 'week');
    const last = moment(stock.lastEarningsDate);
    const next = moment(stock.nextEarningsDate);
    let bgColor = "#FFF";

    //reported last week
    if (last.isSameOrAfter(lastWeekStart) && last.isBefore(thisWeekStart)) bgColor = "#FF8D75";
    //this week - already reported
    if (last.isSameOrAfter(thisWeekStart) && last.isBefore(now)) bgColor = "#FF2D00"
    //this week - not reported yet
    if (next.isSameOrAfter(now) && next.isBefore(nextWeekStart)) bgColor = "#27B600";
    //reports next week
    if (next.isSameOrAfter(nextWeekStart) && next.isBefore(twoWeeksStart)) bgColor = "#83BD73";

    const style = {'backgroundColor': bgColor};
    return style;
  }

  render() {

    return (
      <div className="heat-map">
      <Container>
        <Row>
        {
          this.stocks.map((stock, i) => 
          <LinkContainer 
            key={i} 
            to={`/stocks/${stock.symbol}`} 
            className="heatmap-item" 
            style={this.getItemStyle(stock)}>
              <Col>{stock.symbol}</Col>
          </LinkContainer>)
        }
        </Row>
      </Container>
      </div>
    );
  }

}