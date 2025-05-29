// AppleWatchIssues.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const issues = [
  "Screen Repair",
  "Battery Repair",
  "Screen Glass Repair",
  "Back Glass Repair",
  "Speaker Repair",
  "Charging Repair",
  "Crown Button Repair",
];

function AppleWatchIssues() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>Please go back and select a model first.</p>;

  const handleSelect = (issue) => {
    navigate("/order-details", {
      state: {
        brand: state.brand,
        model: state.model,
        issue,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h3>Select the Issue for {state.model}</h3>
        <div className="row mt-4">
          {issues.map((issue, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div
                className="card p-3 shadow"
                style={{ cursor: "pointer" }}
                onClick={() => handleSelect(issue)}
              >
                <p className="fw-semibold">{issue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AppleWatchIssues;
