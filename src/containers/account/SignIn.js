import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import "./SignIn.css";

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleSignIn(this.state.email, this.state.password);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
    }
  }

  errorMessage = () => {
    return (
      <Alert variant="danger">
        <p>
          Incorrect email address or password.
        </p>
      </Alert>
    )
  }

  form = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email Address"
            value={this.state.email}
            onChange={this.handleChange} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
          Sign In
        </Button>
      </Form>
    );
  }

  render() {
    return (
      <div className="sign-in">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <div className="form-container">
          {this.state.errorMessage && <this.errorMessage />}
          <h4>Sign In</h4>
          <this.form />
        </div>
      </div>
    );
  }

}