import React from "react";

export default function tripsbetweenstations() {
    return <div>
        <form action="http://localhost:4000/trips/between/stations" method="post">
            <label> Enter From Station ID</label>
            <input type="text" id="from_name" name="name" /><br/>
            <label>Enter To Station Id</label>
            <input type="text" id="to_name" name="name" /><br/>
            <input type="submit" value="Submit" /><br/>
        </form><br/>
        <a href="http://localhost:3001/admindashboard"><button> BACK</button></a>
    </div>;
}