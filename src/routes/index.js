import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import adminDashboard from "../pages/Dashboard";
import subDashboard from "../pages/Subscriber";
import stationdashboard from "../pages/Stations";
import userdashboard from "../pages/Users";
import usertripdashboard from "../pages/Users/tripstaken";
import tripsbetweenstations from "../pages/Stations/tripsbetweenstations";
import ammountuserdashboard from "../pages/Users/ammountpaid";
import totalammountdashboard from "../pages/Users/totalammount";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/subdashboard" component={subDashboard} />
        <Route path="/admindashboard" component={adminDashboard} />
        <Route path="/stations" component={stationdashboard} />
        <Route path="/users" component={userdashboard} />
        <Route path="/Tripstakenbyuser" component={usertripdashboard}/>
        <Route path="/Trips/between/stations" component={tripsbetweenstations}/>
        <Route path="/Ammountpaidbyuser" component={ammountuserdashboard}/>
        <Route path="/TotalAmmount" component={totalammountdashboard}/>

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignIn} />
    </Switch>
  );
}
