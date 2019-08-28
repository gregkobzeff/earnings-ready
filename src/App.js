import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
        <NavigationBar props={childProps} />
        <Routes childProps={childProps} />
      </div>
    );

  }

}

export default withRouter(App);

