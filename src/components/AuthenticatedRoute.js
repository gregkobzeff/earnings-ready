import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: C, appProps, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        appProps.security.isSignedIn
          ? <C {...props} {...appProps} />
          : <Redirect
            to={`/login?redirect=${props.location.pathname}${props.location.search}`}
          />}
    />
  );
};
