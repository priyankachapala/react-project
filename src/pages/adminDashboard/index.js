import React from "react";

export default class adminDashboard extends React.Component {


  render()
  {
    return <div>
      <h1> Hello, I am dashboard for Admin</h1><br/>

      <div>
        <a href="http://localhost:3001/"><button> BACK</button></a>

        <a href="http://localhost:3001/stations"><button> View Stations</button></a>

        <a href="http://localhost:3001/users"><button> View Users</button></a>

      </div>






    </div>

  }
}