import React from "react";
import { Row, Col } from "react-bootstrap";
import Utilities from "../libs/Utilities";
import "./StockDetailsHeader.css";

export default props =>
  <section className="stock-details-header">
    <Row>
      <Col md={3}>Company</Col>
      <Col md={6}>{props.stock.symbol} - {props.stock.companyName}</Col>
    </Row>
    <Row>
      <Col md={3}>Next Earnings Date</Col>
      <Col md={6}>{props.stock.nextEarningsDate.format("M/D/YYYY")} {props.stock.nextEarningsTime}</Col>
    </Row>
    <Row>
      <Col md={3}>Next Earnings Consensus EPS</Col>
      <Col md={6}>{Utilities.formatCurrency(props.stock.nextEarningsConsensusEPS)}</Col>
    </Row>
  </section>;
