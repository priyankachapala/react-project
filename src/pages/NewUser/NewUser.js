import React from "react";

import  "../../styles.css"
export default function newuserdashboard() {
    return <div className="inputdiv">
        <form action="http://localhost:4000/create/newuser" method="post">
            <label htmlFor="name" > Enter User Name</label>
            <input type="text" id="name" name="name" className="inputtext" /><br/>
            <label htmlFor="gender">Enter Gender</label>
            <input type="text" id="gender" name="gender" className="inputtext" /><br/>
            <label htmlFor="userType">Choose a userType:</label>
            <select id="userType" name="userType" className="inputtext">
                <option value="Subscriber">Subscriber</option>
                <option value="Customer">Customer</option>
            </select>
            <p> If you  choose to be a Subscriber , Please Enter the Below Details</p>
            <label htmlFor="plan">Choose a Subscription Plan:</label>
            <select id="plan" name="plan" className="inputtext">
                <option value="YEARLY">YEARLY</option>
                <option value="MONTHLY">MONTHLY</option>
                <option value="QUARTERLY">QUARTERLY</option>
            </select>
            <label htmlFor="plan">Choose Occupation:</label>
            <select id="occupation" name="occupation" className="inputtext">
                <option value="STUDENT">STUDENT</option>
                <option value="DOCTOR">DOCTOR</option>
                <option value="LAWYER">LAWYER</option>
                <option value="ENGINEER">ENGINEER</option>
                <option value="ARCHITECT">ARCHITECT</option>
            </select>
            <input type="submit" value="Submit" className="inputsubmit" /><br/>
        </form><br/>
        <p className="monospace" >Please note down your UserId after clicking the Submit Button</p>
        <p className="monospace">Thank you for Registering. Hope You have a safe ride.</p>
        <a href="http://localhost:3001/"><button className="button button5"> BACK</button></a>
    </div>;
}