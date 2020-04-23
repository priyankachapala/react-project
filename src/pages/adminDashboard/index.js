import React from "react";
import bike from "../SignIn/Bike/bike.jpg"
import  "../../styles.css"

export default class adminDashboard extends React.Component {


  render()
  {
    return <div className="App" style={{backgroundImage: `url(${bike})` }} >
      <h2 > Hello, I am dashboard for Admin</h2><br/>

      <div >
        <a href="http://localhost:3001/"><button className="button button5"> BACK</button></a>

        <a href="http://localhost:3001/stations"><button className="button button5"> View Stations</button></a>

        <a href="http://localhost:3001/users"><button className="button button5"> View Users</button></a>

        <a href="http://localhost:3001/updatesubscriber"><button className="button button5"> Update User</button></a>




      </div>






    </div>

  }
}