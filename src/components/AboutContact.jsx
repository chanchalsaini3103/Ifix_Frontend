import React from "react";
import "../styles/AboutContact.css";

function AboutContact() {
  return (
    <div className="about-contact-wrapper py-5">
      {/* About Us Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-4">About Us</h2>
        <p className="about-text">
          iFix Mobile Repair marked its presence in 2020 as a service center in Pimpri, Pune,
          providing service for smartphones. We at iFix have aligned our efforts to the
          country's vision to support the upcoming digital revolution with a wide variety of
          smartphone services. We are young, enthusiastic, and committed to excellence.
          Having serviced over 18,000 smartphones with a satisfied client base of over 11,000,
          we offer a single window for any smartphone issue like broken screens, water damage,
          charging problems, or power issues. We proudly serve our clients with genuine parts
          and professional care.
        </p>
      </div>

      {/* Contact Us Section */}
      <div className="contact-section text-center py-5 bg-light">
        <h2 className="mb-4">Get in Touch</h2>
        <p className="mb-5">
          We're here to help you with any mobile repair queries. Reach out to us below.
        </p>

        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <h5 className="contact-title">Address</h5>
              <p className="contact-info">
                iFix Mobile Repair<br />
                2nd Floor, Pimpri Chowk,<br />
                Pune, Maharashtra 411018
              </p>
            </div>

            <div className="col-md-3">
              <h5 className="contact-title">Phone</h5>
              <p className="contact-info">+91 8448282445</p>
            </div>

            <div className="col-md-3">
              <h5 className="contact-title">Email</h5>
              <p className="contact-info">support@ifixmobiles.in</p>
            </div>

            <div className="col-md-3">
              <h5 className="contact-title">Follow Us</h5>
              <div className="social-icons">
                <a href="#" className="me-3"><i className="fab fa-facebook"></i></a>
                <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
                <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

        <footer className="footer-section text-white bg-dark pt-4">
        <div className="container text-center text-md-start">
          <div className="row">
            {/* About */}
            <div className="col-md-4 mb-3">
              <h5>iFix Mobile Repair</h5>
              <p>
                Fast, reliable, and professional mobile repair services at your
                doorstep. Serving over 18,000 pin codes across India.
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
                href="https://maps.app.goo.gl/XRLjtocjKB6tcox1A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center py-3 bg-secondary mt-4">
          © {new Date().getFullYear()} iFix Mobile Repair. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default AboutContact;
