import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { ListGroup } from "react-bootstrap";
import "./Account.css";
import "./Settings.css";

export default class Settings extends Component {

  render() {
    return (
      <div className="settings">
        <Helmet>
          <title>Settings</title>
        </Helmet>
        <h3>Settings</h3>
        <ListGroup>
          <ListGroup.Item>
            <Link to="/password/reset">Reset Password</Link> - Reset your password if you want to change it.
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }

}