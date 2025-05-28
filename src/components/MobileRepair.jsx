import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MobileRepair.css";
import { Link } from "react-router-dom";

const mobileServices = [
  { icon: "screen.png", label: "Mobile Screen Repair" },
  { icon: "backglass.png", label: "Mobile Back Glass Repair" },
  { icon: "battery.png", label: "Mobile Battery Repair" },
  { icon: "charging.png", label: "Mobile Charging Repair" },
  { icon: "camera.png", label: "Mobile Camera Repair" },
  { icon: "speaker.png", label: "Mobile Speaker Repair" },
  { icon: "mic.png", label: "Mobile Mic Repair" },
  { icon: "power.png", label: "Mobile Power Button Repair" },
  { icon: "water.png", label: "Mobile Water Damage Repair" },
  { icon: "motherboard.png", label: "Mobile Motherboard Repair" },
  { icon: "software.png", label: "Mobile Software Repair" }
];

const ipadServices = [
  { icon: "ipad-screen.png", label: "iPad Screen Repair" },
  { icon: "battery.png", label: "iPad Battery Repair" },
  { icon: "charging.png", label: "iPad Charging Repair" },
  { icon: "ipad-screen-glass.png", label: "iPad Screen Glass Repair" },
  { icon: "speaker.png", label: "iPad Speaker Repair" },
  { icon: "camera.png", label: "iPad Camera Repair" },
  { icon: "power.png", label: "iPad Power Button Repair" },
  { icon: "water.png", label: "iPad Water Damage Repair" },
  { icon: "motherboard.png", label: "iPad Motherboard Repair" },
  { icon: "software.png", label: "iPad Software Repair" },
];

const watchServices = [
  { icon: "watch-screen.png", label: "Apple Watch Screen Repair" },
  { icon: "battery.png", label: "Apple Watch Battery Repair" },
  { icon: "watch-glass.png", label: "Apple Watch Screen Glass Repair" },
  { icon: "watch-backglass.png", label: "Apple Watch Back Glass Repair" },
  { icon: "speaker.png", label: "Apple Watch Speaker Repair" },
  { icon: "charging.png", label: "Apple Watch Charging Repair" },
  { icon: "crown.png", label: "Apple Watch Crown Button Repair" },
];
const macbookServices = [
  { icon: "macbook-screen.png", label: "MacBook Screen Repair" },
  { icon: "battery.png", label: "MacBook Battery Repair" },
  { icon: "trackpad.png", label: "MacBook Trackpad Repair" },
  { icon: "logicboard.png", label: "MacBook Logic Board Repair" },
  { icon: "keyboard.png", label: "MacBook Keyboard Repair" },
  { icon: "ssd.png", label: "MacBook SSD Upgrade" },
  { icon: "charging-port.png", label: "MacBook Charging Port Repair" },
  { icon: "speaker.png", label: "MacBook Speaker Repair" },
  { icon: "liquid.png", label: "MacBook Liquid Damage Repair" },
  { icon: "flexgate.png", label: "MacBook Flexgate Repair" },
  { icon: "touchbar.png", label: "MacBook Touch Bar Repair" },
];


function MobileRepair() {
  return (
    <>
      {/* Mobile Repair */}
      <div className="mobile-repair-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src="/images/broken-phone.png" alt="Broken Phone" className="img-fluid rounded" />
          </div>
          <div className="col-md-8">
            <h3 className="text-orange fw-bold">Mobile Repair</h3>
            <p className="text-muted">Get Convenient, Transparent, and Affordable Mobile Repairs right at your doorstep, completed in just 30 minutes.</p>
            <div className="row g-3 mt-3">
              {mobileServices.map((service) => (
                <div className="col-6 col-md-2" key={service.label}>
                  <Link to="/services" className="text-decoration-none">
                    <div className="service-card text-center p-3">
                      <img src={`/images/${service.icon}`} alt={service.label} className="service-icon mb-2" />
                      <p className="service-label m-0">{service.label}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* iPad Repair */}
      <div className="ipad-repair-section container py-5">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h3 className="fw-bold text-dark">
              <span className="text-warning border-start border-4 ps-2">iPad Repair</span>
            </h3>
            <p className="text-muted mt-2">Need an iPad Repair? We provide transparent, affordable, and convenient services right at your doorstep.</p>
            <div className="row g-3 mt-4">
              {ipadServices.map((service) => (
                <div className="col-6 col-md-3 col-lg-2 d-flex" key={service.label}>
                  <Link to="/services/ipad" className="text-decoration-none w-100">
                    <div className="ipad-card text-center p-3 h-100">
                      <img src={`/images/${service.icon}`} alt={service.label} className="service-icon mb-2" />
                      <p className="service-label m-0">{service.label}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 text-center mt-4 mt-lg-0">
            <div className="bg-light rounded p-3 shadow-sm">
              <img src="/images/broken-ipad.png" alt="Broken iPad" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Apple Watch Repair */}
      <div className="watch-repair-section container py-5">
        <div className="row align-items-center">
          <div className="col-6 col-md-4 col-lg-2-5 text-center mb-4 mb-md-0">
            <div className="bg-light rounded p-3 shadow-sm">
              <img src="/images/broken-watch.png" alt="Broken Watch" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-8">
            <h3 className="fw-bold text-dark">
              <span className="text-warning border-start border-4 ps-2">Apple Watch Repair</span>
            </h3>
            <p className="text-muted mt-2">Experience hassle-free Apple Watch repairs with our transparent, affordable, and convenient solutions.</p>
            <div className="row g-3 mt-3">
              {watchServices.map((service) => (
                <div className="col-6 col-md-3 col-lg-2 d-flex" key={service.label}>
                  <Link to="/services/watch" className="text-decoration-none w-100">
                    <div className="ipad-card text-center p-3 h-100">
                      <img src={`/images/${service.icon}`} alt={service.label} className="service-icon mb-2" />
                      <p className="service-label m-0">{service.label}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

<div className="macbook-repair-section container py-5">
  <div className="row align-items-center">
    {/* Left Content */}
    <div className="col-lg-8">
      <h3 className="fw-bold text-dark">
        <span className="text-warning border-start border-4 ps-2">MacBook Repair</span>
      </h3>
      <p className="text-muted mt-2">
        Experience hassle-free MacBook repairs with our transparent, affordable, and convenient solutions.
      </p>
      <div className="row g-3 mt-4">
        {macbookServices.map((service) => (
          <div className="col-6 col-md-3 col-lg-2 d-flex" key={service.label}>
            <Link to="/services/macbook" className="text-decoration-none w-100">
              <div className="ipad-card text-center p-3 h-100">
                <img
                  src={`/images/${service.icon}`}
                  alt={service.label}
                  className="service-icon mb-2"
                />
                <p className="service-label m-0">{service.label}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>

    {/* Right Image */}
    <div className="col-lg-4 text-center mt-4 mt-lg-0">
      <div className="bg-light rounded p-3 shadow-sm">
        <img
          src="/images/broken-macbook.png"
          alt="Broken MacBook"
          className="img-fluid rounded"
        />
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default MobileRepair;
