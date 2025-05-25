import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Auth.css";
import Navbar from "./Navbar";

function Login() {
  const [form, setForm] = useState({ email: "", passwordHash: "" });
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:8081/api/auth/login", form);

    localStorage.setItem("userId", res.data.userId);
    localStorage.setItem("role", res.data.role);

    const pendingOrder = localStorage.getItem("pendingOrder");

    if (pendingOrder) {
      localStorage.removeItem("pendingOrder");
      navigate("/order-details", { state: JSON.parse(pendingOrder) });
    } else if (res.data.role === "ADMIN") {
      navigate("/admin-dashboard");
    } else {
      navigate("/"); // default Hero page for CUSTOMER or others
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
      const res = await axios.post("http://localhost:8081/api/auth/forgot-password", { email });
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
      <div className="containerlogin mt-5 mb-5">
        <h2 className="text-center mb-4">Login to Your Account</h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto register-form p-4 shadow rounded bg-white"
        >
          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter Password"
              value={form.passwordHash}
              onChange={(e) => setForm({ ...form, passwordHash: e.target.value })}
              className="form-control"
              required
            />
          </div>
          <div className="text-end mb-3">
            <button type="button" className="btn btn-link p-0" onClick={handleForgotPassword}>
              Forgot Password?
            </button>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-pink px-5 w-100">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
