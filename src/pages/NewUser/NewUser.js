import React from "react";

export default function newuserdashboard() {
    return <div>
        <form action="http://localhost:4000/create/newuser" method="post">
            <label htmlFor="name"> Enter User Name</label>
            <input type="text" id="name" name="name" /><br/>
            <label htmlFor="gender">Enter Gender</label>
            <input type="text" id="gender" name="gender" /><br/>
            <label htmlFor="userType">Choose a userType:</label>
            <select id="userType" name="userType">
                <option value="Subscriber">Subscriber</option>
                <option value="Customer">Customer</option>
            </select>
            <p> If you have choosen to be Subscriber , Please Enter the Below Details</p>
            <label htmlFor="plan">Choose a Subscription Plan:</label>
            <select id="plan" name="plan">
                <option value="YEARLY">YEARLY</option>
                <option value="MONTHLY">MONTHLY</option>
                <option value="QUARTERLY">QUARTERLY</option>
            </select>
            <label htmlFor="plan">Choose Occupation:</label>
            <select id="occupation" name="occupation">
                <option value="STUDENT">STUDENT</option>
                <option value="DOCTOR">DOCTOR</option>
                <option value="LAWYER">LAWYER</option>
                <option value="ENGINEER">ENGINEER</option>
                <option value="ARCHITECT">ARCHITECT</option>
            </select>
            <input type="submit" value="Submit" /><br/>
        </form><br/>
        <a href="http://localhost:3001/cusdashboard"><button> BACK</button></a>
    </div>;
}