import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
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

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm() {
    return this.state.email.length > 0;
  }

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
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email Address"
            value={this.state.email}
            onChange={this.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
          Reset Password
        </Button>
        <Form.Text className="text-muted help-text">
          A confirmation code will be sent to your email address.
          It can take a few minutes for the code to arrive.
          Check your email spam folder if you do not receive it.
        </Form.Text>
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