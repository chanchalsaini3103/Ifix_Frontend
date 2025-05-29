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
  { icon: "power.svg", label: "Mobile Power Button Repair" },
  { icon: "water.svg", label: "Mobile Water Damage Repair" },
  { icon: "motherboard.svg", label: "Mobile Motherboard Repair" },
  { icon: "software.svg", label: "Mobile Software Repair" }
];

const ipadServices = [
  { icon: "ipad/ipad-screen.svg", label: "iPad Screen Repair" },
  { icon: "ipad/battery.svg", label: "iPad Battery Repair" },
  { icon: "ipad/chargingcharging.svg", label: "iPad Charging Repair" },
  { icon: "ipad/ipad-screen-glass.svg", label: "iPad Screen Glass Repair" },
  { icon: "ipad/speaker.svg", label: "iPad Speaker Repair" },
  { icon: "ipad/camera.svg", label: "iPad Camera Repair" },
  { icon: "ipad/power.svg", label: "iPad Power Button Repair" },
  { icon: "ipad/water.svg", label: "iPad Water Damage Repair" },
  { icon: "ipad/motherboard.svg", label: "iPad Motherboard Repair" },
  { icon: "ipad/software.svg", label: "iPad Software Repair" },
];

const watchServices = [
  { icon: "watch/watch-screen.png", label: "Apple Watch Screen Repair" },
  { icon: "watch/battery.png", label: "Apple Watch Battery Repair" },
  { icon: "watch/watch-glass.svg", label: "Apple Watch Screen Glass Repair" },
  { icon: "watch/watch-backglass.svg", label: "Apple Watch Back Glass Repair" },
  { icon: "watch/speaker.svg", label: "Apple Watch Speaker Repair" },
  { icon: "watch/charging.png", label: "Apple Watch Charging Repair" },
  { icon: "watch/crown.svg", label: "Apple Watch Crown Button Repair" },
];
const macbookServices = [
  { icon: "macbook/macbook-screen.png", label: "MacBook Screen Repair" },
  { icon: "macbook/battery.png", label: "MacBook Battery Repair" },
  { icon: "macbook/trackpad.png", label: "MacBook Trackpad Repair" },
  { icon: "macbook/logicboard.svg", label: "MacBook Logic Board Repair" },
  { icon: "macbook/keyboard.svg", label: "MacBook Keyboard Repair" },
  { icon: "macbook/ssd.png", label: "MacBook SSD Upgrade" },
  { icon: "macbook/charging-port.png", label: "MacBook Charging Port Repair" },
  { icon: "macbook/speaker.png", label: "MacBook Speaker Repair" },
  { icon: "macbook/liquid.png", label: "MacBook Liquid Damage Repair" },
  { icon: "macbook/flexgate.png", label: "MacBook Flexgate Repair" },
  { icon: "macbook/touchbar.png", label: "MacBook Touch Bar Repair" },
];


function MobileRepair() {
  return (
    <>
      {/* Mobile Repair */}
      <div className="mobile-repair-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src="/images/broken-phone.webp" alt="Broken Phone" className="img-fluid rounded" />
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
              <img src="/images/broken-ipad.webp" alt="Broken iPad" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Apple Watch Repair */}
      <div className="watch-repair-section container py-5">
        <div className="row align-items-center">
          <div className="col-6 col-md-4 col-lg-2-5 text-center mb-4 mb-md-0">
            <div className="bg-light rounded p-3 shadow-sm">
              <img src="/images/broken-watch.webp" alt="Broken Watch" className="img-fluid rounded" />
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
          src="/images/broken-macbook.webp"
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
