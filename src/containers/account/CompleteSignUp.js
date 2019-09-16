import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
import FormCode from "../../components/account/FormCode";
import FormEmail from "../../components/account/FormEmail";
import FormHelpText from "../../components/account/FormHelpText";
import Config from "../../Config";
import "./Account.css";
import "./CompleteSignUp.css";

export default class CompleteSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      code: "",
      errorMessage: ""
    };
  }

  validateEmail = () => RegExp(Config.REGEX_EMAIL_ADDRESS).test(this.state.email);
  validateCode = () => RegExp(Config.REGEX_CONFIRMATION_CODE).test(this.state.code);
  validateForm = () => this.validateEmail() && this.validateCode();

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleCompleteSignUp = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleCompleteSignUp(this.state.email, this.state.code);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
    }
  }

  form = () => {
    return (
      <Form onSubmit={this.handleCompleteSignUp}>
        <FormEmail
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
          validate={this.validateEmail} />
        <FormCode
          id="code"
          value={this.state.code}
          onChange={this.handleChange}
          validate={this.validateCode} />
        <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
          Complete Sign Up
        </Button>
        <FormHelpText>
          <p>
            It can take a few minutes for the code to arrive.
            Check your email spam folder if you do not receive it.
            After you have successfully verified your email, you will be able to sign in.
          </p>
          <p>
            Did not receive verification code?
            <Link to="/code/resend">Resend Code</Link>
          </p>
        </FormHelpText>
      </Form>
    );
  }

  render() {
    return (
      <div className="account-page complete-sign-up">
        <Helmet>
          <title>Complete Sign Up</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.errorMessage && <Message type="danger" message={this.state.errorMessage} />}
          <h4>Complete Sign Up</h4>
          <this.form />
        </div>
      </div>
    );
  }

}