import React from "react";
import { Form } from "react-bootstrap";
import ValidIcon from "./ValidIcon";
import "./FormEmail.css";

export default ({ id, value, onChange, validate, autoFocus = false }) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>
        Email Address {validate() && <ValidIcon />}
      </Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter Email Address"
        value={value}
        autoFocus={autoFocus}
        onChange={onChange} />
    </Form.Group>
  );
}
