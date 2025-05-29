import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { deviceModelMap } from "../data/deviceData";
import Navbar from "./Navbar";

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
      watches: `/services/apple-watch-repair/issues`
    };

    const redirectPath = basePathMap[deviceType];

    navigate(redirectPath, {
      state: { brand, model: modelName }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container py-5 text-center">
        <h2>{brand} Models</h2>
        <p>Select Your Model</p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {models.map((model, index) => (
            <div
              key={index}
              className="card p-3 text-center shadow"
              style={{ width: "180px", cursor: "pointer" }}
              onClick={() => handleClick(model)}
            >
              {isImageBased && (
                <img
                  src={model.image}
                  alt={model.name}
                  className="img-fluid mb-2"
                />
              )}
              <p>{isImageBased ? model.name : model}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DeviceModelSelector;
