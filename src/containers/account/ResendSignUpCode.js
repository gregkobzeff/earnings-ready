import React, { Component } from "react";
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
      errorMessage: ""
    };
  }

  validateEmail = () => RegExp(Config.REGEX_EMAIL_ADDRESS).test(this.state.email);
  validateForm = () => this.validateEmail();

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleResendSignUpCode = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleResendSignUpCode(this.state.email);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
    }
  }

  form = () => {
    return (
      <Form onSubmit={this.handleResendSignUpCode}>
        <FormEmail
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
          validate={this.validateEmail} />
        <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
          Resend Code
        </Button>
        <FormHelpText>
          It can take a few minutes for the code to arrive.
          Check your email spam folder if you do not receive it.
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
          {this.state.errorMessage && <Message type="danger" message={this.state.errorMessage} />}
          <h4>Resend Verification Code</h4>
          <this.form />
        </div>
      </div>
    );
  }

}