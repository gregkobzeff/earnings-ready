import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
import ValidIcon from "../../components/account/ValidIcon";
import Config from "../../Config";
import "./Account.css";
import "./ChangePassword.css";

export default class ChangePassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      password: "",
      confirmPassword: "",
      errorMessage: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateOldPassword() {
    return RegExp(Config.REGEX_PASSWORD).test(this.state.oldPassword);
  }

  validatePassword() {
    return RegExp(Config.REGEX_PASSWORD).test(this.state.password);
  }

  validateConfirmPassword() {
    return this.state.confirmPassword === this.state.password && this.state.password.length > 0;
  }

  validateForm() {
    return this.validateOldPassword() && this.validatePassword() && this.validateConfirmPassword();
  }

  handleChangePassword = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleChangePassword(this.state.oldPassword, this.state.password);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
    }
  }

  form = () => {
    return (
      <>
        <h4>Change Password</h4>
        <Form onSubmit={this.handleChangePassword}>
          <Form.Group controlId="oldPassword">
            <Form.Label>
              Current Password {this.validateOldPassword() && <ValidIcon />}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Current Password"
              value={this.state.oldPassword}
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>
              New Password {this.validatePassword() && <ValidIcon />}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter New Password"
              value={this.state.password}
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>
              Confirm New Password {this.validateConfirmPassword() && <ValidIcon />}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter New Password Again"
              value={this.state.confirmPassword}
              onChange={this.handleChange} />
            <Form.Text className="text-muted help-text">
              <p>
                After you have successfully changed your password, you will be redirected to the sign in page.
              </p>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
            Change Password
        </Button>
        </Form>
      </>
    );
  }

  render() {
    return (
      <div className="account-page change-password">
        <Helmet>
          <title>Change Password</title>
        </Helmet>
        <div className="account-form-container">
          {this.state.errorMessage && <Message type="danger" message={this.state.errorMessage} />}
          <this.form />
        </div>
      </div>
    );
  }

}