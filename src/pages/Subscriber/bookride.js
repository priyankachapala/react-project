import React from "react";

export default function bookrideforsub() {
    return <div>
        <form action="http://localhost:4000/book/ride/subscriber" method="post">
            <label> Enter User ID</label>
            <input type="text" id="from_name" name="name" className="inputtext"/><br/>
            <label>Enter from Station Id</label>
            <input type="text" id="to_name" name="name" className="inputtext"/><br/>
            <label>Enter to Station Id</label>
            <input type="text" id="to_name" name="name" className="inputtext"/><br/>
            <input type="submit" value="Submit" className="inputsubmit"/><br/>


        </form><br/>
        <a href="http://localhost:3001/"><button className="button button5"> BACK</button></a>
    </div>;
}