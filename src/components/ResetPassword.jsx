import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenParam = queryParams.get("token");
    if (tokenParam) {
      setToken(tokenParam);
    } else {
      Swal.fire("Invalid Link", "No token provided.", "error");
      navigate("/login");
    }
  }, [location, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/reset-password`, {
        token,
        newPassword: password,
      });
      Swal.fire("Success", res.data, "success").then(() => navigate("/login"));
    } catch (err) {
      Swal.fire("Error", "Failed to reset password", "error");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3 p-4 shadow bg-white rounded">
        <h3 className="text-center mb-4">Reset Your Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter New Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
