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
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
//import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/trends" exact component={Trends} props={childProps} />
    <AppliedRoute path="/calendar" exact component={Calendar} props={childProps} />
    <AppliedRoute path="/watchlist" exact component={WatchList} props={childProps} />
    <AppliedRoute path="/watchlist/edit" exact component={EditWatchList} props={childProps} />
    <AppliedRoute path="/heatmap" exact component={HeatMap} props={childProps} />
    <AppliedRoute path="/compare" exact component={Compare} props={childProps} />
    <AppliedRoute path="/test" exact component={Test} props={childProps} />
    <AppliedRoute path="/stocks/:symbol" exact component={StockDetails} props={childProps} />
    <AppliedRoute path="/connections/edit" exact component={EditConnections} props={childProps} />
    <UnauthenticatedRoute path="/signin" exact component={SignIn} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={SignUp} props={childProps} />
    <Route component={NotFound} />
  </Switch>
