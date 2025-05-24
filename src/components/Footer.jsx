import React from "react";
import "../styles/Navbar.css";

function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} iFix Mobile Repair. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
