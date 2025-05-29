import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ipadModelMap } from "../data/ipadModels";

export default function IpadModels() {
  const { brand } = useParams();
  const navigate = useNavigate();

  const models = ipadModelMap[brand] || [];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Select Your Model</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {models.map((model) => (
          <div
            key={model}
            className="card p-3 text-center"
            style={{ width: "180px", cursor: "pointer" }}
            onClick={() => navigate(`/ipad-repair/${brand}/${model}/issue`)}
          >
            <p>{model}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
