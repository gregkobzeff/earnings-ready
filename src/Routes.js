import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Trends from "./containers/Trends";
import Calendar from "./containers/Calendar";
import WatchList from "./containers/WatchList";
import EditWatchList from "./containers/EditWatchList";
import HeatMap from "./containers/HeatMap";
import Compare from "./containers/Compare";
import Test from "./containers/Test";
import StockDetails from "./containers/StockDetails";
import EditConnections from "./containers/EditConnections";
import SignIn from "./containers/account/SignIn";
import SignUp from "./containers/account/SignUp";
import ConfirmSignUp from "./containers/account/ConfirmSignUp";
import ResendSignUpCode from "./containers/account/ResendSignUpCode";
import ResetPassword from "./containers/account/ResetPassword";
import ConfirmResetPassword from "./containers/account/ConfirmResetPassword";
import Settings from "./containers/account/Settings";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ appProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} appProps={appProps} />
    <AppliedRoute path="/trends" exact component={Trends} appProps={appProps} />
    <AppliedRoute path="/calendar" exact component={Calendar} appProps={appProps} />
    <AppliedRoute path="/watchlist" exact component={WatchList} appProps={appProps} />
    <AppliedRoute path="/watchlist/edit" exact component={EditWatchList} appProps={appProps} />
    <AppliedRoute path="/heatmap" exact component={HeatMap} appProps={appProps} />
    <AppliedRoute path="/compare" exact component={Compare} appProps={appProps} />
    <AppliedRoute path="/test" exact component={Test} appProps={appProps} />
    <AppliedRoute path="/stocks/:symbol" exact component={StockDetails} appProps={appProps} />
    <AppliedRoute path="/connections/edit" exact component={EditConnections} appProps={appProps} />
    <UnauthenticatedRoute path="/signin" exact component={SignIn} appProps={appProps} />
    <UnauthenticatedRoute path="/signup" exact component={SignUp} appProps={appProps} />
    <UnauthenticatedRoute path="/code/confirm" exact component={ConfirmSignUp} appProps={appProps} />
    <UnauthenticatedRoute path="/code/resend" exact component={ResendSignUpCode} appProps={appProps} />
    <AppliedRoute path="/password/reset" exact component={ResetPassword} appProps={appProps} />
    <AppliedRoute path="/password/reset/confirm" exact component={ConfirmResetPassword} appProps={appProps} />
    <AuthenticatedRoute path="/settings" exact component={Settings} appProps={appProps} />
    <Route component={NotFound} />
  </Switch>
