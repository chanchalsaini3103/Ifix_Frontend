import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; 

import "../styles/DeviceIssues.css";

const issueMap = {
  phones: [
    { name: "DISPLAY", icon: "/problems/display.png" },
    { name: "TOUCH GLASS", icon: "/problems/touch.png" },
    { name: "BATTERY", icon: "/problems/battery.png" },
    { name: "CHARGING PORT", icon: "/problems/charging.png" },
    { name: "EAR SPEAKER", icon: "/problems/speaker.png" }
  ],
  ipads: [
    "Screen Damage", "Battery Issue", "Water Damage", "Charging Issue", "Software Issue", "Other"
  ],
  tablets: [
    "Screen Damage", "Battery Issue", "Water Damage", "Charging Issue", "Software Issue", "Other"
  ],
  macbooks: [
    "Screen Replacement", "Battery Issue", "Water Damage", "Keyboard Not Working", "Charging Problem", "Motherboard Issue"
  ],
  watches: [
    "Screen Repair", "Battery Repair", "Screen Glass Repair", "Back Glass Repair",
    "Speaker Repair", "Charging Repair", "Crown Button Repair"
  ]
};

function DeviceIssueSelector({ deviceType }) {
  const { brand, model } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const finalBrand = state?.brand || brand;
  const finalModel = state?.model || model;

  const issues = issueMap[deviceType] || [];

  const handleClick = (issue) => {
    const issueName = typeof issue === "string" ? issue : issue.name;
    navigate("/order-details", {
      state: { brand: finalBrand, model: finalModel, issue: issueName }
    });
  };

  if (!finalBrand || !finalModel) {
    return (
      <div className="container py-5 text-center">
        <h5>Please go back and select a model first.</h5>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container py-5 text-center">
        <h3 className="mb-4">Select Issue for {finalModel}</h3>
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="card p-3 text-center shadow-sm issue-card"
              style={{ width: "200px", cursor: "pointer" }}
              onClick={() => handleClick(issue)}
            >
              {typeof issue === "object" && (
                <img
                  src={issue.icon}
                  alt={issue.name}
                  className="img-fluid mb-2"
                />
              )}
              <p className="fw-semibold">
                {typeof issue === "string" ? issue : issue.name}
              </p>
            </div>
          ))}
        </div>

        {/* 👉 Description Box Below Issues */}
        <div className="card shadow-sm p-4 text-start bg-light border border-danger-subtle rounded-4">
          <h5 className="fw-bold mb-3 text-dark">
            iFix: Your Trusted Partner for {finalModel} Repair Services
          </h5>
          <p>
            We provide doorstep {finalModel} repair service at your home, office,
            or any location of your preference at your preferred time. We provide
            same-day service.
          </p>
          <p>
            We only use high-quality spare parts at very reasonable prices. All
            the technicians at iFix are highly qualified and trained in their field.
            iFix offers up to 6 months warranty on every repair and mobile spare
            parts replaced by us.
          </p>
          <p>
            The customer needs to hand over the old spare parts to the technician
            post repair. Physical damage and any kind of liquid damage is not
            covered under warranty.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DeviceIssueSelector;
