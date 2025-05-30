import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/DeviceIssues.css";

// Issue Map by category
const categoryIssueMap = {
 phones: [
  { name: "Screen Repair", icon: "/images/problems/screen.svg" },
  { name: "Back Glass Repair", icon: "/images/problems/backglass.svg" },
  { name: "Battery Repair", icon: "/images/problems/battery.svg" },
  { name: "Charging Port Repair", icon: "/images/problems/charging.svg" },
  { name: "Camera Repair", icon: "/images/problems/camera.svg" },
  { name: "Speaker Repair", icon: "/images/problems/speaker.svg" },
  { name: "Mic Repair", icon: "/images/problems/mic.svg" },
  { name: "Power Button Repair", icon: "/images/problems/power.svg" },
  { name: "Water Damage Repair", icon: "/images/problems/water.svg" },
  { name: "Motherboard Repair", icon: "/images/problems/motherboard.svg" },
  { name: "Software Repair", icon: "/images/problems/software.svg" }
],

  ipads: [
  { name: "Screen Damage", icon: "/images/problems/ipad-screen.svg" },
  { name: "Battery Issue", icon: "/images/problems/ipad-battery.svg" },
  { name: "Water Damage", icon: "/images/problems/ipad-water.svg" },
  { name: "Charging Issue", icon: "/images/problems/ipad-charging.svg" },
  { name: "Software Issue", icon: "/images/problems/ipad-software.svg" },
  { name: "Other", icon: "/images/problems/ipad-other.svg" }
],

  tablets: [
    { name: "Screen Damage", icon: "/images/problems/ipad-screen.svg" },
    { name: "Battery Issue", icon: "/images/problems/ipad-battery.svg" },
    { name: "Water Damage", icon: "/images/problems/ipad-water.svg" },
    { name: "Charging Issue", icon: "/images/problems/ipad-charging.svg" },
    { name: "Software Issue", icon: "/images/problems/ipad-software.svg" },
    { name: "Other", icon: "/images/problems/ipad-other.svg" },
  ],
  macbooks: [
    { name: "Screen Replacement", icon: "/images/problems/mac-screen.svg" },
    { name: "Battery Issue", icon: "/images/problems/mac-battery.svg" },
    { name: "Water Damage", icon: "/images/problems/mac-water.svg" },
    { name: "Keyboard Not Working", icon: "/images/problems/mac-keyboard.svg" },
    { name: "Charging Problem", icon: "/images/problems/mac-charging.svg" },
    { name: "Other Issue", icon: "/images/problems/mac-motherboard.svg" },
  ],
  watches: [
    { name: "Screen Repair", icon: "/images/problems/watch-screen.svg" },
    { name: "Battery Repair", icon: "/images/problems/watch-battery.svg" },
    { name: "Screen Glass Repair", icon: "/images/problems/watch-glass.svg" },
    { name: "Back Glass Repair", icon: "/images/problems/watch-back.svg" },
    { name: "Speaker Repair", icon: "/images/problems/watch-speaker.svg" },
    { name: "Charging Repair", icon: "/images/problems/watch-charging.svg" },
    { name: "Crown Button Repair", icon: "/images/problems/watch-crown.svg" },
  ],
};

// Category resolver based on brand name
const resolveCategoryByBrand = (brand) => {
  const lower = brand.toLowerCase();

  if (lower.includes("watch")) return "watches";
  if (lower.includes("macbook")) return "macbooks";
  if (lower.includes("ipad")) return "ipads";
  if (lower.includes("tablet")) return "tablets";
  return "phones";
};

function DeviceIssueSelector() {
  const { brand, model } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const finalBrand = state?.brand || brand;
  const finalModel = state?.model || model;
  const deviceType = resolveCategoryByBrand(finalBrand);
  const issues = categoryIssueMap[deviceType] || [];

  const handleClick = (issue) => {
    const issueName = typeof issue === "string" ? issue : issue.name;
    navigate("/order-details", {
      state: { brand: finalBrand, model: finalModel, issue: issueName },
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
              key={`${issue.name}-${index}`}
              className="card p-3 text-center shadow-sm issue-card"
              style={{ width: "200px", cursor: "pointer" }}
              onClick={() => handleClick(issue)}
            >
              {issue.icon && (
                <img
                  src={issue.icon}
                  alt={issue.name}
                  className="img-fluid mb-2"
                  style={{ maxHeight: "80px", objectFit: "contain" }}
                />
              )}
              <p className="fw-semibold">
                {typeof issue === "string" ? issue : issue.name}
              </p>
            </div>
          ))}
        </div>

        <div className="card shadow-sm p-4 text-start bg-light border border-danger-subtle rounded-4">
          <h5 className="fw-bold mb-3 text-dark">
            iFix: Your Trusted Partner for {finalModel} Repair Services
          </h5>
          <p>
            We provide doorstep {finalModel} repair service at your home, office,
            or any location of your preference at your preferred time. We offer
            same-day service.
          </p>
          <p>
            We use high-quality spare parts at very reasonable prices. All iFix
            technicians are highly trained professionals.
          </p>
          <p>
            iFix offers up to 6 months warranty on every repair and replacement
            of mobile parts. Physical or liquid damage is not covered under
            warranty.
          </p>
        </div>
      </div>
      
    </>
  );
}

export default DeviceIssueSelector;
