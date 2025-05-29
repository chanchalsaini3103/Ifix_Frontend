import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const issues = [
  "Screen Repair",
  "Battery Replacement",
  "Keyboard Issue",
  "Charging Issue",
  "Trackpad Issue",
  "Overheating",
  "Software Problem"
];

function RepairIssueSelect() {
  const navigate = useNavigate();
  const { state } = useLocation();

console.log(state); // Make sure brand and model are received

  const handleIssueClick = (issue) => {
    navigate("/order-details", {
      state: { ...state, issue }
    });
  };

  if (!state) return <p className="text-center mt-5">Please select model first.</p>;

  return (
    <div className="container text-center my-5">
      <h2>Choose Your Issue</h2>
      <div className="row justify-content-center">
        {issues.map((issue, index) => (
          <div
            key={index}
            className="col-md-3 m-2 card p-3 shadow"
            onClick={() => handleIssueClick(issue)}
            style={{ cursor: "pointer" }}
          >
            <h6>{issue}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepairIssueSelect;
