import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HeroPage.css";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

import { Link } from "react-router-dom";
import MobileRepair from "./MobileRepair";

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
  });

  useEffect(() => {
    const uid = localStorage.getItem("userId");
    if (!uid) {
      setUserId("");
    } else {
      setUserId(uid);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData, userId };
      await axios.post(`${BASE_URL}/api/repair/submit`, payload);
      Swal.fire(
        "Success!",
        "Repair request submitted successfully!",
        "success"
      );
    } catch (err) {
      Swal.fire("Error", "Failed to submit repair request.", "error");
    }
  };

  const rotatingTexts = [
  "Mobile Phone Repair",
  "iPad Repair",
  "Apple Watch Repair",
  "MacBook Repair",
  "Tablet Repair"
];

const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500); // change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);


  const cards = [
    { label: "Mobile Repair", img: "/images/phone.webp" },
    { label: "iPad Repair", img: "/images/ipad.webp" },
    { label: "Apple Watch Repair", img: "/images/watch.webp" },
    { label: "MacBook Repair", img: "/images/macbook.webp" },
    { label: "Tablet Repair", img: "/images/tablet.webp" },
    { label: "Tempered Glass", img: "/images/temperedglass.webp" },
  ];

  return (
    <>
      <Navbar />
      <div className="hero-form-section py-1 bg-dark text-white">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <div className="text-section mb-4 mb-lg-0 pe-lg-5">
          <h1 className="fw-bold display-5">
  India’s First Doorstep{" "}
  <span key={index} className="text-animation">
    {rotatingTexts[index]}
  </span>
</h1>


            <hr className="text-danger" style={{ width: "80px" }} />
            <p className="lead">
              Get Convenient, Transparent, and Affordable iPhone repairs right
              at your doorstep, completed in just 30 minutes.
            </p>
            <div className="repair-cards-grid mt-4 text-dark">
              {cards.map((item, i) => (
                <Link
                  to={`/services/${item.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
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
              Get ready,
              <br />
              We will contact you shortly!
            </h5>
            <hr className="text-danger mx-auto" style={{ width: "50%" }} />
            <form onSubmit={handleSubmit} className="mt-3">
              <div className="row g-2">
                <div className="col-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone no."
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <select
                    name="brand"
                    className="form-select"
                    required
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
                <div className="col-6">
                  <select
                    name="issue"
                    className="form-select"
                    required
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
                <div className="col-6">
                  <input
                    type="text"
                    name="model"
                    placeholder="Enter device model"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    name="notes"
                    placeholder="Enter device faults"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="city"
                    placeholder="Select your city"
                    className="form-control"
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
                <button type="submit" className="btn btn-danger px-5 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="scrolling-info-bar py-3 bg-white">
        <div className="scrolling-items">
          {[...Array(2)].flatMap(() =>
            [
              { icon: "bi-shield-check", text: "Upto 6 Month Warranty" },
              { icon: "bi-tools", text: "Onsite Repair" },
              { icon: "bi-clock-history", text: "Quick Turn around time" },
              { icon: "bi-award", text: "High Quality Parts" },
              { icon: "bi-shield-check", text: "Upto 6 Month Warranty" },
              { icon: "bi-tools", text: "Onsite Repair" },
            ].map((item, i) => (
              <div className="scroll-item" key={i}>
                <i className={`bi ${item.icon} me-2`}></i> {item.text}
              </div>
            ))
          )}
        </div>
      </div>
      {/* Experience Banner Section */}
      <div className="experience-banner my-5">
        <div className="container d-flex align-items-center justify-content-between flex-column flex-md-row">
          {/* Left Technician Image */}
          <div className="technician-img">
            <img
              src="/images/tech-left.png"
              alt="Technician 1"
              className="img-fluid"
            />
          </div>

          {/* Center Text */}
          <div className="experience-text text-center mx-4">
            <h6 className="text-success fw-bold">10 YEARS' EXCLUSIVE</h6>
            <h2 className="fw-bold text-gradient">
              SMART DEVICE
              <br />
              REPAIR SERVICE
            </h2>
            <h5 className="text-gradient fw-semibold mt-2">EXPERIENCE</h5>
          </div>

          {/* Right Technician Image */}
          <div className="technician-img">
            <img
              src="/images/tech-right.png"
              alt="Technician 2"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <MobileRepair />
      {/* Why iFix Section */}
      {/* Why Choose iFix Section – One Screen Layout */}
      <div className="why-choose-section container d-flex flex-column flex-lg-row align-items-center justify-content-center py-5">
        {/* Left: Image */}
        <div className="image-col text-center mb-4 mb-lg-0">
          <img
            src="/images/piechart.png"
            alt="Why iFix"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "400px" }}
          />
        </div>

        {/* Right: Text */}
        <div className="text-col ps-lg-5">
          <h2 className="section-title">
            Why Choose <span className="text-primary">iFix?</span>
          </h2>
          <div className=" mb-3"></div>
          <p>
            iFix is a trusted local mobile repair shop based in Pimpri, Pune. We
            specialize in quick and reliable repairs for all major smartphone
            brands.
          </p>
          <p>
            Whether it’s a broken screen, dead battery, charging port issue, or
            water damage — we handle it all with expert care and genuine parts.
          </p>
          <p>
            We offer hassle-free doorstep pickup and delivery services within
            our local area, so you don’t have to leave your home to get your
            phone fixed.
          </p>
          <p>
            At iFix, we follow a “No Fix, No Fee” policy. If we can't repair
            your device, you won’t be charged — it’s that simple.
          </p>
          <p className="fw-bold text-primary">
            Visit iFix today — fast, affordable, and friendly mobile repairs you
            can count on.
          </p>
        </div>
      </div>

      {/* Chat Prompt / CTA */}
      <div className="chat-cta-section text-center py-5">
        <h4>Need help? Chat with us now</h4>
        <a
          href="https://wa.me/8888668186"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success mt-2"
        >
          Chat on WhatsApp
        </a>
      </div>
      {/* Testimonials */}
      <div className="testimonials-section py-5">
        <h2 className="text-center">What Our Customers Say</h2>
        <div className="underline mx-auto mb-4"></div>
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          <div className="testimonial-card">
            <p>“Fast and reliable service! Got my iPhone fixed in 2 days.”</p>
            <div>⭐⭐⭐⭐⭐</div>
            <small>- Aditi Sharma</small>
          </div>
          <div className="testimonial-card">
            <p>“Great experience! Pickup and delivery made it hassle-free.”</p>
            <div>⭐⭐⭐⭐⭐</div>
            <small>- Raj Malhotra</small>
          </div>
          <div className="testimonial-card">
            <p>“Affordable and genuine parts. My phone looks brand new!”</p>
            <div>⭐⭐⭐⭐⭐</div>
            <small>- Sneha Verma</small>
          </div>
        </div>
      </div>

      {/* Service Area Map */}
      <div className="map-section py-5 text-center">
        <h2 className="section-title">Locate Us</h2>

        <p>Click on the map below to open in Google Maps</p>

        <div className="map-wrapper mt-4">
          <a
            href="https://www.google.com/maps/place/18%C2%B037'12.9%22N+73%C2%B048'15.1%22E"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              title="iFix Mobile Repair Pimpri"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d945.5920210223957!2d73.804184!3d18.6202469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzEyLjkiTiA3M8KwNDgnMTUuMSJF!5e0!3m2!1sen!2sin!4v1716536477903!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                border: "0",
                borderRadius: "15px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}
            ></iframe>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-section text-white bg-dark pt-4">
        <div className="container text-center text-md-start">
          <div className="row">
            {/* About */}
            <div className="col-md-4 mb-3">
              <h5>iFix Mobile Repair - Pimpri</h5>
              <p>
                Trusted mobile repair shop in Pimpri offering fast, reliable,
                and affordable services for all major brands. Visit our store
                for screen replacement, battery issues, water damage, and more.
                Walk-ins welcome — no appointment needed!
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-3">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/request"
                    className="text-white text-decoration-none"
                  >
                    Request Repair
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/admin" className="text-white text-decoration-none">
                    Admin Login
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-4 mb-3">
              <h6>Contact Us</h6>
              <p className="mb-1">📍 Pimpri, Pune, Maharashtra</p>
              <p className="mb-1">📞 +91 8888668186</p>
              <p className="mb-1">✉️ support@ifixmobiles.in</p>

              <a
                href="https://www.instagram.com/ifix_smartphone_repairs?igsh=bTA4cTR2MW1wM2o3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-underline d-block"
              >
                📸 Follow us on Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HeroPage;
