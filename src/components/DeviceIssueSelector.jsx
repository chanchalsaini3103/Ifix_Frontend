import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/DeviceIssues.css";

// Issue Map by category
const categoryIssueMap = {
  phones: [
    { name: "DISPLAY", icon: "/problems/display.png" },
    { name: "TOUCH GLASS", icon: "/problems/touch.png" },
    { name: "BATTERY", icon: "/problems/battery.png" },
    { name: "CHARGING PORT", icon: "/problems/charging.png" },
    { name: "EAR SPEAKER", icon: "/problems/speaker.png" },
  ],
  ipads: [
    { name: "Screen Damage", icon: "/problems/ipad-screen.png" },
    { name: "Battery Issue", icon: "/problems/ipad-battery.png" },
    { name: "Water Damage", icon: "/problems/ipad-water.png" },
    { name: "Charging Issue", icon: "/problems/ipad-charging.png" },
    { name: "Software Issue", icon: "/problems/ipad-software.png" },
    { name: "Other", icon: "/problems/ipad-other.png" },
  ],
  tablets: [
    { name: "Screen Damage", icon: "/problems/tablet-screen.png" },
    { name: "Battery Issue", icon: "/problems/tablet-battery.png" },
    { name: "Water Damage", icon: "/problems/tablet-water.png" },
    { name: "Charging Issue", icon: "/problems/tablet-charging.png" },
    { name: "Software Issue", icon: "/problems/tablet-software.png" },
    { name: "Other", icon: "/problems/tablet-other.png" },
  ],
  macbooks: [
    { name: "Screen Replacement", icon: "/problems/mac-screen.png" },
    { name: "Battery Issue", icon: "/problems/mac-battery.png" },
    { name: "Water Damage", icon: "/problems/mac-water.png" },
    { name: "Keyboard Not Working", icon: "/problems/mac-keyboard.png" },
    { name: "Charging Problem", icon: "/problems/mac-charging.png" },
    { name: "Motherboard Issue", icon: "/problems/mac-motherboard.png" },
  ],
  watches: [
    { name: "Screen Repair", icon: "/problems/watch-screen.png" },
    { name: "Battery Repair", icon: "/problems/watch-battery.png" },
    { name: "Screen Glass Repair", icon: "/problems/watch-glass.png" },
    { name: "Back Glass Repair", icon: "/problems/watch-back.png" },
    { name: "Speaker Repair", icon: "/problems/watch-speaker.png" },
    { name: "Charging Repair", icon: "/problems/watch-charging.png" },
    { name: "Crown Button Repair", icon: "/problems/watch-crown.png" },
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
      <Footer />
    </>
  );
}

export default DeviceIssueSelector;
