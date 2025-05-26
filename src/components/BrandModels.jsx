import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { brandModels } from "../data/models";

import Navbar from "./Navbar";

function BrandModels() {
  const { brandName } = useParams(); 
  const navigate = useNavigate();
  const models = brandModels[brandName] || [];

  return (
    <>
    
    <Navbar />
    <div className="container py-5">
      <h3 style={{ marginTop: "50px" }} className=" mb-5 section-title">
        {brandName} Repair & Replacement
      </h3>
      <div className="row justify-content-center">
        {models.map((model, index) => (
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center"
            key={index}
            onClick={() => navigate(`/brands/${brandName}/${model.name}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="portrait-card text-center shadow rounded p-3">
              <img
                src={model.image}
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
    </>
  );
}

export default BrandModels;
