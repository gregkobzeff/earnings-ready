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
import "./SignIn.css";

export default class SignIn extends Component {

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
      await this.props.account.handleSignIn(this.state.email, this.state.password);
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
        <FormPassword
          id="password"
          label="Password"
          placeholder="Enter Password"
          value={this.state.password}
          onChange={this.handleChange}
          validate={this.validatePassword} />
        <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
          Sign In
        </Button>
        <FormHelpText className="text-muted help-text">
          Unable to sign in? <Link to="/password/reset">Reset Password</Link>
        </FormHelpText>
      </Form>
    );
  }

  render() {
    return (
      <div className="account-page sign-in">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.errorMessage && <Message type="danger" message={this.state.errorMessage} />}
          <h4>Sign In</h4>
          <this.form />
        </div>
      </div>
    );
  }

}