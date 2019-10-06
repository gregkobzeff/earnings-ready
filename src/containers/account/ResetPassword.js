import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/Message";
import FormEmail from "../../components/account/FormEmail";
import FormHelpText from "../../components/account/FormHelpText";
import Config from "../../Config";
import "./Account.css";
import "./ResetPassword.css";

export default class ResetPassword extends Component {

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
      await this.props.account.handleResetPassword(this.state.email);
      const message =
        <>
          A verification code has been sent to your email address.
        <Link to="/password/reset/complete">Enter Code</Link>
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
          autoFocus={true}
          onChange={this.handleChange}
          validate={this.validateEmail} />
        <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
          Reset Password
        </Button>
        <FormHelpText>
          <p>
            A verification code will be sent to your email address.
            It can take a few minutes for the code to arrive.
            Check your email spam folder if you do not see it in your inbox.
          </p>
          <p>
            Do you have a verification code?
            <Link to="/password/reset/complete">Complete Password Reset</Link>
          </p>
        </FormHelpText>
      </Form>
    );
  }

  render() {
    return (
      <div className="account-page reset-password">
        <Helmet>
          <title>Reset Password</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.message && <Message type={this.state.messageType} message={this.state.message} />}
          <h4>Reset Password</h4>
          <this.form />
        </div>
      </div>
    );
  }

}