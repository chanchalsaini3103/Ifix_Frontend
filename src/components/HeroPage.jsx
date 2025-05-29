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
    if (!uid) setUserId("");
    else setUserId(uid);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData, userId };
      await axios.post(`${BASE_URL}/api/repair/submit`, payload);
      Swal.fire("Success!", "Repair request submitted successfully!", "success");
    } catch (err) {
      Swal.fire("Error", "Failed to submit repair request.", "error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="hero-form-section py-1 bg-dark text-white">
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
                >
                  <div className="repair-card">
                    <img src={item.img} alt={item.label} />
                    <p>{item.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="form-card bg-white text-dark p-4 rounded shadow" style={{ maxWidth: "500px", width: "100%" }}>
            <h5 className="text-center fw-bold mb-3">Get ready,<br />We will contact you shortly!</h5>
            <hr className="text-danger mx-auto" style={{ width: "50%" }} />
            <form onSubmit={handleSubmit} className="mt-3">
              <div className="row g-2">
                <div className="col-6"><input type="text" name="name" placeholder="Name" className="form-control" required onChange={handleChange} /></div>
                <div className="col-6"><input type="tel" name="phone" placeholder="Phone no." className="form-control" required onChange={handleChange} /></div>
                <div className="col-6"><select name="brand" className="form-select" required onChange={handleChange}><option value="">Select brand</option><option>Apple</option><option>Samsung</option><option>MI</option><option>Realme</option><option>Vivo</option><option>OnePlus</option><option>Oppo</option><option>Other</option></select></div>
                <div className="col-6"><select name="issue" className="form-select" required onChange={handleChange}><option value="">Select issue</option><option>Screen Damage</option><option>Battery Issue</option><option>Water Damage</option><option>Charging Issue</option><option>Software Issue</option><option>Other</option></select></div>
                <div className="col-6"><input type="text" name="model" placeholder="Enter device model" className="form-control" required onChange={handleChange} /></div>
                <div className="col-6"><input type="text" name="notes" placeholder="Enter device faults" className="form-control" onChange={handleChange} /></div>
                <div className="col-12"><input type="text" name="city" placeholder="Select your city" className="form-control" onChange={handleChange} /></div>
              </div>
              <div className="mt-3 d-flex justify-content-center gap-4 small text-danger fw-semibold">
                <span>✔️ Doorstep Repair</span>
                <span>✔️ Secure & Trusted</span>
                <span>✔️ 10 Years of Trusted Service</span>
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-danger px-5 py-2">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <MobileRepair />
      <WhyUs />
    </>
  );
}


export default HeroPage;