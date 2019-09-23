import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
import FormEmail from "../../components/account/FormEmail";
import FormHelpText from "../../components/account/FormHelpText";
import Config from "../../Config";
import "./Account.css";
import "./ChangeEmail.css";

export default class ChangeEmail extends Component {

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
      await this.props.account.handleChangeEmail(this.state.email);
      const message =
        <>
          A verification code has been sent to your email address.
          <Link to="/email/change/complete">Enter Code</Link>
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
          Change Email
        </Button>
        <FormHelpText className="text-muted help-text">
          <p>
            Enter your new email address and click Change Email.
            A verification code will be sent to your new email address.
            It can take a few minutes for the code to arrive.
            Check your email spam folder if you do not see it in your inbox.
          </p>
          <p>
            Do you already have a verification code?
            <Link to="/email/change/complete">Enter Code</Link>
          </p>
        </FormHelpText>
      </Form>
    );
  }

  render() {
    return (
      <div className="account-page change-email">
        <Helmet>
          <title>Change Email Address</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.message && <Message type={this.state.messageType} message={this.state.message} />}
          <h4>Change Email Address</h4>
          <this.form />
        </div>
      </div>
    );
  }

}