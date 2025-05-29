import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tabletModelMap } from "../data/tabletModels";

export default function TabletModels() {
  const { brand } = useParams();
  const navigate = useNavigate();
  const models = tabletModelMap[brand] || [];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">{brand} Models</h2>
      <p className="text-center">Select Your Model</p>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {models.map((model) => (
          <div
            key={model}
            className="card p-3 text-center"
            style={{ width: "180px", cursor: "pointer" }}
            onClick={() =>
              navigate(`/services/tablet-repair/${brand}/${model}/issue`)
            }
          >
            <p>{model}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
