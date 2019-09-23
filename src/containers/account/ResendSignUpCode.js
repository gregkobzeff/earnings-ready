import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
import FormEmail from "../../components/account/FormEmail";
import FormHelpText from "../../components/account/FormHelpText";
import Config from "../../Config";
import "./Account.css";
import "./ResendSignUpCode.css";

export default class ResendSignUpCode extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      messageType: ""
    };
  }

  validateEmail = () => RegExp(Config.REGEX_EMAIL_ADDRESS).test(this.state.email);
  validateForm = () => this.validateEmail();
  handleChange = event => this.setState({ [event.target.id]: event.target.value });

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ message: "" });
    try {
      await this.props.account.handleResendSignUpCode(this.state.email);
      const message =
        <>
          A verification code has been sent to your email address.
          <Link to="/signup/complete">Enter Code</Link>
        </>
      this.setState({ message: message, messageType: "success" });
    }
    catch (e) {
      this.setState({ message: e.message, messageType: "danger" });
    }
  }

  form = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormEmail
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
          autoFocus={true}
          validate={this.validateEmail} />
        <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
          Resend Code
        </Button>
        <FormHelpText>
          It can take a few minutes for the code to arrive.
          Check your email spam folder if you do not see it in your inbox.
        </FormHelpText>
      </Form>
    );
  }

  render() {
    return (
      <div className="account-page resend-sign-up-code">
        <Helmet>
          <title>Resend Verification Code</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.message && <Message type={this.state.messageType} message={this.state.message} />}
          <h4>Resend Verification Code</h4>
          <this.form />
        </div>
      </div>
    );
  }

}