import React from "react";
import { brandModels } from "../data/models";
import "../styles/BrandModels.css"; // Make sure this file exists

function BrandModels({ brand }) {
  const models = brandModels[brand] || [];

  return (
    <div className="container py-5">
      <h3 className="text-center mb-5 section-title">
        {brand} Repair & Replacement
      </h3>
      <div className="row justify-content-center">
        {models.map((model, index) => (
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center"
            key={index}
          >
            <div className="portrait-card text-center shadow rounded p-3">
             <img
  src={model.image} // use directly since it includes full path
  alt={model.name}
  className="img-fluid mb-2 portrait-img"
/>

              <p className="model-label fw-semibold text-dark">
                {model.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandModels;
