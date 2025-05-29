import React from "react";
import { tabletBrands } from "../data/tabletModels";
import { useNavigate } from "react-router-dom";

export default function TabletRepairBrands() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Select Your Brand</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {tabletBrands.map((brand) => (
          <div
            key={brand.name}
            className="card p-3 text-center"
            onClick={() => navigate(`/services/tablet-repair/${brand.name}`)}
            style={{ cursor: "pointer", width: "180px" }}
          >
            <img src={brand.image} alt={brand.name} className="img-fluid" />
            <p className="mt-2">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
