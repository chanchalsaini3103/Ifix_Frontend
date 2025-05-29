import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { brandModels } from "../data/models";
import Navbar from "./Navbar";

function MobileModels() {
  const { brand } = useParams();
  const models = brandModels[brand] || [];
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h3 className="mb-4">{brand} Repair : Doorstep Screen Repair & Replacement</h3>
        <h5 className="mb-4">Select Your Model</h5>
        <div className="row">
          {models.map((model, index) => (
            <div className="col-6 col-md-3 col-lg-2 mb-4" key={index} onClick={() => navigate(`/repair/mobile-repair/${brand}/${model.name}`)} style={{ cursor: "pointer" }}>
              <div className="text-center shadow rounded p-3">
                <img src={model.image} alt={model.name} className="img-fluid mb-2" />
                <p className="fw-semibold">{model.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MobileModels;
