import React from "react";

export default function SignUp() {
  return  <div>
    <form action="http://localhost:4000/signup" method="post">
      <label>Name</label>
      <input type="text" id="name" name="name" className="inputtext"/><br/>
      <label>password</label>
      <input type="text" id="usertype" name="password" className="inputtext"/><br/>
      <input type="submit" value="Enter userType" />
    </form>
    <a href="http://localhost:3001/">back</a>
  </div>;
}
