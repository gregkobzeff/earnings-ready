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

  //Auth.signIn will throw error is unsuccessful
  handleSignIn = async (email, password) => {
    console.log("Signing in: ", email, password);
    await Auth.signIn(email, password);
    this.setState({ isSignedIn: true });
    this.props.history.push("/");
  }

  handleSignOut = async () => {
    console.log("Signing out");
    await Auth.signOut();
    this.setState({ isSignedIn: false });
    this.props.history.push("/");
  }

  render() {

    const appProps = {
      security: {
        isSignedIn: this.state.isSignedIn,
        handleSignIn: this.handleSignIn,
        handleSignOut: this.handleSignOut
      }
    };

    return (
      <div className="App container">
        <Helmet titleTemplate="%s | Earnings Ready" defaultTitle="Earnings Ready" />
        <NavigationBar security={appProps.security} />
        <Routes appProps={appProps} />
      </div>
    );

  }

}

export default withRouter(App);

