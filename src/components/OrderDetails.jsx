import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import "../styles/OrderDetails.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
      await axios.post(`${BASE_URL}/api/repair/submit`, order);
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
      <div className="order-popup-wrapper d-flex align-items-center justify-content-center py-5">
        <div className="order-popup-modal row bg-white shadow rounded-4 overflow-hidden">
          <div className="col-md-6 p-0">
            <img
              src="/images/technician.png"
              alt="Technician"
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>
          <div className="col-md-6 p-4">
            <h5 className="fw-bold text-center mb-3">
              You’re just 1-step away to view<br />
              <span className="text-danger">{state.model} Repair Cost!</span>
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="notes"
                  placeholder="Your city or message"
                  rows="2"
                  value={form.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-start small mb-3 text-secondary">
                <i className="bi bi-check2-circle text-danger me-1"></i> Doorstep Repair
                <i className="bi bi-check2-circle text-danger ms-3 me-1"></i> Secure & Trusted
                <i className="bi bi-check2-circle text-danger ms-3 me-1"></i> 10 Years of Trusted Service
              </div>

              <button type="submit" className="btn btn-danger w-100 fw-semibold">
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
