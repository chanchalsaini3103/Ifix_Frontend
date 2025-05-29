import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Apple Watch", image: "/images/watch.png" },
  { name: "Apple Watch SE", image: "/images/se.png" },
  { name: "Apple Watch Ultra", image: "/images/ultra.png" },
  { name: "Apple Watch Ultra 2", image: "/images/ultra2.png" },
];

export default function AppleWatchCategories() {
  const navigate = useNavigate();

  return (
    <div className="container text-center py-5">
      <h2>Select Your Apple Watch Type</h2>
      <div className="row justify-content-center mt-4">
        {categories.map((item) => (
          <div
            className="col-6 col-md-3 mb-4"
            key={item.name}
            onClick={() => navigate(`/services/apple-watch-repair/${item.name.toLowerCase().replace(/\s+/g, "-")}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.image} alt={item.name} className="img-fluid rounded" />
            <p className="mt-2 fw-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
