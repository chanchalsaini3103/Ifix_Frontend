import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AdminDashboard.css";
import { FaUsers, FaTools, FaCheckCircle, FaHourglassHalf, FaSignOutAlt, FaEnvelope, FaEdit, FaChartBar } from "react-icons/fa";
import Swal from "sweetalert2";

function AdminDashboard() {
  const [view, setView] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [repairs, setRepairs] = useState([]);
   const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      window.location.href = "/login";
      return;
    }

    axios.get("http://localhost:8081/api/admin/users").then(res => setUsers(res.data));
    axios.get("http://localhost:8081/api/repair/all").then(res => setRepairs(res.data));
  }, []);

  const completedRepairs = repairs.filter(r => r.status === "DONE").length;
  const pendingRepairs = repairs.length - completedRepairs;

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
      await axios.put(`http://localhost:8081/api/repair/${id}/status`, { status: "DONE" });
      setRepairs(prev => prev.map(r => (r.id === id ? { ...r, status: "DONE" } : r)));
      Swal.fire({ icon: "success", title: "Marked as Done", text: "Customer has been notified via WhatsApp." });
    } catch (err) {
      console.error("Failed to update status", err);
      Swal.fire("Error", "Failed to update repair status.", "error");
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
        <h4 className="text-center mb-4">Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><button className="btn btn-link nav-link text-white" onClick={() => setView("dashboard")}><FaChartBar /> Dashboard</button></li>
          <li className="nav-item mb-2"><button className="btn btn-link nav-link text-white" onClick={() => setView("users")}><FaUsers /> Users</button></li>
          <li className="nav-item mb-2"><button className="btn btn-link nav-link text-white" onClick={() => setView("orders")}><FaTools /> Orders</button></li>
          <li className="nav-item mb-2"><button className="btn btn-link nav-link text-white" onClick={() => setView("messages")}><FaEnvelope /> Messages</button></li>
          <li className="nav-item mb-2"><button className="btn btn-link nav-link text-white" onClick={() => navigate("/admin/edit-models")}><FaEdit /> Edit Models</button></li>
          <li className="nav-item mt-4"><button className="btn btn-outline-light w-100" onClick={handleLogout}><FaSignOutAlt /> Logout</button></li>
        </ul>
      </div>

      {/* Main Dashboard */}
      <div className="container-fluid p-4">
        {view === "dashboard" && (
          <>
            <h2 className="mb-4">Dashboard Overview</h2>
            <div className="row g-4">
              <div className="col-md-3">
                <div className="card shadow text-center p-3">
                  <h5><FaUsers className="text-primary" /> Total Users</h5>
                  <h3>{users.length}</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow text-center p-3">
                  <h5><FaTools className="text-warning" /> Total Orders</h5>
                  <h3>{repairs.length}</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow text-center p-3">
                  <h5><FaCheckCircle className="text-success" /> Completed</h5>
                  <h3>{completedRepairs}</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow text-center p-3">
                  <h5><FaHourglassHalf className="text-danger" /> Pending</h5>
                  <h3>{pendingRepairs}</h3>
                </div>
              </div>
            </div>
          </>
        )}

        {view === "users" && (
          <>
            <h2 className="mb-4">Registered Users</h2>
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {view === "orders" && (
          <>
            <h2 className="mb-4">Repair Orders</h2>
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Issue</th>
                  <th>Status</th>
                  <th>Action</th>
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
                    <td>{r.status}</td>
                    <td>
                      {r.status === "DONE" ? (
                        <span className="badge bg-success">Completed</span>
                      ) : (
                        <button className="btn btn-sm btn-warning" onClick={() => handleMarkDone(r.id)}>Mark as Done</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {view === "messages" && (
          <>
            <h2 className="mb-4">Messages</h2>
            <p>This section can be used to view customer inquiries.</p>
          </>
        )}

        {view === "models" && (
          <>
            <h2 className="mb-4">Edit Phone Models</h2>
            <p>This section will be used to update available phone models and their issues.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
