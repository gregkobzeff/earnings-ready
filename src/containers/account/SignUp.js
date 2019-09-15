import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
import ValidIcon from "../../components/account/ValidIcon";
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

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateEmail() {
    var regex = RegExp(Config.REGEX_EMAIL_ADDRESS);
    return regex.test(this.state.email);
  }

  validatePassword() {
    var regex = RegExp(Config.REGEX_PASSWORD);
    return regex.test(this.state.password);
  }

  validateForm() {
    return this.validateEmail() && this.validatePassword();
  }

  handleSignUp = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleSignUp(this.state.email, this.state.password);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
    }
  }

  signUpForm = () => {
    return (
      <>
        <h4>Sign Up</h4>
        <Form onSubmit={this.handleSignUp}>
          <Form.Group controlId="email">
            <Form.Label>
              Email Address
            {this.validateEmail() && <ValidIcon />}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
              value={this.state.email}
              onChange={this.handleChange}
              autoFocus />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>
              Password
            {this.validatePassword() && <ValidIcon />}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange} />
            <Form.Text className="text-muted">
              Password must be at least 8 characters in length and contain at
              least one uppercase letter, one lowercase letter, and one number.
          </Form.Text>
            <Form.Text className="text-muted">
              Do you already have a confirmation code?
              <Link to="/code/confirm" className="confirm">Enter Code</Link>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
            Sign Up
        </Button>
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
          <this.signUpForm />
        </div>
      </div>
    );
  }

}