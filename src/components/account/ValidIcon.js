import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./ValidIcon.css";

export default () => {
  return (
    <FontAwesomeIcon icon={faCheckCircle} size="1x" className="account-valid-icon" />
  );
}
