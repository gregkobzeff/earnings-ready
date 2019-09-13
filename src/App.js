import React, { Component } from "react";
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
      isAuthenticated: false,
      isAuthenticating: false
    };
  }

  componentDidMount() {
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

