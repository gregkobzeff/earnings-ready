import React from "react";
import { Alert } from "react-bootstrap";
import "./Message.css";

export default ({ type, message }) => {
  return (
    <Alert variant={type} className="message">
      <p>
        {message}
      </p>
    </Alert>
  );
}
