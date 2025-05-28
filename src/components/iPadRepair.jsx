import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/iPadRepair.css";

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

function iPadRepair() {
  return (
    <div className="ipad-repair-section container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-8">
          <h3 className="fw-bold text-dark">
            <span className="text-warning border-start border-4 ps-2">iPad Repair</span>
          </h3>
          <p className="text-muted mt-2">
            Need an iPad Repair? We provide transparent, affordable, and convenient services right at your doorstep.
          </p>

          <div className="row g-3 mt-4">
            {ipadServices.map((service, index) => (
              <div className="col-6 col-md-3 col-lg-2 d-flex" key={index}>
                <Link to="/services/ipad" className="text-decoration-none w-100">
                  <div className="ipad-card h-100">
                    <img
                      src={`/images/${service.icon}`}
                      alt={service.label}
                      className="ipad-icon"
                    />
                    <p className="ipad-label">{service.label}</p>
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
              src="/images/broken-ipad.png"
              alt="Broken iPad"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default iPadRepair;
