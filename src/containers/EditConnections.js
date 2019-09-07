import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import { Helmet } from 'react-helmet';
import { getAllSymbolConnections, saveSymbolConnections } from "../libs/DataAccess";
import Utilities from "../libs/Utilities";
import SymbolSelector from "../components/SymbolSelector";
import SymbolEntry from "../components/SymbolEntry";
import SymbolConnections from "../models/SymbolConnections";
import Connection from "../models/Connection";
import "./EditConnections.css";

export default class EditConnections extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editSymbol: "",
      editConnections: "",
      allConnections: null
    };
  }

  loadData() {
    const allConnections = getAllSymbolConnections();
    this.setState({ allConnections: allConnections });
  }

  async componentDidMount() {
    this.loadData();
  }

  handleSymbolSelectorKeyDown = async () => { }

  handleSymbolSelectorChange = async (selected) => {
    const symbol = selected[0];
    if (!symbol) return;
    const symbolConnections = this.state.allConnections.find(c => c.symbol === symbol);
    const editConnections = symbolConnections ?
      Utilities.symbolsToString(symbolConnections.connections.map(c => c.symbol)) : "";
    this.setState({
      editSymbol: symbol,
      editConnections: editConnections
    });
  }

  handleSave = async () => {
    const symbol = this.state.editSymbol;
    if (!symbol) return;
    const connections = Utilities.symbolsToArray(this.state.editConnections).map(s => new Connection(s, null));
    var symbolConnections = new SymbolConnections(symbol, connections);
    saveSymbolConnections(symbolConnections);
    this.loadData();
  }

  handleSymbolEntryChange = async (event) => {
    this.setState({
      editConnections: event.target.value
    });
  }

  renderForm() {

    return (
      <>
        <h5>
          Edit Connections
        </h5>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Symbol:
          </Form.Label>
            <Col sm={2}>
              <SymbolSelector
                placeholder=""
                onChange={this.handleSymbolSelectorChange}
                onKeyDown={this.handleSymbolSelectorKeyDown} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Connections:
          </Form.Label>
            <Col sm={8}>
              <SymbolEntry
                rows="2"
                placeholder="Enter symbols separated by commas (example: AMZN,MSFT)"
                value={this.state.editConnections}
                onChange={this.handleSymbolEntryChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button
                className="save"
                onClick={this.handleSave}>Save</Button>
            </Col>
          </Form.Group>
        </Form>
      </>
    );

  }

  renderNoTable() {
    return (
      <>
        <h5>No existing connections</h5>
      </>
    );
  }

  renderTable() {

    const columns = [];
    columns.push({ dataField: 'key', text: '', hidden: true });
    columns.push({ dataField: 'symbol', text: 'Symbol', sort: true, headerClasses: 'symbol-column' });
    columns.push({ dataField: 'connections', text: 'Connections', sort: false, align: 'left' });

    const data = this.state.allConnections.map((c, i) => {
      const connections = Utilities.symbolsToString(c.connections.map(c => c.symbol));
      return {
        key: i,
        symbol: c.symbol,
        connections: connections
      }
    });

    const defaultSorted = [{ dataField: 'symbol', order: 'asc' }];

    return (
      <>
        <Helmet>
          <title>Edit Connections</title>
        </Helmet>
        <h5>Existing Connections</h5>
        <BootstrapTable
          bootstrap4
          striped
          hover
          condensed
          keyField='key'
          columns={columns}
          data={data}
          defaultSortDirection="asc"
          defaultSorted={defaultSorted} />
      </>
    );

  }

  render() {

    const shouldRenderTable = this.state.allConnections && this.state.allConnections.length > 0;
    const shouldRenderNoTable = this.state.allConnections && this.state.allConnections.length === 0;

    return (
      <div className="edit-connections">
        {this.renderForm()}
        <div className="results">
          {shouldRenderTable && this.renderTable()}
          {shouldRenderNoTable && this.renderNoTable()}
        </div>
      </div>
    );

  }

}