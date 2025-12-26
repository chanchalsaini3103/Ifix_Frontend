// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "./Navbar";
// import Swal from "sweetalert2";
// import "../styles/OrderDetails.css";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// function OrderDetails() {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const [userId, setUserId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     notes: ""
//   });

//   useEffect(() => {
//     const uid = localStorage.getItem("userId");
//     if (!uid) {
//       if (state) localStorage.setItem("pendingOrder", JSON.stringify(state));
//       Swal.fire({
//         title: "Login Required",
//         text: "Please login to continue with your request.",
//         icon: "warning",
//         confirmButtonText: "Go to Login",
//         confirmButtonColor: "#ff007f"
//       }).then(() => navigate("/login"));
//     } else {
//       setUserId(uid);
//     }
//   }, [state, navigate]);

//   useEffect(() => {
//     if (!state) {
//       const saved = localStorage.getItem("pendingOrder");
//       if (!saved) navigate("/select-brand");
//     }
//   }, [state, navigate]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userId) {
//       Swal.fire({
//         icon: "error",
//         title: "Session expired",
//         text: "Please login again to submit your request.",
//       });
//       navigate("/login");
//       return;
//     }

//     if (!/^[6-9]\d{9}$/.test(form.phone)) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Phone",
//         text: "Please enter a valid 10-digit Indian phone number.",
//       });
//       return;
//     }

//     const order = {
//       userId: parseInt(userId),
//       name: form.name,
//       phone: form.phone,
//       email: form.email,
//       notes: form.notes,
//       brand: state?.brand,
//       model: state?.model,
//       issue: state?.issue
//     };

//     try {
//       setLoading(true);
//       await axios.post(`${BASE_URL}/api/repair/submit`, order, {
//   withCredentials: true
// });

//       localStorage.removeItem("pendingOrder");

//       Swal.fire({
//         icon: "success",
//         title: "Request Submitted!",
//         text: "Thank you. We will contact you shortly.",
//         confirmButtonColor: "#28a745"
//       });

//       setTimeout(() => navigate("/"), 2000);
//     } catch (err) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong while submitting the request.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!state) return <p className="text-center mt-5">Please select brand, model and issue again.</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="order-popup-wrapper d-flex align-items-center justify-content-center py-5">
//         <div className="order-popup-modal row bg-white shadow rounded-4 overflow-hidden">
//           <div className="col-md-6 p-0">
//             <img
//               src="/images/technician.png"
//               alt="Technician"
//               className="img-fluid h-100 w-100 object-fit-cover"
//             />
//           </div>
//           <div className="col-md-6 p-4">
//             <h5 className="fw-bold text-center mb-3">
//               You’re just 1-step away to view<br />
//               <span className="text-danger">{state.model} Repair Cost!</span>
//             </h5>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   placeholder="Name"
//                   value={form.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="tel"
//                   className="form-control"
//                   name="phone"
//                   placeholder="Phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   placeholder="Email (optional)"
//                   value={form.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <textarea
//                   className="form-control"
//                   name="notes"
//                   placeholder="Your city or message"
//                   rows="2"
//                   value={form.notes}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>

//               <div className="text-start small mb-3 text-secondary">
//                 <i className="bi bi-check2-circle text-danger me-1"></i> Doorstep Repair
//                 <i className="bi bi-check2-circle text-danger ms-3 me-1"></i> Secure & Trusted
//                 <i className="bi bi-check2-circle text-danger ms-3 me-1"></i> 10 Years of Trusted Service
//               </div>

//               <button type="submit" className="btn btn-danger w-100 fw-semibold">
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default OrderDetails;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import "../styles/OrderDetails.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function OrderDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    notes: "",
    pickupAddress: "",
    preferredPickupAt: ""
  });

  useEffect(() => {
    const uid = localStorage.getItem("userId");
    if (!uid) {
      // save pending order and redirect to login
      if (state) localStorage.setItem("pendingOrder", JSON.stringify(state));
      Swal.fire({
        title: "Login Required",
        text: "Please login to continue with your request.",
        icon: "warning",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#ff007f"
      }).then(() => navigate("/login"));
    } else {
      setUserId(uid);
    }
  }, [state, navigate]);

  useEffect(() => {
    if (!state) {
      const saved = localStorage.getItem("pendingOrder");
      if (!saved) navigate("/select-brand");
    }
  }, [state, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      Swal.fire({
        icon: "error",
        title: "Session expired",
        text: "Please login again to submit your request.",
      });
      navigate("/login");
      return;
    }

    // Build payload expected by backend
    const order = {
      userId: Number(userId),
      brand: state?.brand,
      model: state?.model,
      issue: state?.issue,
      notes: form.notes || "",
      pickupAddress: form.pickupAddress || "",
      // preferredPickupAt must be ISO string (backend expects LocalDateTime.parse)
      // datetime-local input produces "YYYY-MM-DDTHH:mm" which is parseable
      preferredPickupAt: form.preferredPickupAt || null
    };

    try {
      setLoading(true);
      await axios.post(`${BASE_URL}/api/repair/submit`, order, {
        withCredentials: true
      });

      localStorage.removeItem("pendingOrder");

      Swal.fire({
        icon: "success",
        title: "Request Submitted!",
        text: "Thank you. We will contact you shortly.",
        confirmButtonColor: "#28a745"
      });

      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.error("submit error", err?.response?.data || err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: (err.response?.data?.error) || "Something went wrong while submitting the request.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!state) return <p className="text-center mt-5">Please select brand, model and issue again.</p>;

  return (
    <>
      <Navbar />
      <div className="order-popup-wrapper d-flex align-items-center justify-content-center py-5">
        <div className="order-popup-modal row bg-white shadow rounded-4 overflow-hidden">
          <div className="col-md-6 p-0">
            <img
              src="/images/technician.png"
              alt="Technician"
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>
          <div className="col-md-6 p-4">
            <h5 className="fw-bold text-center mb-3">
              You’re just 1-step away to view<br />
              <span className="text-danger">{state.model} Repair Cost!</span>
            </h5>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small text-muted">Selected Brand</label>
                <input type="text" className="form-control" value={state.brand} readOnly />
              </div>

              <div className="mb-3">
                <label className="form-label small text-muted">Selected Model</label>
                <input type="text" className="form-control" value={state.model} readOnly />
              </div>

              <div className="mb-3">
                <label className="form-label small text-muted">Issue</label>
                <input type="text" className="form-control" value={state.issue} readOnly />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="notes"
                  placeholder="Any additional notes (e.g. city, details)"
                  rows="2"
                  value={form.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="pickupAddress"
                  placeholder="Pickup Address (optional)"
                  value={form.pickupAddress}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label small text-muted">Preferred Pickup Time (optional)</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="preferredPickupAt"
                  value={form.preferredPickupAt}
                  onChange={handleChange}
                />
              </div>

              <div className="text-start small mb-3 text-secondary">
                <i className="bi bi-check2-circle text-danger me-1"></i> Doorstep Repair
                <i className="bi bi-check2-circle text-danger ms-3 me-1"></i> Secure & Trusted
                <i className="bi bi-check2-circle text-danger ms-3 me-1"></i> 10 Years of Trusted Service
              </div>

              <button type="submit" className="btn btn-danger w-100 fw-semibold" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
