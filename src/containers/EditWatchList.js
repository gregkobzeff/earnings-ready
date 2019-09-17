import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import { getWatchList, saveWatchList } from "../libs/DataAccess";
import Utilities from "../libs/Utilities";
import SymbolEntry from "../components/SymbolEntry";
import "./EditWatchList.css";

export default class EditWatchList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      symbols: "",
    };
  }

  async componentDidMount() {
    const symbols = Utilities.symbolsToString(getWatchList().map(s => s.symbol));
    this.setState({ symbols: symbols });
  }

  handleChange = event => {
    this.setState({
      symbols: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const symbols = Utilities.symbolsToArray(this.state.symbols);
    saveWatchList(symbols);
  }

  render() {

    const placeholder = "Enter symbols separated by commas (example: AMZN,MSFT). " +
      "To empty your WatchList, remove all symbols from the text input below.";

    return (
      <div className="edit-watch-list">
        <Helmet>
          <title>Edit WatchList</title>
        </Helmet>
        <h5>Edit WatchList</h5>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Text className="text-muted">
              {placeholder}
            </Form.Text>
            <SymbolEntry
              rows="3"
              placeholder="Enter symbols here"
              value={this.state.symbols}
              onChange={this.handleChange} />
          </Form.Group>
          <div className="text-center">
            <Button onClick={this.handleSubmit}>Save</Button>
          </div>
        </Form>
      </div>
    );
  }

}