import React from "react";
import { Helmet } from 'react-helmet';
import "./NotFound.css";

export default () =>
  <div className="not-found">
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <h3>Sorry, page not found!</h3>
  </div>;
