import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet';
import Config from "./Config"
import NavigationBar from "./components/NavigationBar"
import Routes from "./Routes";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  componentWillMount() {
    this.props.history.listen(() => {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log("pageview:", window.location.pathname + window.location.search);
    });
  }

  componentDidMount() {
    ReactGA.initialize(Config.GA_Tracking_ID, { debug: false });
    console.log("GA Tracking ID: ", Config.GA_Tracking_ID);
    ReactGA.pageview(window.location.pathname);
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
        <Helmet titleTemplate="%s | Earnings Ready" defaultTitle="Earnings Ready" />
        <NavigationBar props={childProps} />
        <Routes childProps={childProps} />
      </div>
    );

  }

}

export default withRouter(App);

