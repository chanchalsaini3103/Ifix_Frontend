import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ResetPasswordOtp() {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneFromState = location.state?.phone || "";

  const [phone, setPhone] = useState(phoneFromState);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/auth/reset-password-otp`, {
        phone,
        otp,
        newPassword,
      });
      Swal.fire("Success", "Password reset successful!", "success").then(() =>
        navigate("/login")
      );
    } catch (err) {
      Swal.fire("Error", "Failed to reset password. Check OTP or try again.", "error");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3 p-4 shadow bg-white rounded">
        <h4 className="text-center mb-3">Reset Password via OTP</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control mb-3"
            required
          />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="form-control mb-3"
            required
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control mb-3"
            required
          />
          <button type="submit" className="btn btn-primary w-100">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordOtp;
