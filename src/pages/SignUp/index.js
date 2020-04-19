import React from "react";

export default function SignUp() {
  return  <div>
    <form action="http://localhost:4000/signup" method="post">
      <label>Name</label>
      <input type="text" id="name" name="name" /><br/>
      <label>password</label>
      <input type="text" id="usertype" name="password" /><br/>
      <input type="submit" value="Enter userType" />
    </form>
    <a href="http://localhost:3002/">back</a>
  </div>;
}
