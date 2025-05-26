import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/Auth.css";
import Navbar from "./Navbar";

function PhoneRegister() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    address: "",
    phone: "",
    passwordHash: "",
    otp: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    try {
      await axios.post("http://localhost:8081/api/auth/send-otp", {
        ...form,
        phone: "+91" + form.phone,
      });
      Swal.fire("Success", "OTP sent to your phone", "success");
      setStep(2);
    } catch (err) {
      Swal.fire("Error", err.response?.data || "Failed to send OTP", "error");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:8081/api/auth/verify-otp", {
        phone: "+91" + form.phone,
        otp: form.otp,
      });
      Swal.fire("Verified", res.data, "success");
      setStep(3);
    } catch (err) {
      Swal.fire("Error", err.response?.data || "Invalid OTP", "error");
    }
  };

  const register = async () => {
    try {
      await axios.post("http://localhost:8081/api/auth/register", {
        ...form,
        phone: "+91" + form.phone,
      });
      Swal.fire("Registered", "You can now login", "success");
    } catch (err) {
      Swal.fire("Error", err.response?.data || "Registration failed", "error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-container">
          <div className="auth-left">
            <img src="/images/login-bg.jpg" alt="Register visual" />
            <div className="welcome-text">
              <h3>Welcome!</h3>
              <p>Register easily with your phone number and OTP.</p>
            </div>
          </div>

          <div className="auth-right">
            <h4 className="text-center mb-4">Phone OTP Registration</h4>

            {step === 1 && (
              <>
                <input
                  type="text"
                  name="username"
                  className="form-control mb-3"
                  placeholder="Username"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="fullName"
                  className="form-control mb-3"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  className="form-control mb-3"
                  placeholder="Address"
                  onChange={handleChange}
                />

                <div className="input-group mb-3">
                  <span className="input-group-text">+91</span>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Enter 10-digit mobile number"
                    maxLength="10"
                    onChange={handleChange}
                  />
                </div>

                <input
                  type="password"
                  name="passwordHash"
                  className="form-control mb-3"
                  placeholder="Password"
                  onChange={handleChange}
                />

                <button className="btn btn-dark w-100" onClick={sendOtp}>
                  Send OTP to Phone
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <input
                  type="text"
                  name="otp"
                  className="form-control mb-3"
                  placeholder="Enter OTP"
                  onChange={handleChange}
                />
                <button className="btn btn-success w-100" onClick={verifyOtp}>
                  Verify OTP
                </button>
              </>
            )}

            {step === 3 && (
              <button className="btn btn-primary w-100" onClick={register}>
                Complete Registration
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneRegister;
