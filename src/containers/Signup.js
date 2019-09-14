import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from 'react-helmet';
import "./SignUp.css";

export default class SignUp extends Component {

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

  validIcon() {
    return (
      <FontAwesomeIcon icon={faCheckCircle} size="1x" className="valid-icon" />
    );
  }

  validateEmail() {
    var regex = /\S+@\S+\.\S+/;
    const valid = regex.test(this.state.email);
    return valid;
  }

  validatePassword() {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z ]{8,}$/;
    const valid = regex.test(this.state.password);
    return valid;
  }

  validateForm() {
    return this.validateEmail() && this.validatePassword();
  }

  handleSignUp = async event => {
    event.preventDefault();
    try {
      await this.props.security.handleSignUp(this.state.email, this.state.password);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
    }
  }

  errorMessage = () => {
    return (
      <Alert variant="danger">
        <p>
          {this.state.errorMessage}
        </p>
      </Alert>
    )
  }

  signUpForm = () => {
    return (
      <>
        <h4>Sign Up</h4>
        <Form onSubmit={this.handleSignUp}>
          <Form.Group controlId="email">
            <Form.Label>
              Email Address
            {this.validateEmail() && this.validIcon()}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
              value={this.state.email}
              onChange={this.handleChange}
              autoFocus />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>
              Password
            {this.validatePassword() && this.validIcon()}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange} />
            <Form.Text className="text-muted">
              Password must be at least 8 characters in length and contain at
              least one uppercase letter, one lowercase letter, and one number.
          </Form.Text>
            <Form.Text className="text-muted">
              Do you already have a confirmation code?
              <Link to="/confirm" className="confirm">Enter Code</Link>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
            Sign Up
        </Button>
        </Form>
      </>
    );
  }

  render() {
    return (
      <div className="sign-up">
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <div className="form-container">
          {this.state.errorMessage && <this.errorMessage />}
          <this.signUpForm />
        </div>
      </div>
    );
  }

}