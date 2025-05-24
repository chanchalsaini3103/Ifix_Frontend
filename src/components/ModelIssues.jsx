import React from "react";
import { useParams, useNavigate } from "react-router-dom";


const issues = [
  { name: "DISPLAY", icon: "display.png" },
  { name: "TOUCH GLASS", icon: "touch.png" },
  { name: "BATTERY", icon: "battery.png" },
  { name: "CHARGING PORT", icon: "charging.png" },
  { name: "EAR SPEAKER", icon: "speaker.png" },
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
    <div className="container py-5">
      <h3 className="text-center mb-4">Select the issue type</h3>
      <div className="row justify-content-center">
        {issues.map((item, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
            onClick={() => handleSelect(item.name)}
            style={{ cursor: "pointer" }}
          >
            <div className="card p-3 text-center shadow-sm">
              <img
                src={`/images/issues/${item.icon}`}
                alt={item.name}
                className="img-fluid mb-2"
              />
              <p className="fw-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModelIssues;