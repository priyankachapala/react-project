import React from "react";

import  "../../styles.css"

export default function updateaccountdashboard() {
    return <div className="inputdiv">
        <form action="http://localhost:4000/update/subscriber" method="post">
            <p className="monospace" >Please Enter your UserId and Fields you wish to update</p>
            <label htmlFor="name" > Enter UserID</label>
            <input type="text" id="name" name="name" className="inputtext" /><br/>
            <label htmlFor="userType">Choose a userType:</label>
            <select id="userType" name="userType" className="inputtext">
                <option value="Subscriber">Subscriber</option>
                <option value="Customer">Customer</option>
            </select>
            <p> </p>
            <label htmlFor="plan">Choose a Subscription Plan:</label>
            <select id="plan" name="plan" className="inputtext">
                <option value="YEARLY">YEARLY</option>
                <option value="MONTHLY">MONTHLY</option>
                <option value="QUARTERLY">QUARTERLY</option>
            </select>
            <p> </p>
            <label htmlFor="plan">Choose Occupation:</label>
            <select id="occupation" name="occupation" className="inputtext">
                <option value="STUDENT">STUDENT</option>
                <option value="DOCTOR">DOCTOR</option>
                <option value="LAWYER">LAWYER</option>
                <option value="ENGINEER">ENGINEER</option>
                <option value="ARCHITECT">ARCHITECT</option>
            </select>
            <p> </p>
            <input type="submit" value="Submit" className="inputsubmit" /><br/>
        </form><br/>

        <a href="http://localhost:3001/subdashboard"><button className="button button5"> BACK</button></a>
    </div>;
}