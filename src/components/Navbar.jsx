import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css"; // external CSS

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [slideDown, setSlideDown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlideDown(true);
    }, 100); // slight delay
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg bg-black shadow-sm fixed-top ${slideDown ? 'slide-down' : ''}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo + Brand */}
        <div className="d-flex align-items-center">
          <img src="/images/logo.jpeg" alt="Logo" height="60" className="me-2" />
          <div className="text-white fw-bold fs-5">iFix Mobile Repair</div>
        </div>

        {/* Nav Links */}
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
            <Link to="/my-requests" className="btn btn-outline-light ms-3">
  My Requests
</Link>

            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-item mx-2">
                <Link className="nav-link text-white" to="/register">Register</Link>
              </li>
            )}
          </ul>
        </div>

        {/* Login/Logout */}
        <div>
          {isLoggedIn ? (
            <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login" className="login-nav-btn text-white border border-white px-3 py-1 rounded">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
