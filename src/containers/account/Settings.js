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

        <section>
          <h4>Lists</h4>
          <ListGroup>
            <ListGroup.Item>
              <Link to="/watchlist/edit">Edit Watchlist</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/connections/edit">Edit Connections</Link>
            </ListGroup.Item>
          </ListGroup>
        </section>

        <section>
          <h4>Account</h4>
          <ListGroup>
            <ListGroup.Item>
              <Link to="/email/change">Change Email Address</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/password/change">Change Password</Link>
            </ListGroup.Item>
          </ListGroup>
        </section>

      </div>
    );
  }

}