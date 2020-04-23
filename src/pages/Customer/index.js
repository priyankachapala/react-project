import React from "react";
import bike from "../SignIn/Bike/bike.jpg"
import "../../styles.css"

export default function cusDashboard() {
    return <div className="" style={{backgroundImage: `url(${bike})` }}>
        <h2> Hello, I am dashboard for Customer </h2>
        <br/>
        <a href="http://localhost:3001/"><button className="button button5"> BACK</button></a>
        <a href="http://localhost:3001/viewstations/customer"><button className="button button5"> View Stations</button></a>

        <a href="http://localhost:3001/book/ride"><button className="button button5"> BOOK A RIDE</button></a>
    </div>
}
