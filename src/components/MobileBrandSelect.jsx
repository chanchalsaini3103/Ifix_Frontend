import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MobileBrandSelect.css";
import Navbar from "./Navbar";

const brands = [
  { name: "Apple", image: "/images/brands/apple.png" },
  { name: "MI", image: "/images/brands/mi.png" },
  { name: "Samsung", image: "/images/brands/samsung.png" },
  { name: "Vivo", image: "/images/brands/vivo.png" },
  { name: "OnePlus", image: "/images/brands/oneplus.png" },
  { name: "Oppo", image: "/images/brands/oppo.png" },
  { name: "Realme", image: "/images/brands/realme.png" },
  { name: "Motorola", image: "/images/brands/motorola.png" },
  { name: "Nokia", image: "/images/brands/nokia.png" },
  { name: "Asus", image: "/images/brands/asus.png" },
  { name: "Google", image: "/images/brands/google.png" },
  { name: "Poco", image: "/images/brands/poco.png" },
  { name: "Infinix", image: "/images/brands/infinix.png" },
  { name: "Other Phone", image: "/images/brands/other.png" }
];

function MobileBrandSelect() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="mobile-brand-select container py-5">
        <h2 className="text-center fw-bold mb-2">
          Mobile Phone Repair : Doorstep Mobile Screen Repair & Replacement
        </h2>
        <p className="text-center text-danger fw-medium mb-5">
          Home &gt; Mobile Repair
        </p>
        <h4 className="mb-4 fw-semibold">Select Your Brand</h4>
        <div className="row">
         {brands.map((brand)  => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
              key={brand.name}
              onClick={() => navigate(`/repair/mobile-repair/${brand.name}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="brand-card text-center shadow-sm p-3 rounded h-100">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="img-fluid mb-2"
                  style={{ height: "100px", objectFit: "contain" }}
                />
                <p className="fw-semibold">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MobileBrandSelect;
