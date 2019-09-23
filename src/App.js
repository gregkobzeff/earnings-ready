import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet';
import NavigationBar from "./components/NavigationBar"
import Routes from "./Routes";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);

    props.history.listen(() => {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log("pageview:", window.location.pathname + window.location.search);
    });

    this.state = {
      isSignedIn: false,
      user: null
    };
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  handleSignUp = async (email, password) => {
    console.log("Signing up: ", email, password);
    const newUser = await Auth.signUp({ username: email, password: password });
    console.log("New User: ", newUser);
  }

  handleCompleteSignUp = async (email, code) => {
    console.log("Completing Sign up: ", email, code);
    await Auth.confirmSignUp(email, code);
  }

  handleResendSignUpCode = async (email) => {
    console.log("Resending Signing up code: ", email);
    await Auth.resendSignUp(email);
  }

  handleResetPassword = async (email) => {
    console.log("Completing reset password: ", email);
    await Auth.forgotPassword(email);
  }

  handleCompleteResetPassword = async (email, code, password) => {
    console.log("Completing reset password: ", email, code, password);
    await Auth.forgotPasswordSubmit(email, code, password);
  }

  handleChangeEmail = async (email) => {
    console.log("changing email: ", email);
    await Auth.updateUserAttributes(this.state.user, { email: email });
  }

  handleCompleteChangeEmail = async (code) => {
    console.log("completing changing email: ", code);
    await Auth.verifyCurrentUserAttributeSubmit("email", code);
    await Auth.signOut();
    this.setState({ isSignedIn: false, user: null });
  }

  handleChangePassword = async (oldPassword, password) => {
    console.log("changing password: ", oldPassword, password);
    const currentUser = await Auth.currentAuthenticatedUser();
    await Auth.changePassword(currentUser, oldPassword, password);
    await Auth.signOut();
    this.setState({ isSignedIn: false, user: null });
  }

  handleSignIn = async (email, password) => {
    console.log("Signing in: ", email, password);
    const user = await Auth.signIn(email, password);
    console.log("Signed in user: ", user);
    this.setState({ isSignedIn: true, user: user }, () => {
      this.props.history.push("/");
    });
  }

  handleSignOut = async () => {
    console.log("Signing out");
    await Auth.signOut();
    this.setState({ isSignedIn: false, user: null }, () => {
      this.props.history.push("/");
    });
  }

  render() {

    const appProps = {
      account: {
        isSignedIn: this.state.isSignedIn,
        user: this.state.user,
        handleSignUp: this.handleSignUp,
        handleCompleteSignUp: this.handleCompleteSignUp,
        handleResendSignUpCode: this.handleResendSignUpCode,
        handleResetPassword: this.handleResetPassword,
        handleCompleteResetPassword: this.handleCompleteResetPassword,
        handleChangeEmail: this.handleChangeEmail,
        handleCompleteChangeEmail: this.handleCompleteChangeEmail,
        handleChangePassword: this.handleChangePassword,
        handleSignIn: this.handleSignIn,
        handleSignOut: this.handleSignOut
      }
    };

    return (
      <div className="App container">
        <Helmet titleTemplate="%s | Earnings Ready" defaultTitle="Earnings Ready" />
        <NavigationBar account={appProps.account} />
        <Routes appProps={appProps} />
      </div>
    );

  }

}

export default withRouter(App);

