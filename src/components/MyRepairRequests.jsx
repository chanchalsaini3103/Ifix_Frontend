import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

function MyRepairRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to view your repair requests.",
        confirmButtonText: "Go to Login"
      }).then(() => {
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      });
      return;
    }

    axios.get(`http://localhost:8081/api/repair/user/${userId}`, {
  withCredentials: true
})

      .then(res => setRequests(res.data))
      .catch(err => {
        console.error("Error fetching repair requests:", err);
        Swal.fire("Error", "Failed to load your repair requests", "error");
      });
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">📋 My Repair Requests</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Request ID</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Issue</th>
              <th>Notes</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center">No repair requests found.</td>
              </tr>
            ) : (
              requests.map(r => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.brand}</td>
                  <td>{r.model}</td>
                  <td>{r.issue}</td>
                  <td>{r.notes}</td>
                  <td>{new Date(r.submittedAt).toLocaleString()}</td>
                  <td>
                    {r.status === "DONE" ? (
                      <span className="badge bg-success">Done</span>
                    ) : (
                      <span className="badge bg-warning text-dark">Pending</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyRepairRequests;
