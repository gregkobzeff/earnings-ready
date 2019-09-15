import React from "react";
import { Alert } from "react-bootstrap";

export default ({ type, message }) => {
  return (
    <Alert variant={type} className="account-message">
      <p>
        {message}
      </p>
    </Alert>
  );
}
