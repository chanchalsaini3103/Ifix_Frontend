import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Auth.css";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

function Register() {
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
  const [step, setStep] = useState(1); // 1 = form, 2 = OTP
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Step 1: Send OTP
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

  // Step 2: Verify OTP & Register
  const verifyAndRegister = async (e) => {
    e.preventDefault();
    if (!otp) {
      Swal.fire("Enter OTP", "Please enter the OTP to proceed.", "warning");
      return;
    }

    setLoading(true);
    try {
      // First verify OTP
      await axios.post("http://localhost:8081/api/auth/verify-otp", {
        phone: form.phone,
        otp: otp,
      });

      // Then register user
      const res = await axios.post("http://localhost:8081/api/auth/register", form);
      Swal.fire("Success", res.data, "success");
      setMessage("Registered successfully!");
      navigate("/"); // Hero or homepage

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
      <div className="containerregister mt-5 mb-5">
        <h2 className="text-center mb-4">
          {step === 1 ? "Please Fill Your Details" : "Verify OTP to Complete Registration"}
        </h2>

        <form
          onSubmit={step === 1 ? sendOtp : verifyAndRegister}
          className="mx-auto register-form p-4 shadow rounded bg-white"
        >
          {step === 1 ? (
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  className="form-control"
                  placeholder="Enter Username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Enter Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  className="form-control"
                  placeholder="Enter Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  name="passwordHash"
                  value={form.passwordHash}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          ) : (
            <>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          <div className="text-center">
            <button type="submit" className="btn btn-pink px-5" disabled={loading}>
              {loading ? "Processing..." : step === 1 ? "Send OTP" : "Verify & Register"}
            </button>
          </div>

          {message && <p className="text-center mt-3 text-success">{message}</p>}
        </form>
      </div>
    </>
  );
}

export default Register;
