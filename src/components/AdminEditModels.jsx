import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AdminDashboard.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AdminEditModels() {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [models, setModels] = useState([]);
  const [newModelName, setNewModelName] = useState("");
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    axios.get(`${BASE_URL}/api/admin/brands`)
      .then(res => setBrands(res.data))
      .catch(err => console.error("Failed to load brands", err));
  }, []);

  const fetchModels = (brandId) => {
    setSelectedBrand(brandId);
    axios.get(`${BASE_URL}/api/admin/brands/${brandId}/models`)
      .then(res => setModels(res.data))
      .catch(err => console.error("Failed to fetch models", err));
  };

  const handleAddModel = () => {
    axios.post(`${BASE_URL}/api/admin/brands/${selectedBrand}/models`, {
      name: newModelName,
      image: newImage
    })
    .then(() => {
      setNewModelName("");
      setNewImage("");
      fetchModels(selectedBrand);
    })
    .catch(err => console.error("Failed to add model", err));
  };

  const handleDeleteModel = (modelId) => {
    axios.delete(`${BASE_URL}/api/admin/models/${modelId}`)
      .then(() => fetchModels(selectedBrand))
      .catch(err => console.error("Failed to delete model", err));
  };

  return (
    <div className="container py-4">
      <h3 className="mb-4">Edit Phone Models</h3>

      <div className="row">
        <div className="col-md-4">
          <h5>Select a Brand</h5>
          <ul className="list-group">
            {brands.map(brand => (
              <li
                key={brand.id}
                className={`list-group-item ${selectedBrand === brand.id ? "active" : ""}`}
                onClick={() => fetchModels(brand.id)}
                style={{ cursor: "pointer" }}
              >
                {brand.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-8">
          {selectedBrand && (
            <>
              <h5 className="mb-3">Models for Selected Brand</h5>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Model Name"
                  className="form-control mb-2"
                  value={newModelName}
                  onChange={e => setNewModelName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Image Path (e.g., /images/models/abc.png)"
                  className="form-control mb-2"
                  value={newImage}
                  onChange={e => setNewImage(e.target.value)}
                />
                <button className="btn btn-success" onClick={handleAddModel}>Add Model</button>
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map(m => (
                    <tr key={m.id}>
                      <td>{m.name}</td>
                      <td><img src={m.image} alt={m.name} width="50" /></td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteModel(m.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminEditModels;
