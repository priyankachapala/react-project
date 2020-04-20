import React from "react";

export default function SignIn() {
  return <div>
      <form action="http://localhost:4000/login" method="post">
          <label> Enter ID</label>
        <input type="text" id="name" name="name" /><br/>
        <input type="submit" value="Submit" /><br/>
      </form><br/>
      <a href='http://localhost:3001/register'> Register new user</a>
  </div>;
}
