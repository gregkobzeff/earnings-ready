import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class SymbolEntry extends Component {

  render() {

    var props = this.props.rows > 1 ? { as: 'textarea', rows: this.props.rows } : {};

    return (
      <Form.Control
        {...props}
        type="text"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange} />
    )

  }

}