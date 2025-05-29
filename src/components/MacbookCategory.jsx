// src/components/MacbookCategory.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { macbookBrands } from "../data/macbookData";

function MacbookCategory() {
  const navigate = useNavigate();

  const handleClick = (brand) => {
    const url = `/services/macbook-repair/${brand.toLowerCase().replace(/\s+/g, "-")}`;
    navigate(url, { state: { brand } });
  };

  return (
    <div className="container py-5 text-center">
      <h2>MacBook Repair : Doorstep MacBook Screen Repair & Replacement</h2>
      <p>Select Your Brand</p>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {macbookBrands.map((brand) => (
          <div
            key={brand.name}
            className="card p-3"
            style={{ width: "180px", cursor: "pointer" }}
            onClick={() => handleClick(brand.name)}
          >
            <img src={brand.image} alt={brand.name} className="img-fluid mb-2" />
            <h6>{brand.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MacbookCategory;
