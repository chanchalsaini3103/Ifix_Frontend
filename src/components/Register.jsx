import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Auth.css";
import Navbar from "./Navbar";


function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    passwordHash: "",
    role: "CUSTOMER",
  });

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8081/api/auth/send-otp", form);
      Swal.fire("OTP Sent", res.data, "success");
      setStep(2);
    } catch (err) {
      Swal.fire("Failed", "Could not send OTP. Try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const verifyAndRegister = async (e) => {
    e.preventDefault();
    if (!otp) {
      Swal.fire("Enter OTP", "Please enter the OTP to proceed.", "warning");
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:8081/api/auth/verify-otp", {
        phone: form.phone,
        otp: otp,
      });

      const res = await axios.post("http://localhost:8081/api/auth/register", form);
      Swal.fire("Success", res.data, "success");
      setMessage("Registered successfully!");
      navigate("/");

      setStep(1);
      setForm({
        username: "",
        fullName: "",
        email: "",
        phone: "",
        address: "",
        passwordHash: "",
        role: "CUSTOMER",
      });
      setOtp("");
    } catch (err) {
      Swal.fire("Error", err.response?.data || "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-container">
          <div className="auth-left">
            <img src={registerImage} alt="Register visual" />
            <div className="welcome-text">
              <h3>Welcome!</h3>
              <p>Please register using your details to continue.</p>
            </div>
          </div>

          <div className="auth-right">
            <h4 className="text-center mb-4">
              {step === 1 ? "Register with Phone OTP" : "Enter OTP to Verify"}
            </h4>
            <form onSubmit={step === 1 ? sendOtp : verifyAndRegister}>
              {step === 1 ? (
                <>
                  <input
                    className="form-control mb-3"
                    placeholder="Username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="form-control mb-3"
                    placeholder="Full Name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    className="form-control mb-3"
                    placeholder="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="form-control mb-3"
                    placeholder="Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    name="passwordHash"
                    value={form.passwordHash}
                    onChange={handleChange}
                    required
                  />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </>
              )}

              <button
                type="submit"
                className="btn btn-dark w-100"
                disabled={loading}
              >
                {loading
                  ? "Processing..."
                  : step === 1
                  ? "Send OTP to Phone"
                  : "Verify & Register"}
              </button>

              {message && <p className="text-success text-center mt-3">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
