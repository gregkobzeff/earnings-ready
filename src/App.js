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
      isSignedIn: false
    };
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  handleSignUp = async (email, password) => {
    console.log("Signing up: ", email, password);
    const newUser = await Auth.signUp({ username: email, password: password });
    console.log("New User: ", newUser);
    this.props.history.push("/code/confirm");
  }

  handleConfirmSignUp = async (email, code) => {
    console.log("Confirming Sign up: ", email, code);
    await Auth.confirmSignUp(email, code);
    this.props.history.push("/signin");
  }

  handleResendSignUpCode = async (email) => {
    console.log("Resending Signing up code: ", email);
    await Auth.resendSignUp(email);
    this.props.history.push("/code/confirm");
  }

  handleResetPassword = async (email) => {
    console.log("Confirming reset password: ", email);
    await Auth.forgotPassword(email);
    this.props.history.push("/password/reset/confirm");
  }

  handleConfirmResetPassword = async (email, code, password) => {
    console.log("Confirming reset password: ", email, code, password);
    await Auth.forgotPasswordSubmit(email, code, password);
    await Auth.signOut();
    this.setState({ isSignedIn: false }, () => {
      this.props.history.push("/signin");
    });
  }

  //Auth.signIn will throw error is unsuccessful
  handleSignIn = async (email, password) => {
    console.log("Signing in: ", email, password);
    await Auth.signIn(email, password);
    this.setState({ isSignedIn: true }, () => {
      this.props.history.push("/");
    });
  }

  handleSignOut = async () => {
    console.log("Signing out");
    await Auth.signOut();
    this.setState({ isSignedIn: false }, () => {
      this.props.history.push("/");
    });
  }

  render() {

    const appProps = {
      account: {
        isSignedIn: this.state.isSignedIn,
        handleSignUp: this.handleSignUp,
        handleConfirmSignUp: this.handleConfirmSignUp,
        handleResendSignUpCode: this.handleResendSignUpCode,
        handleResetPassword: this.handleResetPassword,
        handleConfirmResetPassword: this.handleConfirmResetPassword,
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

