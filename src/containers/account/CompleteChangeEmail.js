import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import Message from "../../components/account/Message";
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
      errorMessage: ""
    };
  }

  validateCode = () => RegExp(Config.REGEX_CONFIRMATION_CODE).test(this.state.code);
  validateForm = () => this.validateCode();
  handleChange = event => this.setState({ [event.target.id]: event.target.value });

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await this.props.account.handleCompleteChangeEmail(this.state.code);
    }
    catch (e) {
      this.setState({ errorMessage: e.message });
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
          {this.state.errorMessage && <Message type="danger" message={this.state.errorMessage} />}
          <h4>Complete Change Email</h4>
          <this.form />
        </div>
      </div>
    );
  }

}