import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Auth.css";
import Navbar from "./Navbar";

function Login() {
  const [form, setForm] = useState({ username: "", passwordHash: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/api/auth/login", form);

      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("role", res.data.role);

      const pendingOrder = localStorage.getItem("pendingOrder");
      if (pendingOrder) {
        navigate("/order-details", { state: JSON.parse(pendingOrder) });
      } else {
        if (res.data.role === "ADMIN") {
          navigate("/admin-dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      alert("Login failed. Please check your credentials.");
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
              type="text"
              placeholder="Enter Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
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
