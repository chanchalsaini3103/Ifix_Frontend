import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HeroPage.css";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";

function HeroPage() {
  return (
    <>
     <Navbar />

      <div className="pt-5">
        <ImageSlider />
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-container">
        <h2 className="text-center">How It Works</h2>
        <div className="underline mx-auto"></div>
        <div className="steps-container">
          <div className="step-box">
            <div className="icon-circle">📱</div>
            <h5>BOOK REPAIR SERVICE</h5>
            <p>
              Select your device and book repair service as per your
              requirement. Call our executive at 8888668186 for any assistance
              in placing the order.
            </p>
          </div>
          <div className="step-box">
            <div className="icon-circle">🚚</div>
            <h5>FREE PICKUP OF YOUR DEVICE</h5>
            <p>
              Our executive partner will pick your device right from the comfort
              of your home or office.
            </p>
          </div>
          <div className="step-box">
            <div className="icon-circle">🔧</div>
            <h5>REPAIR AT OUR LAB</h5>
            <p>
              Our expert technical team will diagnose and fix your device to
              perfection.
            </p>
          </div>
          <div className="step-box">
            <div className="icon-circle">📦</div>
            <h5>FREE & FAST RETURN</h5>
            <p>
              Your repaired device will be delivered to you in just a day
              subject to the location and repair type.
            </p>
          </div>
        </div>
      </div>

      {/* Why iFix Section */}
      {/* Why Choose iFix Section – One Screen Layout */}
      <div className="why-choose-section container d-flex flex-column flex-lg-row align-items-center justify-content-center py-5">
        {/* Left: Image */}
        <div className="image-col text-center mb-4 mb-lg-0">
          <img
            src="/images/piechart.png"
            alt="Why iFix"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "400px" }}
          />
        </div>

        {/* Right: Text */}
        <div className="text-col ps-lg-5">
          <h2 className="section-title">
            Why Choose <span className="text-primary">iFix?</span>
          </h2>
          <div className=" mb-3"></div>
          <p>
            iFix is a trusted local mobile repair shop based in Pimpri, Pune. We
            specialize in quick and reliable repairs for all major smartphone
            brands.
          </p>
          <p>
            Whether it’s a broken screen, dead battery, charging port issue, or
            water damage — we handle it all with expert care and genuine parts.
          </p>
          <p>
            We offer hassle-free doorstep pickup and delivery services within
            our local area, so you don’t have to leave your home to get your
            phone fixed.
          </p>
          <p>
            At iFix, we follow a “No Fix, No Fee” policy. If we can't repair
            your device, you won’t be charged — it’s that simple.
          </p>
          <p className="fw-bold text-primary">
            Visit iFix today — fast, affordable, and friendly mobile repairs you
            can count on.
          </p>
        </div>
      </div>

      {/* What We Repair Section */}
      <div className="repair-card-wrapper text-center py-5">
  <h2 className="section-title mb-4">Repair Services</h2>

  <div className="repair-scroll-container d-flex justify-content-center">
    <div className="repair-scroll d-flex overflow-auto">
      {[
        { icon: "screen.png", label: "SCREEN" },
        { icon: "battery.png", label: "BATTERY" },
        { icon: "mic.png", label: "MIC" },
        { icon: "receiver.png", label: "RECEIVER" },
        { icon: "charging.png", label: "CHARGING JACK" },
        { icon: "speaker.png", label: "SPEAKER" },
        { icon: "back.png", label: "BACK PANEL" },
      ].map((item, index) => (
        <div key={index} className="repair-card text-center mx-3">
          <img src={`/images/${item.icon}`} alt={item.label} />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Chat Prompt / CTA */}
      <div className="chat-cta-section text-center py-5">
        <h4>Need help? Chat with us now</h4>
        <a
          href="https://wa.me/8888668186"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success mt-2"
        >
          Chat on WhatsApp
        </a>
      </div>
      {/* Testimonials */}
      <div className="testimonials-section py-5">
        <h2 className="text-center">What Our Customers Say</h2>
        <div className="underline mx-auto mb-4"></div>
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          <div className="testimonial-card">
            <p>“Fast and reliable service! Got my iPhone fixed in 2 days.”</p>
            <div>⭐⭐⭐⭐⭐</div>
            <small>- Aditi Sharma</small>
          </div>
          <div className="testimonial-card">
            <p>“Great experience! Pickup and delivery made it hassle-free.”</p>
            <div>⭐⭐⭐⭐⭐</div>
            <small>- Raj Malhotra</small>
          </div>
          <div className="testimonial-card">
            <p>“Affordable and genuine parts. My phone looks brand new!”</p>
            <div>⭐⭐⭐⭐⭐</div>
            <small>- Sneha Verma</small>
          </div>
        </div>
      </div>
      
      {/* Service Area Map */}
    <div className="map-section py-5 text-center">
  <h2 className="section-title">Locate Us</h2>
  
  <p>Click on the map below to open in Google Maps</p>

  <div className="map-wrapper mt-4">
    <a
      href="https://www.google.com/maps/place/18%C2%B037'12.9%22N+73%C2%B048'15.1%22E"
      target="_blank"
      rel="noopener noreferrer"
    >
      <iframe
        title="iFix Mobile Repair Pimpri"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d945.5920210223957!2d73.804184!3d18.6202469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzEyLjkiTiA3M8KwNDgnMTUuMSJF!5e0!3m2!1sen!2sin!4v1716536477903!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          border: "0",
          borderRadius: "15px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
      ></iframe>
    </a>
  </div>
</div>


      {/* Footer */}
      <footer className="footer-section text-white bg-dark pt-4">
        <div className="container text-center text-md-start">
          <div className="row">
            {/* About */}
            <div className="col-md-4 mb-3">
              <h5>iFix Mobile Repair - Pimpri</h5>
<p>
  Trusted mobile repair shop in Pimpri offering fast, reliable, and affordable services for all major brands. Visit our store for screen replacement, battery issues, water damage, and more. Walk-ins welcome — no appointment needed!
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

       
      </footer>
    </>
  );
}

export default HeroPage;
