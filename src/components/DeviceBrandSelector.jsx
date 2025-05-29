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
  Nokia: "/images/brands/nokia.png",
  Asus: "/images/brands/asus.png",
  Google: "/images/brands/google.png",
  Poco: "/images/brands/poco.png",
  Infinix: "/images/brands/infinix.png",
  "Apple Watch": "/images/watch.png",
  "Samsung Tablet": "/images/samsung-tablet.png",
  "Lenovo Tablet": "/images/lenovo-tablet.png",
  "MacBook Air": "/images/macbook-air.png",
  "MacBook Pro": "/images/macbook-pro.png"
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
