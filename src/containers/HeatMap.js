import moment from "moment";
import React, { Component } from "react";
import { Container, Row, Col, Popover, OverlayTrigger } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { getStocks } from "../libs/DataAccess";
import "./HeatMap.css";

export default class HeatMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: null
    };
  }

  async componentDidMount() {
    const stocks = getStocks(moment("2000-01-01"), moment("2050-01-01"));
    this.setState({
      stocks: stocks
    });
  }

  createElement(stock, index) {

    let bgColor;
    switch (stock.earningsProximity) {
      case "B1": bgColor = "#FF8D75"; break;
      case "B0": bgColor = "#FF2D00"; break;
      case "A0": bgColor = "#27B600"; break;
      case "A1": bgColor = "#83BD73"; break;
      default: bgColor = "#FFF";
    }

    const itemStyle = { "backgroundColor": bgColor };
    const lastFontWeight = (["B1", "B0"].includes(stock.earningsProximity)) ? "bold" : "normal";
    const nextFontWeight = (["A0", "A1"].includes(stock.earningsProximity)) ? "bold" : "normal";
    const lastStyle = { "fontWeight": lastFontWeight };
    const nextStyle = { "fontWeight": nextFontWeight };

    const lastText = `${moment(stock.lastEarningsDate).format("MM/DD/YYYY")} ${stock.lastEarningsTime}`;
    const nextText = `${moment(stock.nextEarningsDate).format("MM/DD/YYYY")} ${stock.nextEarningsTime}`;

    const popover =
      <Popover className="heatmap-item-popover">
        <Popover.Content>
          <div>{stock.companyName}</div>
          <div style={lastStyle}>Last: {lastText}</div>
          <div style={nextStyle}>Next: {nextText}</div>
        </Popover.Content>
      </Popover>

    const linkContainer =
      <LinkContainer
        to={`/stocks/${stock.symbol}`}
        className="heatmap-item"
        style={itemStyle}>
        <Col>{stock.symbol}</Col>
      </LinkContainer>

    return (
      <OverlayTrigger
        key={index}
        trigger="hover"
        placement="top"
        overlay={popover}
      >
        {linkContainer}
      </OverlayTrigger>
    )

  }

  render() {
    return (
      <div className="heat-map">
        {this.state.stocks &&
          <Container>
            <Row>
              {this.state.stocks.map((stock, i) => this.createElement(stock, i))}
            </Row>
          </Container>
        }
      </div>
    );
  }

}