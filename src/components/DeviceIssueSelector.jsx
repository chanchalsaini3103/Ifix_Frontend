import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

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
      state: {
        brand: finalBrand,
        model: finalModel,
        issue: issueName
      }
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
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="card p-3 text-center shadow"
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
      </div>
    </>
  );
}

export default DeviceIssueSelector;
