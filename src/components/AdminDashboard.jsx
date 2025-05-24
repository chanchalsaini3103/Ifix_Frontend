import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      alert("Access denied. Only admins allowed.");
      window.location.href = "/login";
      return;
    }

    axios.get("http://localhost:8081/api/admin/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Failed to fetch users", err));

    axios.get("http://localhost:8081/api/admin/repairs")
      .then(res => setRepairs(res.data))
      .catch(err => console.error("Failed to fetch repairs", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">👤 Registered Users</h2>
      <table className="table table-bordered mb-5">
        <thead>
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

      <h2 className="mb-4">📱 Repair Requests</h2>
      <table className="table table-striped">
        <thead>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
