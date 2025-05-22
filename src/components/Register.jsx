import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import "../styles/Auth.css";
function Register() {
  return (
    <>
   <Navbar />
    <div className="container mt-5">
      <h2 className="text-center mb-4">Please Fill Your Details For Registration</h2>
      <form className="mx-auto" style={{ maxWidth: "700px" }}>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Enter Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Enter Your Email" required />
          </div>
          <div className="col-md-12">
            <input type="tel" className="form-control" placeholder="Enter Mobile" required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Enter Shop Name" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Enter Shop Address" />
          </div>
          <div className="col-md-12">
            <textarea className="form-control" rows="4" placeholder="Enter Your Message"></textarea>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-pink px-4 fw-semibold" type="submit">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Register;
