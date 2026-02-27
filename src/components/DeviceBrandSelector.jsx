import React from "react";
import { useNavigate } from "react-router-dom";
import { deviceBrands } from "../data/deviceData";
import Navbar from "./Navbar";
import "../styles/DeviceBrandSelector.css";

const brandImages = {
  Apple: "/images/brands/apple.png",
  MI: "/images/brands/mi.png",
  Samsung: "/images/brands/samsung.png",
  Vivo: "/images/brands/vivo.png",
  OnePlus: "/images/brands/oneplus.png",
  Oppo: "/images/brands/oppo.png",
  Realme: "/images/brands/realme.png",
  Motorola: "/images/brands/motorola.png",
  
  "Apple Watch": "/images/brands/watch.jpg",
  "Samsung Tablet": "/images/brands/samsung-tablet.webp",
  "Lenovo Tablet": "/images/brands/lenovo-tablet.webp",
  "MacBook Air": "/images/brands/macbook-air.webp",
  "MacBook Pro": "/images/brands/macbook-pro.webp",

  
  "iPad": "/images/ipads/ipad.jpg",
  "iPad Mini": "/images/ipads/ipad-mini.jpg",
  "iPad Air": "/images/ipads/ipad-air.jpg",
  "iPad Pro": "/images/ipads/ipad-pro.jpg"
};

function DeviceBrandSelector({ category }) {
  const navigate = useNavigate();

  const titleMap = {
    phones: "Mobile Phone Repair",
    ipads: "iPad Repair",
    tablets: "Tablet Repair",
    macbooks: "MacBook Repair",
    watches: "Apple Watch Repair"
  };

  const baseRouteMap = {
    phones: "/services/mobile-repair",
    ipads: "/services/ipad-repair",
    tablets: "/services/tablet-repair",
    macbooks: "/services/macbook-repair",
    watches: "/services/apple-watch-repair"
  };

  const brands = deviceBrands[category];
  const baseRoute = baseRouteMap[category];

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="fw-bold mb-3">{titleMap[category]}: Select Your Brand</h2>
        <nav className="breadcrumb-nav text-start mb-4">
          <span className="text-danger fw-semibold">Home</span>
          <span className="mx-1">›</span>
          <span className="text-dark">{titleMap[category]}</span>
        </nav>

        <div className="row g-4 justify-content-center">
          {brands.map((brand) => (
            <div
              key={brand}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
              onClick={() =>
                navigate(
                  category === "watches"
                    ? `/services/apple-watch-repair/models`
                    : `${baseRoute}/${brand.toLowerCase().replace(/\s+/g, "-")}`,
                  { state: { brand } }
                )
              }
              style={{ cursor: "pointer" }}
            >
              <div className="brand-card-square d-flex flex-column align-items-center justify-content-center">
                <img src={brandImages[brand]} alt={brand} className="brand-logo" />
                <p className="mt-2 brand-label">{brand}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DeviceBrandSelector;
