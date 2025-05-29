import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const issues = [
  { name: "DISPLAY", icon: "/problems/display.png" },
  { name: "TOUCH GLASS", icon: "/problems/touch.png" },
  { name: "BATTERY", icon: "/problems/battery.png" },
  { name: "CHARGING PORT", icon: "/problems/charging.png" },
  { name: "EAR SPEAKER", icon: "/problems/speaker.png" },
];

function ModelIssues() {
  const { brand, model } = useParams();
  const navigate = useNavigate();

  const handleSelect = (issue) => {
    navigate("/order-details", {
      state: { brand, model, issue },
    });
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h3 className="text-center mb-4">Select the issue type</h3>
        <div className="row justify-content-center">
          {issues.map((item, index) => (
            <div key={index} className="col-6 col-md-3 col-lg-2 mb-4" onClick={() => handleSelect(item.name)} style={{ cursor: "pointer" }}>
              <div className="card p-3 text-center shadow-sm">
                <img src={item.icon} alt={item.name} className="img-fluid mb-2" />
                <p className="fw-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ModelIssues;
