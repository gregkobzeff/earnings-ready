import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
import FormPassword from "../../components/account/FormPassword";
import FormHelpText from "../../components/account/FormHelpText";
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
      message: "",
      messageType: ""
    };
  }

  validateOldPassword = () => RegExp(Config.REGEX_PASSWORD).test(this.state.oldPassword);
  validatePassword = () => RegExp(Config.REGEX_PASSWORD).test(this.state.password);
  validateConfirmPassword = () => this.state.confirmPassword === this.state.password && this.state.password.length > 0;
  validateForm = () => this.validateOldPassword() && this.validatePassword() && this.validateConfirmPassword();
  handleChange = event => this.setState({ [event.target.id]: event.target.value });

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ message: "" });
    try {
      await this.props.account.handleChangePassword(this.state.oldPassword, this.state.password);
      const message =
        <>
          Password changed successfully.
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
      <>
        <h4>Change Password</h4>
        <Form onSubmit={this.handleSubmit}>
          <FormPassword
            id="oldPassword"
            label="Current Password"
            placeholder="Enter Current Password"
            value={this.state.oldPassword}
            autoFocus={true}
            onChange={this.handleChange}
            validate={this.validateOldPassword} />
          <FormPassword
            id="password"
            label="New Password"
            placeholder="Enter New Password"
            value={this.state.password}
            onChange={this.handleChange}
            validate={this.validatePassword} />
          <FormPassword
            id="confirmPassword"
            label="Confirm New Password"
            placeholder="Enter New Password Again"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            validate={this.validateConfirmPassword} />
          <Button variant="primary" type="submit" disabled={!this.validateForm()} block>
            Change Password
          </Button>
          <FormHelpText>
            <p>
              After you have successfully changed your password, you will be redirected to the sign in page.
            </p>
          </FormHelpText>
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
          {this.state.message && <Message type={this.state.messageType} message={this.state.message} />}
          <this.form />
        </div>
      </div>
    );
  }

}