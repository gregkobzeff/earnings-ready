import React, { Component } from "react";
import { Container, Row, Col, Popover, OverlayTrigger } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import * as moment from "moment";
import { getStocks } from '../libs/DataAccess';
import { getEarningsProximity } from '../libs/EarningsCalculator';
import "./HeatMap.css";

export default class HeatMap extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.stocks = getStocks();
  }

  createElement(stock, index) {

    const proximity = getEarningsProximity(stock); //returns B1, B0, A0, A1

    let bgColor;
    switch (proximity) {
      case "B1": bgColor = "#FF8D75"; break;
      case "B0": bgColor = "#FF2D00"; break;
      case "A0": bgColor = "#27B600"; break;
      case "A1": bgColor = "#83BD73"; break;
      default: bgColor = "#FFF";
    }

    const itemStyle = { 'backgroundColor': bgColor };
    const lastFontWeight = (proximity === "B1" || proximity === "B0") ? "bold" : "normal";
    const nextFontWeight = (proximity === "A0" || proximity === "A1") ? "bold" : "normal";
    const lastStyle = { 'fontWeight': lastFontWeight };
    const nextStyle = { 'fontWeight': nextFontWeight };

    const lastText = `${moment(stock.lastEarningsDate).format("MM/DD/YYYY")} ${stock.lastEarningsTime}`;
    const nextText = `${moment(stock.nextEarningsDate).format("MM/DD/YYYY")} ${stock.nextEarningsTime}`;

    const overlay =
      <Popover className="heatmap-item-popover">
        <Popover.Content>
          <div style={lastStyle}>Last: {lastText}</div>
          <div style={nextStyle}>Next: {nextText}</div>
        </Popover.Content>
      </Popover>

    return (
      <OverlayTrigger
        key={index}
        trigger="hover"
        placement="top"
        overlay={overlay}
      >
        <LinkContainer
          to={`/stocks/${stock.symbol}`}
          className="heatmap-item"
          style={itemStyle}>
          <Col>{stock.symbol}</Col>
        </LinkContainer>
      </OverlayTrigger>
    )

  }

  render() {
    return (
      <div className="heat-map">
        <Container>
          <Row>
            {this.stocks.map((stock, i) => this.createElement(stock, i))}
          </Row>
        </Container>
      </div>
    );
  }

}