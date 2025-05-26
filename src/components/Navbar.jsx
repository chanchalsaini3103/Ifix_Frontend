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
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userId");
  const [slideDown, setSlideDown] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => setSlideDown(true), 100);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-black shadow-sm fixed-top ${
        slideDown ? "slide-down" : ""
      }`}
    >
      <div className="container-fluid">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            height="50"
            className="me-2"
          />
          <span className="navbar-brand text-white fw-bold fs-5 mb-0">
            iFix Mobile Repair
          </span>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler text-white border-white"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div
          className={`collapse navbar-collapse ${
            !isCollapsed ? "show" : ""
          }`}
        >
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <FaHome className="me-1" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">
                <FaTools className="me-1" /> Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/request">
                <FaClipboardList className="me-1" /> Request Repair
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/my-requests">
                <FaEnvelopeOpenText className="me-1" /> My Requests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                <FaPhoneAlt className="me-1" /> Contact
              </Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/register">
                  <FaUserPlus className="me-1" /> Register
                </Link>
              </li>
            )}
            <li className="nav-item">
              {isLoggedIn ? (
                <button
                  className="btn btn-outline-light w-100 mt-2"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="me-1" /> Logout
                </button>
              ) : (
                <Link to="/login" className="btn btn-outline-light w-100 mt-2">
                  <FaSignInAlt className="me-1" /> Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
