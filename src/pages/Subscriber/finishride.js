import React from "react";


export default function finishrideDashboard() {
    return <div className="inputdiv">
        <h2> Hi, Your Ride is Confirmed and Bike is reserved at the Station </h2>
        <h3> Please Click the Finish Button, once you reach destination </h3>
        <form action="http://localhost:4000/finish/ride" method="post">
            <label className="monospace" > Enter ID</label>
            <input type="text" id="name" name="name" className="inputtext"/><br/>

            <label htmlFor="payment">Choose a Payment Option:</label>
            <select id="payment" name="payment" className="inputtext">
                <option value="1">Cash</option>
                <option value="2">Debit</option>
                <option value="3">Credit</option>
                <option value="4">Paypal</option>
            </select>
            <br/>
            <input type="submit" value="Finish" className="inputsubmit"/><br/>
        </form><br/>
        <a href="http://localhost:3001/subdashboard"><button className="button button5"> BACK</button></a>
    </div>
}