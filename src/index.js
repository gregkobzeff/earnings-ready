import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from 'react-ga'
import * as serviceWorker from "./serviceWorker";
import Config from "./Config"
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import App from "./App";

//https://zeph.co/google-analytics-react-router
ReactGA.initialize(Config.GA_Tracking_ID, { debug: false });

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
