import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const issues = [
  "Screen Damage",
  "Battery Issue",
  "Water Damage",
  "Charging Issue",
  "Software Issue",
  "Other"
];

export default function TabletIssues() {
  const { brand, model } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Select the Issue</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {issues.map((issue) => (
          <div
            key={issue}
            className="card p-3 text-center"
            style={{ width: "200px", cursor: "pointer" }}
            onClick={() =>
              navigate("/order-details", {
                state: { brand, model, issue }
              })
            }
          >
            <p>{issue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
    