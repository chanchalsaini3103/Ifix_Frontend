import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/RequestRepair.css";

function RequestRepair() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    issue: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Repair request submitted successfully!");
  };

  return (
    <div className="request-page py-5 mt-5">
      <h2 className="text-center mb-3">Request a Mobile Repair</h2>
      <p className="text-center text-muted">
        Please fill out the form below and our team will reach out to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="request-form container bg-light p-4 shadow-sm rounded">
        <div className="row g-3">
          <div className="col-md-6">
            <label>Full Name</label>
            <input type="text" name="name" className="form-control" required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label>Phone Number</label>
            <input type="tel" name="phone" className="form-control" required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label>Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label>Brand</label>
            <select name="brand" className="form-select" required onChange={handleChange}>
              <option value="">Select Brand</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>MI</option>
              <option>Realme</option>
              <option>Vivo</option>
              <option>OnePlus</option>
              <option>Oppo</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Model</label>
            <input type="text" name="model" className="form-control" required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label>Issue Type</label>
            <select name="issue" className="form-select" required onChange={handleChange}>
              <option value="">Select Issue</option>
              <option>Screen Damage</option>
              <option>Battery Issue</option>
              <option>Water Damage</option>
              <option>Charging Issue</option>
              <option>Software Issue</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-12">
            <label>Additional Notes</label>
            <textarea name="notes" className="form-control" rows="3" onChange={handleChange}></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-5">Submit Request</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RequestRepair;
