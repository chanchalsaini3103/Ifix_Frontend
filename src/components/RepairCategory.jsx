
import React from "react";
import { useNavigate } from "react-router-dom";
import { repairCategories } from "../data/repairData";
import Navbar from "./Navbar";

function RepairCategory() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container py-5 mt-4">
        <h2 className="fw-bold text-center">Select Device Category</h2>
        <div className="row mt-4">
          {repairCategories.map((item) => (
            <div
              className="col-6 col-md-3 mb-4"
              key={item.name}
              onClick={() => navigate(`/repair/${item.name.toLowerCase()}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="text-center p-3 shadow-sm rounded">
                <img src={item.image} alt={item.name} className="img-fluid mb-2" />
                <p className="fw-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RepairCategory;
