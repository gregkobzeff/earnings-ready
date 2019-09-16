import React from "react";
import { Form } from "react-bootstrap";
import "./FormHelpText.css";

export default (props) => {
  return (
    <Form.Text className="text-muted form-help-text">
      {props.children}
    </Form.Text>
  );
}
