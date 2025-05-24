import React from "react";
import "../styles/Services.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const brands = [
  { name: "Apple", logo: "apple.png" },
  { name: "MI", logo: "mi.png" },
  { name: "Samsung", logo: "samsung.png" },
  { name: "Vivo", logo: "vivo.png" },
  { name: "OnePlus", logo: "oneplus.png" },
  { name: "Oppo", logo: "oppo.png" },
  { name: "Realme", logo: "realme.png" },
  { name: "Motorola", logo: "motorola.png" },
  { name: "Nokia", logo: "nokia.png" },
  { name: "Honor", logo: "honor.png" },
  { name: "Asus", logo: "asus.png" },
  { name: "Google", logo: "google.png" },
  { name: "Poco", logo: "poco.png" },
  { name: "Infinix", logo: "infinix.png" },
  { name: "iQOO", logo: "iqoo.png" },
  { name: "Nothing", logo: "nothing.png" },
];

function Services() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    
    <div className="brand-section py-5 mt-5">
      <h2 className="text-center mb-4 section-title">Top Brands</h2>
     

      <div className="container">
        <div className="row g-4 justify-content-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              onClick={() => navigate(`/brands/${brand.name}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="brand-card text-center p-3 shadow-sm border rounded hover-effect">
                <img
                  src={`/images/brands/${brand.logo}`}
                  alt={brand.name}
                  className="brand-img mb-2"
                />
                <p className="fw-semibold text-dark">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* Centered Call to Action Banner */}
<div className="cta-banner-container my-5">
  <div className="cta-banner-inner d-flex flex-column flex-md-row justify-content-between align-items-center p-4">
    <h4 className="text-white text-center text-md-start mb-3 mb-md-0 fw-bold">
      If You Did Not Found Your Phone Or Issue Just Give Us A Call
    </h4>
    <a href="/contact" className="btn btn-pink px-4 fw-semibold">
      Contact Us
    </a>
  </div>
</div>

    </div>
    </>
  );
}

export default Services;