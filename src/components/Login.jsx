import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Auth.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Login() {
  const [form, setForm] = useState({ email: "", passwordHash: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Lock page scroll ONLY on this screen
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
    } catch {
      Swal.fire("Login Failed", "Invalid email or password", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const { value: phone } = await Swal.fire({
      title: "Forgot Password?",
      input: "tel",
      inputLabel: "Enter your registered phone number",
      inputPlaceholder: "+91XXXXXXXXXX",
      showCancelButton: true,
      confirmButtonText: "Send OTP",
      confirmButtonColor: "#0dcaf0",
    });
    if (phone) {
      try {
        await axios.post(`${BASE_URL}/api/auth/forgot-password-otp`, { phone });
        Swal.fire("OTP Sent!", "Please check your phone for the OTP.", "success")
          .then(() => navigate("/reset-password-otp", { state: { phone } }));
      } catch {
        Swal.fire("Error", "Failed to send OTP", "error");
      }
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-11 col-lg-10 col-xl-9">
           <div className="login-card glass-card compact shadow-lg overflow-hidden">

              <div className="row g-0">
                {/* Left */}
                <div className="col-md-6 d-none d-md-block">
                  <div className="login-left slide-in-left">
                    <img
                      src="/images/login.png"
                      alt="Mobile Repair"
                      className="img-fluid h-100 w-100 object-fit-cover"
                    />
                    <div className="welcome-overlay">
                      <h3 className="fw-bold mb-2 text-white">Welcome to iFix</h3>
                      <p className="mb-0 text-white-50 small">
                        Doorstep mobile repair you can trust. Log in to track your
                        orders and manage your repairs effortlessly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="col-md-6">
                  <div className="login-right fade-in-up">
                    <div className="card-body p-4 p-md-5">
                      <div className="text-center mb-3">
                        <img src="/images/logo.png" alt="iFix Logo" className="login-logo mb-2" />
                        <h4 className="login-title mb-1">Welcome back</h4>
                        <p className="text-muted small mb-0">Sign in to continue to iFix</p>
                      </div>

                      <form onSubmit={handleSubmit} className="mt-3">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label small text-muted">Email address</label>
                          <div className="input-group input-elevated">
                            <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              placeholder="you@example.com"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              required
                              autoComplete="email"
                            />
                          </div>
                        </div>

                        <div className="mb-2">
                          <label htmlFor="password" className="form-label small text-muted">Password</label>
                          <div className="input-group input-elevated">
                            <span className="input-group-text"><i className="bi bi-lock"></i></span>
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              placeholder="Enter your password"
                              className="form-control"
                              value={form.passwordHash}
                              onChange={(e) => setForm({ ...form, passwordHash: e.target.value })}
                              required
                              autoComplete="current-password"
                            />
                            <button
                              type="button"
                              className="input-group-text btn-eye"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                            </button>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label htmlFor="rememberMe" className="form-check-label small">Remember me</label>
                          </div>
                          <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="bg-transparent border-0 p-0 small text-primary"
                            style={{ cursor: "pointer", textDecoration: "none" }}
                          >
                            Forgot password?
                          </button>
                        </div>

                        <button type="submit" className="btn btn-gradient w-100 mb-2" disabled={isLoading}>
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Logging in…
                            </>
                          ) : (
                            <>
                              <i className="bi bi-box-arrow-in-right me-2"></i> Log In
                            </>
                          )}
                        </button>

                        <div className="text-center small">
                          Don’t have an account?{" "}
                          <Link to="/register" className="fw-semibold link-underline-none">Sign up</Link>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
                {/* End Right */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
