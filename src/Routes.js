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
import CompleteSignUp from "./containers/account/CompleteSignUp";
import ResendSignUpCode from "./containers/account/ResendSignUpCode";
import ResetPassword from "./containers/account/ResetPassword";
import CompleteResetPassword from "./containers/account/CompleteResetPassword";
import ChangePassword from "./containers/account/ChangePassword";
import ChangeEmail from "./containers/account/ChangeEmail";
import CompleteChangeEmail from "./containers/account/CompleteChangeEmail";
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
    <UnauthenticatedRoute path="/signup/complete" exact component={CompleteSignUp} appProps={appProps} />
    <UnauthenticatedRoute path="/signup/resend" exact component={ResendSignUpCode} appProps={appProps} />
    <UnauthenticatedRoute path="/password/reset" exact component={ResetPassword} appProps={appProps} />
    <UnauthenticatedRoute path="/password/reset/complete" exact component={CompleteResetPassword} appProps={appProps} />
    <AppliedRoute path="/password/change" exact component={ChangePassword} appProps={appProps} />
    <AuthenticatedRoute path="/email/change" exact component={ChangeEmail} appProps={appProps} />
    <AppliedRoute path="/email/change/complete" exact component={CompleteChangeEmail} appProps={appProps} />
    <AuthenticatedRoute path="/settings" exact component={Settings} appProps={appProps} />
    <Route component={NotFound} />
  </Switch>
