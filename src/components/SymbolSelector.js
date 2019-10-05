import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { getSymbols } from "../libs/DataAccess";

export default class SymbolSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      symbols: null
    };
  }

  async componentDidMount() {
    const symbols = await getSymbols();
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
