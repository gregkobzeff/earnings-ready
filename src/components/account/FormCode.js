import React from "react";
import { Form } from "react-bootstrap";
import ValidIcon from "./ValidIcon";
import "./FormCode.css";

export default ({ id, value, onChange, validate }) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>
        Verification Code {validate() && <ValidIcon />}
      </Form.Label>
      <Form.Control
        type="tel"
        placeholder="Enter Verification Code"
        value={value}
        onChange={onChange} />
    </Form.Group>
  );
}
