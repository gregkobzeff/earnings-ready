import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
import FormCode from "../../components/account/FormCode";
import FormEmail from "../../components/account/FormEmail";
import FormPassword from "../../components/account/FormPassword";
import FormHelpText from "../../components/account/FormHelpText";
import Config from "../../Config";
import "./Account.css";
import "./CompleteResetPassword.css";

export default class CompleteResetPassword extends Component {

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

  validateCode = () => RegExp(Config.REGEX_CONFIRMATION_CODE).test(this.state.code);
  validateEmail = () => RegExp(Config.REGEX_EMAIL_ADDRESS).test(this.state.email);
  validatePassword = () => RegExp(Config.REGEX_PASSWORD).test(this.state.password);
  validateConfirmPassword = () => this.state.confirmPassword === this.state.password && this.state.password.length > 0;
  validateForm = () => this.validateCode() && this.validateEmail() && this.validatePassword() && this.validateConfirmPassword();
  handleChange = event => this.setState({ [event.target.id]: event.target.value });

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleCompleteResetPassword(this.state.email, this.state.code, this.state.password);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
    }
  }

  form = () => {
    return (
      <>
        <h4>Complete Reset Password</h4>
        <Form onSubmit={this.handleSubmit}>
          <FormCode
            id="code"
            value={this.state.code}
            onChange={this.handleChange}
            validate={this.validateCode} />
          <FormEmail
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
            validate={this.validateEmail} />
          <FormPassword
            id="password"
            label="Password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handleChange}
            validate={this.validatePassword} />
          <FormPassword
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Enter Password Again"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            validate={this.validateConfirmPassword} />
          <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
            Complete Reset Password
          </Button>
          <FormHelpText>
            <p>
              After you have successfully reset your password, you will be able to sign in.
            </p>
          </FormHelpText>
        </Form>
      </>
    );
  }

  render() {
    return (
      <div className="account-page complete-reset-password">
        <Helmet>
          <title>Complete Reset Password</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.errorMessage && <Message type="danger" message={this.state.errorMessage} />}
          <this.form />
        </div>
      </div>
    );
  }

}