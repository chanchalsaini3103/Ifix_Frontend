import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import HeroPage from "./components/HeroPage";

import AboutContact from "./components/AboutContact";
import RequestRepair from "./components/RequestRepair";
import Login from "./components/Login";

import OrderDetails from "./components/OrderDetails";
import AdminDashboard from "./components/AdminDashboard";
import Footer from "./components/Footer";
import MyRepairRequests from "./components/MyRepairRequests";
import ResetPassword from "./components/ResetPassword";
import PhoneRegister from "./components/PhoneRegister";
import AdminEditModels from "./components/AdminEditModels";
import DeviceBrandSelector from "./components/DeviceBrandSelector";
import DeviceModelSelector from "./components/DeviceModelSelector";
import DeviceIssueSelector from "./components/DeviceIssueSelector";
import Navbar from "./components/Navbar";

function BrandPage() {
  const { brandName } = useParams();
  return <BrandModels brand={brandName} />;
}

function App() {
  return (
    <Router>
      {/* 👇 Flex layout container for sticky footer */}
      <div className="d-flex flex-column min-vh-100">
        {/* 👇 Main content area grows to fill screen */}
        <main className="flex-grow-1">
          <Navbar />
          <Routes>
            
            <Route path="/" element={<HeroPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<PhoneRegister />} />

            <Route path="/request" element={<RequestRepair />} />
            <Route path="/contact" element={<AboutContact />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/brands/:brandName" element={<BrandPage />} />

            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/my-requests" element={<MyRepairRequests />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/admin/edit-models" element={<AdminEditModels />} />

            <Route
              path="/services/mobile-repair"
              element={<DeviceBrandSelector category="phones" />}
            />
            <Route
              path="/services/ipad-repair"
              element={<DeviceBrandSelector category="ipads" />}
            />
            <Route
              path="/services/tablet-repair"
              element={<DeviceBrandSelector category="tablets" />}
            />
            <Route
              path="/services/macbook-repair"
              element={<DeviceBrandSelector category="macbooks" />}
            />
            <Route
              path="/services/apple-watch-repair"
              element={<DeviceBrandSelector category="watches" />}
            />

            <Route
              path="/services/mobile-repair/:brandSlug"
              element={<DeviceModelSelector deviceType="phones" />}
            />
            <Route
              path="/services/ipad-repair/:brandSlug"
              element={<DeviceModelSelector deviceType="ipads" />}
            />
            <Route
              path="/services/tablet-repair/:brandSlug"
              element={<DeviceModelSelector deviceType="tablets" />}
            />
            <Route
              path="/services/macbook-repair/:brandSlug"
              element={<DeviceModelSelector deviceType="macbooks" />}
            />
            <Route
              path="/services/apple-watch-repair/models"
              element={<DeviceModelSelector deviceType="watches" />}
            />

            <Route
              path="/services/mobile-repair/:brand/:model"
              element={<DeviceIssueSelector deviceType="phones" />}
            />
            <Route
              path="/services/ipad-repair/:brand/:model/issue"
              element={<DeviceIssueSelector deviceType="ipads" />}
            />
            <Route
              path="/services/tablet-repair/:brand/:model/issue"
              element={<DeviceIssueSelector deviceType="tablets" />}
            />
            <Route
              path="/services/macbook-repair/:brandSlug/issues"
              element={<DeviceIssueSelector deviceType="macbooks" />}
            />
            <Route
              path="/services/apple-watch-repair/issues"
              element={<DeviceIssueSelector deviceType="watches" />}
            />


            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
