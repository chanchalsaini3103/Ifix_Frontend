import React from "react";
import { useNavigate } from "react-router-dom";
import { deviceBrands, deviceModelMap } from "../data/deviceData";
import Navbar from "./Navbar";

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
      <div className="container py-5 text-center">
        <h2 className="fw-bold">{titleMap[category]}: Select Your Brand</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="card p-3 text-center shadow-sm"
              onClick={() =>
  navigate(
    category === "watches"
      ? `/services/apple-watch-repair/models`
      : `${baseRoute}/${brand.toLowerCase().replace(/\s+/g, "-")}`,
    { state: { brand } }
  )
}

              style={{ cursor: "pointer", width: "180px" }}
            >
              <img
                src={brandImages[brand]}
                alt={brand}
                className="img-fluid"
                style={{ height: "100px", objectFit: "contain" }}
              />
              <p className="mt-2 fw-semibold">{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DeviceBrandSelector;
