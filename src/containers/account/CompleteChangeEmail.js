import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/Message";
import FormCode from "../../components/account/FormCode";
import FormHelpText from "../../components/account/FormHelpText";
import Config from "../../Config";
import "./Account.css";
import "./CompleteChangeEmail.css";

export default class CompleteChangeEmail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: "",
      message: "",
      messageType: ""
    };
  }

  validateCode = () => RegExp(Config.REGEX_CONFIRMATION_CODE).test(this.state.code);
  validateForm = () => this.validateCode();
  handleChange = event => this.setState({ [event.target.id]: event.target.value });

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ message: "" });
    try {
      await this.props.account.handleCompleteChangeEmail(this.state.code);
      const message =
        <>
          You have successsfully changed your email address.
          <Link to="/signin">Sign In</Link>
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
        <FormCode
          id="code"
          value={this.state.code}
          autoFocus={true}
          onChange={this.handleChange}
          validate={this.validateCode} />
        <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
          Complete Change Email
        </Button>
        <FormHelpText>
          <p>
            Check your email for the verification code.
            It can take a few minutes for the code to arrive.
            Check your email spam folder if you do not see it in your inbox.
            After you have successfully changed your email, you will be signed out
            and can sign in with your new email address.
          </p>
        </FormHelpText>
      </Form>
    );
  }

  render() {
    return (
      <div className="account-page complete-change-email">
        <Helmet>
          <title>Complete Change Email</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.message && <Message type={this.state.messageType} message={this.state.message} />}
          <h4>Complete Change Email</h4>
          <this.form />
        </div>
      </div>
    );
  }

}