import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
import FormEmail from "../../components/account/FormEmail";
import FormPassword from "../../components/account/FormPassword";
import FormHelpText from "../../components/account/FormHelpText";
import Config from "../../Config";
import "./Account.css";
import "./SignUp.css";

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  validateEmail = () => RegExp(Config.REGEX_EMAIL_ADDRESS).test(this.state.email);
  validatePassword = () => RegExp(Config.REGEX_PASSWORD).test(this.state.password);
  validateForm = () => this.validateEmail() && this.validatePassword();
  handleChange = event => this.setState({ [event.target.id]: event.target.value });

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleSignUp(this.state.email, this.state.password);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
    }
  }

  form = () => {
    return (
      <>
        <h4>Sign Up</h4>
        <Form onSubmit={this.handleSubmit}>
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
          <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
            Sign Up
          </Button>
          <FormHelpText>
            <p>
              Password must be at least 8 characters in length and contain at
              least one uppercase letter, one lowercase letter, and one number.
              After signing up, a verification code will be sent to your email address.
              </p>
            <p>
              Do you have a verification code?
                <Link to="/signup/complete">Enter Code</Link>
            </p>
            <p>
              Did you sign up and not receive a verification code?
                <Link to="/signup/resend">Resend Code</Link>
            </p>
          </FormHelpText>
        </Form>
      </>
    );
  }

  render() {
    return (
      <div className="account-page sign-up">
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.errorMessage && <Message type="danger" message={this.state.errorMessage} />}
          <this.form />
        </div>
      </div>
    );
  }

}