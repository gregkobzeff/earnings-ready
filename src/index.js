import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from 'react-ga'
import * as serviceWorker from "./serviceWorker";
import Amplify from "aws-amplify";
import Config from "./Config"
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import App from "./App";

console.log("Tracking ID: ", Config.GA_Tracking_ID);
ReactGA.initialize(Config.GA_Tracking_ID, { debug: false });

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: Config.cognito.REGION,
    userPoolId: Config.cognito.USER_POOL_ID,
    identityPoolId: Config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: Config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: "api",
        endpoint: Config.apiGateway.URL,
        region: Config.apiGateway.REGION
      },
    ]
  }
});

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
