import React from "react";

export default function tripsbetweenstations() {
    return <div>
        <form action="http://localhost:4000/trips/between/stations" method="post">
            <label> Enter From Station ID</label>
            <input type="text" id="from_name" name="name" className="inputtext"/><br/>
            <label>Enter To Station Id</label>
            <input type="text" id="to_name" name="name" className="inputtext"/><br/>
            <input type="submit" value="Submit" className="inputsubmit" /><br/>
        </form><br/>
        <a href="http://localhost:3001/admindashboard"><button className="button button5"> BACK</button></a>
    </div>;
}