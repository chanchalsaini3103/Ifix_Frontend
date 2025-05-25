import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AdminDashboard.css";
import Swal from "sweetalert2";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Only admins are allowed to view this page.",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#d33"
      }).then(() => {
        window.location.href = "/login";
      });
      return;
    }

    // Fetch users and repairs
    axios.get("http://localhost:8081/api/admin/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Failed to fetch users", err));

    axios.get("http://localhost:8081/api/repair/all")
      .then(res => setRepairs(res.data))
      .catch(err => console.error("Failed to fetch repairs", err));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleMarkDone = async (id) => {
    const confirm = await Swal.fire({
      title: "Mark as Done?",
      text: "Are you sure you want to mark this request as completed and notify the customer?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, mark as done"
    });

    if (!confirm.isConfirmed) return;

    try {
      await axios.put(`http://localhost:8081/api/repair/${id}/status`, {
        status: "DONE",
      });

      setRepairs(prev =>
        prev.map(r => (r.id === id ? { ...r, status: "DONE" } : r))
      );

      Swal.fire({
        icon: "success",
        title: "Marked as Done",
        text: "Customer has been notified via SMS.",
        confirmButtonColor: "#28a745"
      });
    } catch (err) {
      console.error("Failed to update status", err);
      Swal.fire("Error", "Failed to update repair status.", "error");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">Admin Dashboard</a>
          <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5 pt-5 mb-5">
        {/* Users Table */}
        <div className="card shadow p-4 mb-5">
          <h3 className="mb-4 text-primary"><i className="bi bi-people-fill"></i> Registered Users</h3>
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>User ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.userId}>
                    <td>{u.userId}</td>
                    <td>{u.fullName}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Repair Requests Table */}
        <div className="card shadow p-4">
          <h3 className="mb-4 text-success"><i className="bi bi-tools"></i> Repair Requests</h3>
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Request ID</th>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Issue</th>
                  <th>Notes</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {repairs.map(r => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.userId}</td>
                    <td>{r.name}</td>
                    <td>{r.phone}</td>
                    <td>{r.email}</td>
                    <td>{r.brand}</td>
                    <td>{r.model}</td>
                    <td>{r.issue}</td>
                    <td>{r.notes}</td>
                    <td>{new Date(r.submittedAt).toLocaleString()}</td>
                    <td>
                      {r.status === "DONE" ? (
                        <button className="btn btn-success btn-sm" disabled>Completed ✅</button>
                      ) : (
                        <button className="btn btn-warning btn-sm" onClick={() => handleMarkDone(r.id)}>
                          Mark as Done
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
