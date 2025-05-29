import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import {
  FaHome,
  FaTools,
  FaEnvelopeOpenText,
  FaClipboardList,
  FaPhoneAlt,
  FaUserPlus,
  FaSignInAlt,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userId");
  const [slideDown, setSlideDown] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showBrands, setShowBrands] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    setTimeout(() => setSlideDown(true), 100);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const brands = [
    "Apple IPhone Repair",
    "Mi/Xiaomi Repair",
    "Motorola Repair",
    "OnePlus Repair",
    "Oppo Repair",
    "Vivo Repair",
    "Samsung Repair",
    "Realme Repair",
  ];

  const services = [
    "Mobile Repair",
    "Apple Watch Repair",
    "iPad Repair",
    "MacBook Repair",
    "Tablet Repair",
  ];

  return (
    <>
      {/* Top White Bar */}
      <div className="top-white-bar bg-white shadow-sm py-2 px-4 d-flex align-items-center justify-content-between">
        <div
          className="d-flex align-items-center gap-2 logo-text"
          onClick={() => navigate("/")}
        >
          <img src="/images/logo.png" alt="Logo" height="40" />
          <span className="text-dark fw-bold fs-5 mb-0">iFix Mobile Repair</span>
        </div>
       <div className="top-bar-right d-flex align-items-center">
  <div className="search-wrapper">
    <input
      type="text"
      className="form-control form-control-sm"
      placeholder="Search brand or model..."
    />
    <span className="search-icon">🔍</span>
  </div>
  <span className="text-dark fw-semibold ms-3 phone-info">📞 +91 8888668186</span>
</div>

      </div>

      {/* Main Navigation */}
      <nav className={`navbar navbar-expand-lg bg-black shadow-sm ${slideDown ? "slide-down" : ""}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler text-white border-white"
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link className="nav-link text-white nav-underline" to="/">
                  <FaHome className="me-1" /> Home
                </Link>
              </li>

              {/* Top Brands */}
              <li
                className="nav-item dropdown custom-dropdown"
                onClick={() => setShowBrands(!showBrands)}
                onMouseLeave={() => setShowBrands(false)}
              >
                <span className="nav-link text-white dropdown-toggle">
                  Top Brands <FaChevronDown className="ms-1" />
                </span>
                {showBrands && (
                  <ul className="dropdown-menu show">
                    {brands.map((brand, index) => (
                      <li key={index}>
                        <Link className="dropdown-item" to={`/brands/${brand.split(" ")[0]}`}>
                          {brand}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Repair Services */}
              <li
                className="nav-item dropdown custom-dropdown"
                onClick={() => setShowServices(!showServices)}
                onMouseLeave={() => setShowServices(false)}
              >
                <span className="nav-link text-white dropdown-toggle">
                  Repair Service <FaChevronDown className="ms-1" />
                </span>
                {showServices && (
                  <ul className="dropdown-menu show">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link className="dropdown-item" to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}>
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white nav-underline" to="/services">
                  <FaTools className="me-1" /> Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white nav-underline" to="/request">
                  <FaClipboardList className="me-1" /> Request Repair
                </Link>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link text-white nav-underline" to="/my-requests">
                    <FaEnvelopeOpenText className="me-1" /> My Requests
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link text-white nav-underline" to="/contact">
                  <FaPhoneAlt className="me-1" /> Contact
                </Link>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white nav-underline" to="/register">
                      <FaUserPlus className="me-1" /> Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link text-white nav-underline">
                      <FaSignInAlt className="me-1" /> Login
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2" onClick={handleLogout}>
                    <FaSignOutAlt className="me-1" /> Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
