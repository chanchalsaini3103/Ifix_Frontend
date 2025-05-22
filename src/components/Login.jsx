import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Enter Your Email" required />
        </div>
        <div className="mb-4">
          <input type="password" className="form-control" placeholder="Enter Your Password" required />
        </div>
        <div className="text-center">
          <button className="btn btn-dark px-4" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
