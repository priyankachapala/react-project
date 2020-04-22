import React from "react";
import bike from "../SignIn/Bike/bike.jpg"

export default function subDashboard() {
  return <div className="App" style={{backgroundImage: `url(${bike})` }}>
    <h2> Hello, I am dashboard for subscriber </h2>

    <a href="http://localhost:3001/"><button className="button button5"> BACK</button></a>

    <a href="http://localhost:3001/book/ride"><button className="button button5"> Book Ride</button></a>
    <a href="http://localhost:3001/finish/ride"><button className="button button5"> Finish Ride</button></a>

    <a href="http://localhost:3001/subupdatesubscriber"><button className="button button5"> Update Account</button></a>
  </div>
}
