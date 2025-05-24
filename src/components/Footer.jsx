import React from "react";
import "../styles/Navbar.css"; // Reuse CSS from Navbar

function Footer() {
  return (
    <footer className="footer mt-auto bg-dark text-white">
      <div className="container text-center py-2">
        <small>&copy; {new Date().getFullYear()} iFix Mobile Repair. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
