import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import Swal from "sweetalert2";
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
import { deviceModelMap } from "../data/deviceData";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userId");
  const [slideDown, setSlideDown] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showBrands, setShowBrands] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => setSlideDown(true), 100);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleSearch = () => {
    const query = searchTerm.trim().toLowerCase();
    let matched = null;

    for (const brand in deviceModelMap) {
      const models = deviceModelMap[brand];
      for (const model of models) {
        const modelName = typeof model === "string" ? model : model.name;
        if (modelName.toLowerCase() === query) {
          matched = { brand, model: modelName };
          break;
        }
      }
      if (matched) break;
    }

    if (matched) {
      const brandSlug = matched.brand.toLowerCase().replace(/\s+/g, "-");
      navigate(`/services/mobile-repair/${brandSlug}`, {
        state: { brand: matched.brand },
      });
    } else {
      Swal.fire("Not Found", "Model not found. Please try again.", "info");
    }
  };

  const brands = [
    { name: "Apple IPhone Repair", path: "apple" },
    { name: "Samsung Repair", path: "samsung" },
    { name: "Motorola Repair", path: "motorola" },
    { name: "Realme Repair", path: "realme" },
    { name: "Oppo Repair", path: "oppo" },
    { name: "Vivo Repair", path: "vivo" },
    { name: "OnePlus Repair", path: "oneplus" },
    { name: "Mi Repair", path: "mi" },
  ];

  const services = [
    "Mobile Repair",
    "Apple Watch Repair",
    "iPad Repair",
    "MacBook Repair",
    "Tablet Repair",
  ];

  return (
    <div className="navbar-wrapper fixed-top">
      {/* White Top Bar */}
      <div className="top-white-bar bg-white shadow-sm py-2 px-3 px-md-4 d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2 logo-text" onClick={() => navigate("/")}>
            <img src="/images/logo.png" alt="Logo" height="40" />
            <span className="text-dark fw-bold fs-5 mb-0">iFix Mobile Repair</span>
          </div>
          <button className="navbar-toggler d-md-none border-0" type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
            <span className="navbar-toggler-icon" />
          </button>
        </div>

        {/* Search (visible on md+) */}
        <div className="top-bar-right d-none d-md-flex align-items-center mt-2 mt-md-0">
          <div className="search-wrapper d-flex">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch} className="btn btn-sm btn-danger ms-1">Search</button>
          </div>
          <span className="text-dark fw-semibold ms-3 phone-info">
            📞 +91 7821820239
          </span>
        </div>
      </div>

      {/* Search bar for mobile */}
      <div className="d-flex d-md-none px-3 py-2 bg-white border-bottom">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Search model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch} className="btn btn-sm btn-danger ms-2">Search</button>
      </div>

      {/* Black Main Navbar */}
      <nav className={`navbar navbar-expand-lg bg-black shadow-sm ${slideDown ? "slide-down" : ""}`}>
        <div className="container-fluid">
          <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}>
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link className="nav-link text-white nav-underline" to="/">
                  <FaHome className="me-1" /> Home
                </Link>
              </li>

              <li className="nav-item dropdown custom-dropdown" onClick={() => setShowBrands(!showBrands)}>
                <span className="nav-link text-white dropdown-toggle">
                  Top Brands <FaChevronDown className="ms-1" />
                </span>
                {showBrands && (
                  <ul className="dropdown-menu show">
                    {brands.map((brand, index) => (
                      <li key={index}>
                        <Link className="dropdown-item" to={`/services/mobile-repair/${brand.path}`}>
                          {brand.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="nav-item dropdown custom-dropdown" onClick={() => setShowServices(!showServices)}>
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

              {!isLoggedIn ? (
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
              ) : (
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
    </div>
  );
}

export default Navbar;
