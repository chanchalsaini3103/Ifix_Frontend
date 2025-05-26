import React from "react";
import "../styles/Footer.css"; // Make sure this exists separately

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        &copy; {new Date().getFullYear()} iFix Mobile Repair. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
