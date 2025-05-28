import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Auth.css";

import Navbar from "./Navbar";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Login() {
  const [form, setForm] = useState({ email: "", passwordHash: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, form);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("role", res.data.role);

      const pendingOrder = localStorage.getItem("pendingOrder");
      if (pendingOrder) {
        localStorage.removeItem("pendingOrder");
        navigate("/order-details", { state: JSON.parse(pendingOrder) });
      } else if (res.data.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      Swal.fire("Login Failed", "Invalid email or password", "error");
    }
  };

  const handleForgotPassword = async () => {
    const { value: email } = await Swal.fire({
      title: "Forgot Password?",
      input: "email",
      inputLabel: "Enter your registered email",
      inputPlaceholder: "you@example.com",
      showCancelButton: true,
      confirmButtonText: "Send Reset Link",
    });

    if (email) {
      try {
        const res = await axios.post(`${BASE_URL}/api/auth/forgot-password`, { email });
        Swal.fire("Sent!", res.data, "success");
      } catch (err) {
        if (err.response && err.response.status === 404) {
          Swal.fire("Email Not Found", "This email is not registered.", "warning");
        } else {
          Swal.fire("Error", "Failed to send reset link", "error");
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page-wrapper">
        <div className="login-container">
          <div className="login-left">
            <img src="/images/login.png" alt="Login" />
            <div className="welcome-text">
              <h3>Welcome Back</h3>
              <p>Please log in using your personal information to stay connected with us.</p>
            </div>
          </div>
          <div className="login-right">
            <h4 className="text-center mb-4">LOGIN</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="form-control mb-3"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={form.passwordHash}
                onChange={(e) => setForm({ ...form, passwordHash: e.target.value })}
                className="form-control mb-3"
                required
              />
              <div className="text-end mb-3">
                <button type="button" onClick={handleForgotPassword} className="link-button">
                  Forgot password?
                </button>
              </div>
              <button type="submit" className="btn btn-info w-100 mb-3 text-white">Log In</button>
              <p className="text-center">
                Don’t have an account? <Link to="/register">Signup</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
