import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
import ValidIcon from "../../components/account/ValidIcon";
import Config from "../../Config";
import "./Account.css";
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

  validateEmail() {
    var regex = RegExp(Config.REGEX_EMAIL_ADDRESS);
    return regex.test(this.state.email);
  }

  validateCode() {
    var regex = RegExp(Config.REGEX_CONFIRMATION_CODE);
    return regex.test(this.state.code);
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

  form = () => {
    return (
      <Form onSubmit={this.handleConfirmSignUp}>
        <Form.Group controlId="email">
          <Form.Label>
            Email Address
            {this.validateEmail() && <ValidIcon />}
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
            {this.validateCode() && <ValidIcon />}
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
      <div className="account-page confirm-sign-up">
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.errorMessage && <Message type="danger" message={this.state.errorMessage} />}
          <h4>Confirm Sign Up</h4>
          <this.form />
        </div>
      </div>
    );
  }

}