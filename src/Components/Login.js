import React from "react";
import "./Login.css";

function Login() {
  return (
    
    <>

    <div className="login-div">
      <p> Welcome to My React Web App!! </p>
      

      <input type="email" className="input" placeholder="Enter your email" />
      <input
        type="password"
        className="input"
        placeholder="Enter your password"
      />

      <button className="btn-submit">Submit</button>

      
    </div>

    <div className="child-div">

        <h3>Learing react to build web app</h3>

      </div>

    </>
  );
}

export default Login;
