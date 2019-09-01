import moment from "moment";
import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { getStocks } from "../libs/DataAccess";

export default class SymbolSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      symbols: null
    };
  }

  async componentDidMount() {
    const stocks = getStocks(moment("2000-01-01"), moment("2050-01-01"));
    const symbols = stocks.map(s => s.symbol).sort(s => s.symbol);
    this.setState({
      symbols: symbols
    });
  }

  //called by containers
  clear() {
    this.typeahead.getInstance().clear();
  }

  render() {

    return (
      <>
        {this.state.symbols &&
          <Typeahead
            ref={(typeahead) => this.typeahead = typeahead}
            id="symbolSelector"
            labelKey="symbol"
            multiple={false}
            selectHintOnEnter={true}
            options={this.state.symbols}
            placeholder="Enter a Symbol"
            onChange={this.props.onChange}
            onKeyDown={this.props.onKeyDown}
          />
        }
      </>
    );
  }

}
