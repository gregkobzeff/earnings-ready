import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class SymbolEntry extends Component {

  render() {

    var props = this.props.rows > 1 ? { as: 'textarea', rows: this.props.rows } : {};

    return (
      <Form.Control
        {...props}
        onChange={this.props.onChange}
        type="text"
        placeholder={this.props.placeholder} />
    )

  }

}