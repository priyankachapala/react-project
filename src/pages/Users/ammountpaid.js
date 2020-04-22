import React from "react";

export default function ammountuserdashboard() {
    return <div>
        <form action="http://localhost:4000/ammount/paidby/user" method="post">
            <label> Enter User ID</label>
            <input type="text" id="name" name="name" className="inputtext"/><br/>
            <input type="submit" value="Submit" className="inputsubmit"/><br/>
        </form><br/>
        <a href="http://localhost:3001/admindashboard"><button className="button button5"> BACK</button></a>
    </div>;
}