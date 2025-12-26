import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HeroPage.css";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import MobileRepair from "./MobileRepair";
import WhyUs from "./WhyUs";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function HeroPage() {
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    issue: "",
    notes: "",
    city: "",
  });

  // NEW: validation state
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const cards = [
    { label: "Mobile Repair", img: "/images/phone.webp" },
    { label: "iPad Repair", img: "/images/ipad.webp" },
    { label: "Apple Watch Repair", img: "/images/watch.webp" },
    { label: "MacBook Repair", img: "/images/macbook.webp" },
    { label: "Tablet Repair", img: "/images/tablet.webp" },
    { label: "Tempered Glass", img: "/images/temperedglass.webp" },
  ];

  const rotatingTexts = cards.map((card) => card.label);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const uid = localStorage.getItem("userId");
    setUserId(uid || "");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // ======== Validators ========
  const nameRegex = /^[A-Za-z\s]+$/;        // letters + spaces
  const phoneRegex = /^[6-9]\d{9}$/;        // starts 6-9 and 10 digits total

  const validateName = (value) => {
    if (!value) return "Name is required.";
    if (!nameRegex.test(value)) return "Use letters and spaces only.";
    return "";
  };

  const validatePhone = (value) => {
    if (!value) return "Phone is required.";
    if (!/^\d+$/.test(value)) return "Digits only.";
    if (value.length !== 10) return "Must be 10 digits.";
    if (!phoneRegex.test(value)) return "Must start with 6, 7, 8, or 9.";
    return "";
  };

  // ======== Handlers ========
  const handleChange = (e) => {
    const { name, value } = e.target;

    // sanitize inputs as user types
    if (name === "name") {
      // allow letters + spaces only while typing
      const cleaned = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, name: cleaned }));
      setErrors((prev) => ({ ...prev, name: validateName(cleaned) }));
      return;
    }

    if (name === "phone") {
      // keep digits only and limit to 10
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
      // Validate progressively (ok to show length/start errors)
      const msg =
        !digitsOnly
          ? "Phone is required."
          : digitsOnly.length < 10
          ? "" // don't nag prematurely; final check will handle it
          : validatePhone(digitsOnly);
      setErrors((prev) => ({ ...prev, phone: msg }));
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setErrors((prev) => ({ ...prev, name: validateName(value) }));
    }
    if (name === "phone") {
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation gate
    const nameErr = validateName(formData.name);
    const phoneErr = validatePhone(formData.phone);

    if (nameErr || phoneErr) {
      setErrors({ name: nameErr, phone: phoneErr });
      Swal.fire("Check form", "Please fix the highlighted fields.", "warning");
      return;
    }

    const uid = localStorage.getItem("userId");
    if (!uid) {
      Swal.fire({
        title: "Login Required",
        text: "Please login to submit your request.",
        icon: "warning",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#ff007f",
      }).then(() => {
        localStorage.setItem("pendingForm", JSON.stringify(formData));
        window.location.href = "/login";
      });
      return;
    }

    const payload = { ...formData, userId: uid };

    try {
      await axios.post(`${BASE_URL}/api/repair/submit`, payload);
      Swal.fire("Success!", "Repair request submitted successfully!", "success");
      // optional: reset fields
      // setFormData({ name:"", phone:"", email:"", brand:"", model:"", issue:"", notes:"", city:"" });
    } catch (err) {
      Swal.fire("Error", "Failed to submit repair request.", "error");
    }
  };

  const isSubmitDisabled =
    !formData.name ||
    !formData.phone ||
    !!errors.name ||
    !!errors.phone ||
    !formData.brand ||
    !formData.issue ||
    !formData.model;

  return (
    <>
      <Navbar />
      <div className="hero-form-section py-5 bg-dark text-white">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <div className="text-section mb-4 mb-lg-0 pe-lg-5">
            <h1 className="fw-bold display-5">
              India’s First Doorstep <span className="text-animation">{rotatingTexts[index]}</span>
            </h1>
            <hr className="text-danger" style={{ width: "80px" }} />
            <p className="lead">
              Get Convenient, Transparent, and Affordable iPhone repairs right at your doorstep, completed in just 30 minutes.
            </p>

            <div className="repair-cards-grid mt-4 text-dark">
              {cards.map((item) => (
                <Link
                  key={item.label}
                  to={`/services/${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="repair-card-link"
                >
                  <div className="repair-card">
                    <img src={item.img} alt={item.label} />
                    <p>{item.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="form-card bg-white text-dark p-4 rounded shadow"
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <h5 className="text-center fw-bold mb-3">
              Get ready,<br />We will contact you shortly!
            </h5>
            <hr className="text-danger mx-auto" style={{ width: "50%" }} />

            <form onSubmit={handleSubmit} className="mt-3" noValidate>
              <div className="row g-2">
                {/* NAME */}
                <div className="col-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    maxLength={50}
                    autoComplete="name"
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                {/* PHONE */}
                <div className="col-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone no."
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    autoComplete="tel"
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  {!errors.phone && formData.phone && formData.phone.length < 10 && (
                    <div className="form-text">Enter 10 digits starting with 6, 7, 8, or 9.</div>
                  )}
                </div>

                {/* BRAND */}
                <div className="col-6">
                  <select
                    name="brand"
                    className="form-select"
                    required
                    value={formData.brand}
                    onChange={handleChange}
                  >
                    <option value="">Select brand</option>
                    <option>Apple</option>
                    <option>Samsung</option>
                    <option>MI</option>
                    <option>Realme</option>
                    <option>Vivo</option>
                    <option>OnePlus</option>
                    <option>Oppo</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* ISSUE */}
                <div className="col-6">
                  <select
                    name="issue"
                    className="form-select"
                    required
                    value={formData.issue}
                    onChange={handleChange}
                  >
                    <option value="">Select issue</option>
                    <option>Screen Damage</option>
                    <option>Battery Issue</option>
                    <option>Water Damage</option>
                    <option>Charging Issue</option>
                    <option>Software Issue</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* MODEL */}
                <div className="col-6">
                  <input
                    type="text"
                    name="model"
                    placeholder="Enter device model"
                    className="form-control"
                    required
                    value={formData.model}
                    onChange={handleChange}
                  />
                </div>

                {/* NOTES */}
                <div className="col-6">
                  <input
                    type="text"
                    name="notes"
                    placeholder="Enter device faults"
                    className="form-control"
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>

                {/* CITY */}
                <div className="col-12">
                  <input
                    type="text"
                    name="city"
                    placeholder="Select your city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-3 d-flex justify-content-center gap-4 small text-danger fw-semibold">
                <span>✔️ Doorstep Repair</span>
                <span>✔️ Secure & Trusted</span>
                <span>✔️ 10 Years of Trusted Service</span>
              </div>

              <div className="text-center mt-3">
                <button type="submit" className="btn btn-danger px-5 py-2" disabled={isSubmitDisabled}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="scrolling-info-bar py-3 bg-white">
  <div className="scrolling-items">
    {[...Array(2)].flatMap((_, outerIndex) =>
  [
    { icon: "bi-shield-check", text: "Upto 6 Month Warranty" },
    { icon: "bi-tools", text: "Onsite Repair" },
    { icon: "bi-clock-history", text: "Quick Turn around time" },
    { icon: "bi-award", text: "High Quality Parts" },
    { icon: "bi-shield-check", text: "Upto 6 Month Warranty" },
    { icon: "bi-tools", text: "Onsite Repair" },
  ].map((item, innerIndex) => (
    <div className="scroll-item" key={`${outerIndex}-${innerIndex}`}>
      <i className={`bi ${item.icon} me-2`}></i> {item.text}
    </div>
  ))
)}

  </div>
</div>
{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/918888668186"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <img src="/images/whatsapp-icon.png" alt="WhatsApp" />
</a>

{/* Experience Banner Section */}
<div className="experience-banner my-5">
  <div className="container d-flex align-items-center justify-content-between flex-column flex-md-row">
    {/* Left Technician Image */}
    <div className="technician-img">
      <img src="/images/tech-left.png" alt="Technician 1" className="img-fluid" />
    </div>

    {/* Center Text */}
    <div className="experience-text text-center mx-4">
      <h6 className="text-success fw-bold">10 YEARS' EXCLUSIVE</h6>
      <h2 className="fw-bold text-gradient">SMART DEVICE<br />REPAIR SERVICE</h2>
      <h5 className="text-gradient fw-semibold mt-2">EXPERIENCE</h5>
    </div>

    {/* Right Technician Image */}
    <div className="technician-img">
      <img src="/images/tech-right.png" alt="Technician 2" className="img-fluid" />
    </div>
  </div>
</div>
      <MobileRepair />
      <WhyUs />
      {/* Fixed Call & WhatsApp Buttons on Mobile */}
      <div className="fixed-mobile-buttons d-md-none">
        <a href="https://wa.me/918888668186" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp me-1"></i> WhatsApp
        </a>
        <a href="tel:+918888668186" className="call-btn">
          <i className="bi bi-telephone me-1"></i> Call
        </a>
      </div>
    </>
  );
}

export default HeroPage;
