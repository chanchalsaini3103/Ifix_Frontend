import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userId");
  const [slideDown, setSlideDown] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // for toggling mobile menu

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => setSlideDown(true), 100);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg bg-black shadow-sm fixed-top ${slideDown ? 'slide-down' : ''}`}>
      <div className="container-fluid">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img src="/images/logo.jpeg" alt="Logo" height="60" className="me-2" />
          <span className="navbar-brand text-white fw-bold fs-5 mb-0">iFix Mobile Repair</span>
        </div>

        {/* Toggle Button */}
        <button
          className="navbar-toggler text-white border-white"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        {/* Collapsible Nav Items */}
        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/request">Request Repair</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/my-requests">My Requests</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/register">Register</Link>
              </li>
            )}
            <li className="nav-item">
              {isLoggedIn ? (
                <button className="btn btn-outline-light w-100 mt-2" onClick={handleLogout}>Logout</button>
              ) : (
                <Link to="/login" className="btn btn-outline-light w-100 mt-2">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
