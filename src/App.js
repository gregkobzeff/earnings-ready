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
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  componentWillMount() {
    //https://zeph.co/google-analytics-react-router
    //https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4
    //https://medium.com/google-cloud/tracking-site-visits-on-react-app-hosted-in-google-cloud-using-google-analytics-f49c2411d398
    this.props.history.listen(() => {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log(window.location.pathname + window.location.search);
    });
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
        <Helmet titleTemplate="Earnings Ready | %s" defaultTitle="Earnings Ready" />
        <NavigationBar props={childProps} />
        <Routes childProps={childProps} />
      </div>
    );

  }

}

export default withRouter(App);

