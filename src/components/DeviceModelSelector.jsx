import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { deviceModelMap } from "../data/deviceData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/DeviceModelSelector.css";

function DeviceModelSelector() {
  const params = useParams();
  const deviceType = params.deviceType || "watches";
  const brandSlug = params.brandSlug || "apple-watch";

  const navigate = useNavigate();
  const location = useLocation();

  const brand =
    location.state?.brand ||
    brandSlug?.replace(/-/g, " ")?.replace(/\b\w/g, (c) => c.toUpperCase()) ||
    "Apple Watch";

  const models = deviceModelMap[brand] || [];
  const isImageBased = Array.isArray(models) && typeof models[0] === "object";

  const handleClick = (model) => {
    const modelName = typeof model === "string" ? model : model.name;

    const basePathMap = {
      phones: `/repair/mobile-repair/${brand}/${modelName}`,
      ipads: `/ipad-repair/${brand}/${modelName}/issue`,
      tablets: `/services/tablet-repair/${brand}/${modelName}/issue`,
      macbooks: `/services/macbook-repair/${brandSlug}/issues`,
      watches: `/services/apple-watch-repair/issues`,
    };

    const redirectPath = basePathMap[deviceType];

    navigate(redirectPath, {
      state: { brand, model: modelName },
    });
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
       <nav className="breadcrumb-nav text-start mb-4">
  <span className="text-danger fw-semibold">Home</span>
  <span className="mx-1">›</span>
  <span className="text-danger fw-semibold">Mobile</span>
  <span className="mx-1">›</span>
  <span className="text-dark">{brand} Repair</span>
</nav>


        <div className="row g-4 justify-content-center">
          {models.map((model, index) => {
            const modelName = typeof model === "string" ? model : model.name;
            const modelImage = isImageBased ? model.image : null;

            return (
              <div
                key={index}
                className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
                onClick={() => handleClick(model)}
                style={{ cursor: "pointer" }}
              >
                <div className="model-card-vertical d-flex flex-column align-items-center justify-content-center">
                  {modelImage && (
                    <img
                      src={modelImage}
                      alt={modelName}
                      className="model-logo-lg mb-2"
                    />
                  )}
                  <p className="model-label">{modelName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
    </>
  );
}

export default DeviceModelSelector;
