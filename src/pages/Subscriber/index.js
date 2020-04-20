import React from "react";

export default function subDashboard() {
  return <div>
    <h1> Hello, I am dashboard for subscriber </h1>
    <br/>
    <a href="http://localhost:3002/"> back</a>
  
    <h2>Select destination</h2>
    <p>Select your route, choose the start point and destination.</p>

    <div class="dropdown" style="float:left;">
      <button class="dropbtn">StartPoint</button>
      <div class="dropdown-content" style="left:0;">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>

    <div class="dropdown" style="float:right;">
      <button class="dropbtn">Destination</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      </div>
  </div>
}
