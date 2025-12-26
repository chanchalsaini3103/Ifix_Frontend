import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/Auth.css";
import Navbar from "./Navbar";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function PhoneRegister() {
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    passwordHash: "",
    otp: "",
  });

  const [errors, setErrors] = useState({});

  // validators
  const nameRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value) return "Full name is required.";
        if (!nameRegex.test(value)) return "Use letters and spaces only.";
        return "";
      case "email":
        if (!value) return "Email is required.";
        if (!emailRegex.test(value)) return "Enter a valid email.";
        return "";
      case "phone":
        if (!value) return "Phone is required.";
        if (value.length !== 10) return "Must be 10 digits.";
        if (!phoneRegex.test(value)) return "Start with 6,7,8,9.";
        return "";
      case "passwordHash":
        if (!value) return "Password is required.";
        if (value.length < 6) return "Min 6 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      const cleaned = value.replace(/[^A-Za-z\s]/g, "");
      setForm((p) => ({ ...p, fullName: cleaned }));
      setErrors((p) => ({ ...p, fullName: validateField("fullName", cleaned) }));
      return;
    }

    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setForm((p) => ({ ...p, phone: digits }));
      setErrors((p) => ({
        ...p,
        phone: digits.length === 10 ? validateField("phone", digits) : "",
      }));
      return;
    }

    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
  };

  const canSendOtp =
    !isSending &&
    !errors.fullName &&
    !errors.email &&
    !errors.phone &&
    !errors.passwordHash &&
    form.fullName &&
    form.email &&
    form.phone &&
    form.passwordHash &&
    cooldown === 0;

  const canVerify = !isVerifying && !!form.otp;
  const canRegister = !isRegistering;

  useEffect(() => {
    if (!cooldown) return;
    const t = setInterval(() => setCooldown((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  const sendOtp = async () => {
    const newErrs = {};
    ["fullName", "email", "phone", "passwordHash"].forEach(
      (f) => (newErrs[f] = validateField(f, form[f]))
    );
    setErrors(newErrs);
    if (Object.values(newErrs).some((e) => e)) {
      Swal.fire("Check form", "Please fix highlighted fields.", "warning");
      return;
    }

    try {
      setIsSending(true);
      await axios.post(`${BASE_URL}/api/auth/send-otp`, {
        ...form,
        phone: "+91" + form.phone,
      });
      Swal.fire("Success", "OTP sent to your phone.", "success");
      setStep(2);
      setCooldown(45);
    } catch (err) {
      Swal.fire("Error", err.response?.data || "Failed to send OTP", "error");
    } finally {
      setIsSending(false);
    }
  };

  const verifyOtp = async () => {
    if (!form.otp) return;
    try {
      setIsVerifying(true);
      const res = await axios.post(`${BASE_URL}/api/auth/verify-otp`, {
        phone: "+91" + form.phone,
        otp: form.otp,
      });
      Swal.fire("Verified", res.data || "OTP verified!", "success");
      setStep(3);
    } catch (err) {
      Swal.fire("Error", err.response?.data || "Invalid OTP", "error");
    } finally {
      setIsVerifying(false);
    }
  };

  const register = async () => {
  try {
    setIsRegistering(true);
    await axios.post(`${BASE_URL}/api/auth/register`, {
      fullName: form.fullName,   // ✅ include fullName
      email: form.email,
      phone: "+91" + form.phone,
      passwordHash: form.passwordHash,
    });
    Swal.fire("Registered", "You can now login", "success");
  } catch (err) {
    Swal.fire("Error", err.response?.data || "Registration failed", "error");
  } finally {
    setIsRegistering(false);
  }
};


  return (
    <>
      <Navbar />

      <div className="login-page-wrapper">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>

        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-11 col-lg-10 col-xl-9">
              <div className="login-card glass-card shadow-lg overflow-hidden">
                <div className="row g-0">
                  {/* Left */}
                  <div className="col-md-6 d-none d-md-block">
                    <div className="login-left slide-in-left">
                      <img
                        src="/images/login.png"
                        alt="Register visual"
                        className="img-fluid h-100 w-100 object-fit-cover"
                      />
                      <div className="welcome-overlay">
                        <h3 className="fw-bold mb-2 text-white">
                          Create your iFix account
                        </h3>
                        <p className="mb-0 text-white-50 small">
                          Doorstep device repair. Track orders and manage
                          requests effortlessly.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="col-md-6">
                    <div className="login-right fade-in-up">
                      <div className="card-body p-4 p-md-5">
                        <div className="text-center mb-3">
                          <p className="text-muted small mb-0">
                            Create your account to continue to iFix
                          </p>
                        </div>

                        {/* Stepper */}
                        <div className="stepper mb-3">
                          <div className={`step ${step >= 1 ? "active" : ""}`}>
                            <span>1</span> Details
                          </div>
                          <div className={`step ${step >= 2 ? "active" : ""}`}>
                            <span>2</span> Verify
                          </div>
                          <div className={`step ${step >= 3 ? "active" : ""}`}>
                            <span>3</span> Done
                          </div>
                        </div>

                        {/* STEP 1 */}
                        {step === 1 && (
                          <>
                            <div className="mb-2">
                              <label className="form-label small text-muted">
                                Full Name
                              </label>
                              <input
                                type="text"
                                name="fullName"
                                className={`form-control input-elevated ${
                                  errors.fullName ? "is-invalid" : ""
                                }`}
                                placeholder="Your full name"
                                value={form.fullName}
                                onChange={handleChange}
                              />
                              {errors.fullName && (
                                <div className="invalid-feedback">
                                  {errors.fullName}
                                </div>
                              )}
                            </div>

                            <div className="mb-2">
                              <label className="form-label small text-muted">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                className={`form-control input-elevated ${
                                  errors.email ? "is-invalid" : ""
                                }`}
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={handleChange}
                              />
                              {errors.email && (
                                <div className="invalid-feedback">
                                  {errors.email}
                                </div>
                              )}
                            </div>

                            <div className="mb-2">
                              <label className="form-label small text-muted">
                                Mobile Number
                              </label>
                              <div className="input-group input-elevated">
                                <span className="input-group-text">+91</span>
                                <input
                                  type="tel"
                                  name="phone"
                                  className={`form-control ${
                                    errors.phone ? "is-invalid" : ""
                                  }`}
                                  placeholder="10-digit number"
                                  value={form.phone}
                                  onChange={handleChange}
                                />
                              </div>
                              {errors.phone && (
                                <div className="invalid-feedback d-block">
                                  {errors.phone}
                                </div>
                              )}
                            </div>

                            <div className="mb-3">
                              <label className="form-label small text-muted">
                                Password
                              </label>
                              <input
                                type="password"
                                name="passwordHash"
                                className={`form-control input-elevated ${
                                  errors.passwordHash ? "is-invalid" : ""
                                }`}
                                placeholder="Minimum 6 characters"
                                value={form.passwordHash}
                                onChange={handleChange}
                              />
                              {errors.passwordHash && (
                                <div className="invalid-feedback">
                                  {errors.passwordHash}
                                </div>
                              )}
                            </div>

                            <button
                              type="button"
                              className="btn btn-gradient w-100 mb-2"
                              onClick={sendOtp}
                              disabled={!canSendOtp}
                            >
                              {isSending ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2" />
                                  Sending OTP…
                                </>
                              ) : cooldown > 0 ? (
                                <>Resend OTP in {cooldown}s</>
                              ) : (
                                <>Send OTP to Phone</>
                              )}
                            </button>

                            <div className="text-center small">
                              Already have an account?{" "}
                              <a
                                href="/login"
                                className="fw-semibold link-underline-none text-primary"
                              >
                                Log in
                              </a>
                            </div>
                          </>
                        )}

                        {/* STEP 2 */}
                        {step === 2 && (
                          <>
                            <label className="form-label small text-muted">
                              Enter OTP
                            </label>
                            <input
                              type="text"
                              name="otp"
                              className="form-control input-elevated text-center mb-3"
                              placeholder="4-6 digit code"
                              value={form.otp}
                              onChange={(e) =>
                                setForm((p) => ({
                                  ...p,
                                  otp: e.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 6),
                                }))
                              }
                            />

                            <div className="d-flex gap-2">
                              <button
                                type="button"
                                className="btn btn-gradient flex-grow-1"
                                onClick={verifyOtp}
                                disabled={!canVerify}
                              >
                                {isVerifying ? (
                                  <>
                                    <span className="spinner-border spinner-border-sm me-2" />
                                    Verifying…
                                  </>
                                ) : (
                                  <>Verify OTP</>
                                )}
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                                disabled={cooldown > 0 || isSending}
                                onClick={sendOtp}
                              >
                                {cooldown > 0 ? `${cooldown}s` : "Resend"}
                              </button>
                            </div>
                          </>
                        )}

                        {/* STEP 3 */}
                        {step === 3 && (
                          <>
                            <div
                              className="alert alert-success d-flex align-items-center"
                              role="alert"
                            >
                              <i className="bi bi-check2-circle me-2"></i>
                              Phone number verified successfully.
                            </div>
                            <button
                              type="button"
                              className="btn btn-gradient w-100 mb-2"
                              onClick={register}
                              disabled={!canRegister}
                            >
                              {isRegistering ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2" />
                                  Creating account…
                                </>
                              ) : (
                                <>Complete Registration</>
                              )}
                            </button>
                          </>
                        )}
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
    </>
  );
}

export default PhoneRegister;
  