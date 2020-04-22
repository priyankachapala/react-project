import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import adminDashboard from "../pages/adminDashboard";
import subDashboard from "../pages/Subscriber";
import stationdashboard from "../pages/Stations";
import userdashboard from "../pages/Users";
import usertripdashboard from "../pages/Users/tripstaken";
import tripsbetweenstations from "../pages/Stations/tripsbetweenstations";
import ammountuserdashboard from "../pages/Users/ammountpaid";
import totalammountdashboard from "../pages/Users/totalammount";
import cusDashboard from "../pages/Customer";
import bookrideforsub from "../pages/Subscriber/bookride";
import newuserdashboard from "../pages/NewUser/NewUser";
import updatesubscriberdashboard from "../pages/Users/updatesubscriber";
import updateaccountdashboard from "../pages/Subscriber/updateaccount";
import finishride from "../pages/Subscriber/finishride";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/subdashboard" component={subDashboard} />
        <Route path="/cusdashboard" component={cusDashboard} />
        <Route path="/admindashboard" component={adminDashboard} />
        <Route path="/stations" component={stationdashboard} />
        <Route path="/users" component={userdashboard} />
        <Route path="/Tripstakenbyuser" component={usertripdashboard}/>
        <Route path="/Trips/between/stations" component={tripsbetweenstations}/>
        <Route path="/Ammountpaidbyuser" component={ammountuserdashboard}/>
        <Route path="/TotalAmmount" component={totalammountdashboard}/>
        <Route path="/book/ride" component={bookrideforsub}/>
        <Route path="/registernewuser" component={newuserdashboard}/>
        <Route path="/updatesubscriber" component={updatesubscriberdashboard}/>
        <Route path="/subupdatesubscriber" component={updateaccountdashboard}/>
        <Route path="/finish/ride" component={finishride}/>

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignIn} />
    </Switch>
  );
}
