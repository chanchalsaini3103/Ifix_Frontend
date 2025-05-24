import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Auth.css";
import Navbar from "./Navbar";


function Register() {
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    passwordHash: "",
    role: "CUSTOMER", // default role
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/api/auth/register", form);
      setMessage("Registered successfully!");
    } catch (err) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="containerregister mt-5 mb-5">
        <h2 className="text-center mb-4">Please Fill Your Details For Registration</h2>
        <form onSubmit={handleSubmit} className="mx-auto register-form p-4 shadow rounded bg-white">
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                placeholder="Enter Username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                placeholder="Enter Full Name"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                type="tel"
                placeholder="Enter Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <input
                className="form-control"
                placeholder="Enter Address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Enter Password"
                value={form.passwordHash}
                onChange={(e) => setForm({ ...form, passwordHash: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-pink px-5">Submit</button>
          </div>
          {message && <p className="text-center mt-3">{message}</p>}
        </form>
      </div>
     
    </>
  );
}

export default Register;
