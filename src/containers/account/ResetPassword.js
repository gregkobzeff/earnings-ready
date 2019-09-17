import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
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
      errorMessage: ""
    };
  }

  validateEmail = () => RegExp(Config.REGEX_EMAIL_ADDRESS).test(this.state.email);
  validateForm = () => this.validateEmail();
  handleChange = event => this.setState({ [event.target.id]: event.target.value });

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleResetPassword(this.state.email);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
    }
  }

  form = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormEmail
          id="email"
          value={this.state.email}
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
          {this.state.errorMessage && <Message type="danger" message={this.state.errorMessage} />}
          <h4>Reset Password</h4>
          <this.form />
        </div>
      </div>
    );
  }

}