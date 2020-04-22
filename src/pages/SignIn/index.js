import React from "react";
import  "../../styles.css"
import bike from "./Bike/bike.jpg"

export default function SignIn() {
  return <div className="App" style={{backgroundImage: `url(${bike})` }}>

      <form action="http://localhost:4000/login" method="post">
          <label className="monospace" > Enter ID</label>
        <input type="text" id="name" name="name" className="inputtext"/><br/>
        <input type="submit" value="Submit" className="inputsubmit"/><br/>
      </form><br/>
      <a href="http://localhost:3001/registernewuser"><button className="button button5">Register new user</button></a>
  </div>;
}
