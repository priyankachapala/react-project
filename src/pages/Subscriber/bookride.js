import React from "react";

export default function bookrideforsub() {
    return <div>
        <form action="http://localhost:4000/book/ride/subscriber" method="post">
            <label> Enter User ID</label>
            <input type="text" id="from_name" name="name" /><br/>
            <label>Enter from Station Id</label>
            <input type="text" id="to_name" name="name" /><br/>
            <input type="submit" value="Submit" /><br/>
        </form><br/>
        <a href="http://localhost:3001/"><button> BACK</button></a>
    </div>;
}