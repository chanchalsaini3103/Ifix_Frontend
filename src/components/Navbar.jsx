import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HeroPage.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black shadow-sm fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: Logo + Brand Name */}
        <div className="d-flex align-items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            height="80"
            className="me-2"
          />
          <div className="text-white fw-bold fs-5">iFix Mobile Repair</div>
        </div>

        {/* Center: Navigation Links */}
        <div className="d-none d-lg-flex justify-content-center flex-grow-1">
          <ul className="navbar-nav custom-nav-links">
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/request">Request Repair</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/register">Register</Link>
            </li>
          </ul>
        </div>

        {/* Right: Login Button */}
        <div>
          <Link
            to="/login"
            className="login-nav-btn text-white border border-white px-3 py-1 rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
