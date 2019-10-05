import React, { Component } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga'
import { getEarnings } from "../libs/DataAccess";
import Utilities from "../libs/Utilities";
import SymbolEntry from "../components/SymbolEntry";
import StockEarningsTable from "../components/StockEarningsTable";
import "./Compare.css";

export default class Compare extends Component {

  constructor(props) {
    super(props);
    this.state = {
      symbols: "",
      stocks: null
    };
  }

  renderForm() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup>
          <InputGroup.Prepend>
            <Button onClick={this.handleSearch}>Compare</Button>
          </InputGroup.Prepend>
          <SymbolEntry
            rows="1"
            placeholder="Enter symbols separated by commas (example: AMZN,MSFT)"
            value={this.state.symbols}
            onChange={this.handleChange} />
        </InputGroup>
      </Form>
    );
  }

  renderTable() {
    return (
      <StockEarningsTable
        title=""
        infoText=""
        showDetails={false}
        hasMultipleStocks={true}
        stocks={this.state.stocks} />
    );
  }

  handleChange = event => {
    this.setState({
      symbols: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.handleSearch(event);
  }

  handleSearch = async event => {
    event.preventDefault();
    if (!this.state.symbols) return;
    const symbols = Utilities.symbolsToArray(this.state.symbols);
    const stocks = await getEarnings(symbols);
    this.setState({ stocks: stocks });
    ReactGA.event({
      category: 'View',
      action: 'Compared stocks'
    });
  }

  render() {
    return (
      <div className="compare">
        <Helmet>
          <title>Compare</title>
        </Helmet>
        {this.renderForm()}
        {this.state.stocks && this.renderTable()}
      </div>
    );
  }

}