import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/OrderDetails.css";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

function OrderDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    notes: ""
  });

  useEffect(() => {
    const uid = localStorage.getItem("userId");
    if (!uid) {
      if (state) localStorage.setItem("pendingOrder", JSON.stringify(state));
      Swal.fire({
        title: "Login Required",
        text: "Please login to continue with your request.",
        icon: "warning",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#ff007f"
      }).then(() => navigate("/login"));
    } else {
      setUserId(uid);
    }
  }, [state, navigate]);

  useEffect(() => {
    if (!state) {
      const saved = localStorage.getItem("pendingOrder");
      if (!saved) navigate("/select-brand");
    }
  }, [state, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      Swal.fire({
        icon: "error",
        title: "Session expired",
        text: "Please login again to submit your request.",
      });
      navigate("/login");
      return;
    }

    // ✅ Phone validation
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone",
        text: "Please enter a valid 10-digit Indian phone number.",
      });
      return;
    }

    const order = {
      userId: parseInt(userId),
      name: form.name,
      phone: form.phone,
      email: form.email,
      notes: form.notes,
      brand: state?.brand,
      model: state?.model,
      issue: state?.issue
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:8081/api/repair/submit", order);
      localStorage.removeItem("pendingOrder");

      Swal.fire({
        icon: "success",
        title: "Request Submitted!",
        text: "Thank you. We will contact you shortly.",
        confirmButtonColor: "#28a745"
      });

      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while submitting the request.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!state) return <p className="text-center mt-5">Please select brand, model and issue again.</p>;

  return (
    <>
      <Navbar />
      <div className="containerorder mt-5 mb-5">
        <form
          onSubmit={handleSubmit}
          className="mx-auto order-card p-4 shadow rounded bg-white"
        >
          <h3 className="text-center mb-4">Place Your Service Order</h3>
          <div className="mb-3 bg-light p-3 rounded">
            <strong>Brand:</strong> {state.brand} <br />
            <strong>Model:</strong> {state.model} <br />
            <strong>Issue:</strong> {state.issue}
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="tel"
              className="form-control"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <textarea
              className="form-control"
              name="notes"
              placeholder="Additional Notes"
              rows="3"
              value={form.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-pink w-100" disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </>
  );
}

export default OrderDetails;
