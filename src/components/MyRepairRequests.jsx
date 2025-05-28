import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MyRepairRequests.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function MyRepairRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to view your repair requests.",
        confirmButtonText: "Go to Login",
      }).then(() => {
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      });
      return;
    }

    axios
      .get(`${BASE_URL}/api/repair/user/${userId}`, {
        withCredentials: true,
      })
      .then((res) => setRequests(res.data))
      .catch((err) => {
        console.error("Error fetching repair requests:", err);
        Swal.fire("Error", "Failed to load your repair requests", "error");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-5 slide-down">
        <h2 style={{ marginTop: "50px" }} className="text-center mb-4 fw-bold text-primary">
          📋 My Repair Requests
        </h2>

        <div className="table-responsive shadow rounded">
          <table className="table stylish-table table-hover table-bordered align-middle">
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
                  <td colSpan="7" className="text-center py-4">
                    No repair requests found.
                  </td>
                </tr>
              ) : (
                requests.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.brand}</td>
                    <td>{r.model}</td>
                    <td>{r.issue}</td>
                    <td>{r.notes}</td>
                    <td>{new Date(r.submittedAt).toLocaleString()}</td>
                    <td>
                      <span
                        className={`badge rounded-pill px-3 py-2 ${
                          r.status === "DONE" ? "bg-success" : "bg-warning text-dark"
                        }`}
                      >
                        {r.status === "DONE" ? "✅ Done" : "⏳ Pending"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyRepairRequests;
