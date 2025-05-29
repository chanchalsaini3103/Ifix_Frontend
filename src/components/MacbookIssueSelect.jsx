// src/components/MacbookIssueSelect.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const issues = [
  "Screen Replacement",
  "Battery Issue",
  "Water Damage",
  "Keyboard Not Working",
  "Charging Problem",
  "Motherboard Issue"
];

function MacbookIssueSelect() {
  const location = useLocation();
  const navigate = useNavigate();

  const { brand, model } = location.state || {};

  if (!brand || !model) return <p>Please go back and select model again.</p>;

  const handleClick = (issue) => {
    navigate("/order-details", { state: { brand, model, issue } });
  };

  return (
    <div className="container py-5 text-center">
      <h2>Select the Issue</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {issues.map((issue) => (
          <div
            key={issue}
            className="card p-3"
            style={{ width: "220px", cursor: "pointer" }}
            onClick={() => handleClick(issue)}
          >
            <p>{issue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MacbookIssueSelect;
