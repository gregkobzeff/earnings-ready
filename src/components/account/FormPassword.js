import React from "react";
import { Form } from "react-bootstrap";
import ValidIcon from "./ValidIcon";
import "./FormPassword.css";

export default ({ id, label, placeholder, value, onChange, validate, autoFocus = false }) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>
        {label} {validate() && <ValidIcon />}
      </Form.Label>
      <Form.Control
        type="password"
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange} />
    </Form.Group>
  );
}
