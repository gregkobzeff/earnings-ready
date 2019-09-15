import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
import ValidIcon from "../../components/account/ValidIcon";
import Config from "../../Config";
import "./Account.css";
import "./ConfirmResetPassword.css";

export default class ConfirmResetPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateCode() {
    var regex = RegExp(Config.REGEX_CONFIRMATION_CODE);
    return regex.test(this.state.code);
  }

  validateEmail() {
    var regex = RegExp(Config.REGEX_EMAIL_ADDRESS);
    return regex.test(this.state.email);
  }

  validatePassword() {
    var regex = RegExp(Config.REGEX_PASSWORD);
    return regex.test(this.state.password);
  }

  validateConfirmPassword() {
    return this.state.confirmPassword === this.state.password;
  }

  validateForm() {
    return this.validateCode() && this.validateEmail()
      && this.validatePassword() && this.validateConfirmPassword();
  }

  handleConfirmResetPassword = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleConfirmResetPassword(this.state.email, this.state.code, this.state.password);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
    }
  }

  signUpForm = () => {
    return (
      <>
        <h4>Confirm Reset Password</h4>
        <Form onSubmit={this.handleConfirmResetPassword}>
          <Form.Group controlId="code">
            <Form.Label>
              Confirmation Code {this.validateCode() && <ValidIcon />}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Confirmation Code"
              value={this.state.code}
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>
              Email Address {this.validateEmail() && <ValidIcon />}
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
              Password {this.validatePassword() && <ValidIcon />}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>
              Confirm Password {this.validateConfirmPassword() && <ValidIcon />}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password Again"
              value={this.state.confirmPassword}
              onChange={this.handleChange} />
            <Form.Text className="text-muted help-text">
              <p>
                After you have successfully reset your password, you will be able to sign in.
              </p>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
            Confirm Reset Password
        </Button>
        </Form>
      </>
    );
  }

  render() {
    return (
      <div className="account-page confirm-reset-password">
        <Helmet>
          <title>Confirm Reset Password</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.errorMessage && <Message type="danger" message={this.state.errorMessage} />}
          <this.signUpForm />
        </div>
      </div>
    );
  }

}