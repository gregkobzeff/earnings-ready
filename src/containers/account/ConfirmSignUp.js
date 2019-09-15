import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from 'react-helmet';
import "./ConfirmSignUp.css";

export default class ConfirmSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      code: "",
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

  validateCode() {
    var regex = /^\d{6}$/;
    const valid = regex.test(this.state.code);
    return valid;
  }

  validateForm() {
    return this.validateEmail() && this.validateCode();
  }

  handleConfirmSignUp = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleConfirmSignUp(this.state.email, this.state.code);
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

  form = () => {
    return (
      <Form onSubmit={this.handleConfirmSignUp}>
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
        <Form.Group controlId="code">
          <Form.Label>
            Confirmation Code
            {this.validateCode() && this.validIcon()}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Confirmation Code"
            value={this.state.code}
            onChange={this.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
          Confirm
        </Button>
        <Form.Text className="text-muted help-text">
          After signing up, you should have received a confirmation code in your your email.
          Please enter your email address and the code and click Confirm to complete the signup process.
          After you have successfully confirmed your email, you will be able to sign in.
        </Form.Text>
      </Form>
    );
  }

  render() {
    return (
      <div className="confirm-sign-up">
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <div className="form-container">
          {this.state.errorMessage && <this.errorMessage />}
          <h4>Confirm Sign Up</h4>
          <this.form />
        </div>
      </div>
    );
  }

}