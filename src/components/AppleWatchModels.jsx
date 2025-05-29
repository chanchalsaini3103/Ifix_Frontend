// AppleWatchModels.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const models = [
  { name: "Apple Watch Series SE 2", image: "/images/watch/se2.png" },
  { name: "Apple Watch Series Ultra 2", image: "/images/watch/ultra2.png" },
  { name: "Apple Watch Series Ultra 1", image: "/images/watch/ultra1.png" },
  { name: "Apple Watch Series 9", image: "/images/watch/9.png" },
  { name: "Apple Watch Series 8", image: "/images/watch/8.png" },
  { name: "Apple Watch Series 7", image: "/images/watch/7.png" },
];

function AppleWatchModels() {
  const navigate = useNavigate();

  const handleClick = (model) => {
    navigate("/services/apple-watch-repair/issues", {
      state: { brand: "Apple Watch", model },
    });
  };

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h3>Select Your Apple Watch Model</h3>
        <div className="row mt-4">
          {models.map((m, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card p-2 shadow" onClick={() => handleClick(m.name)} style={{ cursor: "pointer" }}>
                <img src={m.image} alt={m.name} className="img-fluid" />
                <p className="mt-2 fw-semibold">{m.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AppleWatchModels;
