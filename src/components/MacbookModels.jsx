// src/components/MacbookModels.jsx
import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { macbookModelMap } from "../data/macbookData";

function MacbookModels() {
  const { type } = useParams(); // URL slug like 'macbook-air'
  const navigate = useNavigate();
  const location = useLocation();
  const brand = location.state?.brand || type.replace(/-/g, " "); // fallback

  const models = macbookModelMap[brand] || [];

  const handleClick = (model) => {
    navigate(`/services/macbook-repair/${type}/issues`, {
      state: { brand, model }
    });
  };

  return (
    <div className="container py-5 text-center">
      <h2>{brand} Models</h2>
      <p>Select Your Model</p>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {models.map((item) => (
          <div
            key={item.name}
            className="card p-3"
            style={{ width: "180px", cursor: "pointer" }}
            onClick={() => handleClick(item.name)}
          >
            <img src={item.image} alt={item.name} className="img-fluid mb-2" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MacbookModels;
