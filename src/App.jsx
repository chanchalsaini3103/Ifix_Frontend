import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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
import PhoneRegister from "./components/PhoneRegister";
import AdminEditModels from "./components/AdminEditModels";
import DeviceBrandSelector from "./components/DeviceBrandSelector";
import DeviceModelSelector from "./components/DeviceModelSelector";
import DeviceIssueSelector from "./components/DeviceIssueSelector";
import Navbar from "./components/Navbar";
import ResetPasswordOtp from "./components/ResetPasswordOtp";

// Extracted BrandPage for brand route
function BrandPage() {
  const { brandName } = useParams();
  return <BrandModels brand={brandName} />;
}

// Layout component to conditionally show Navbar
const Layout = ({ children }) => {
  const location = useLocation();

  // Add all admin routes you want to exclude Navbar from
  const hideNavbarRoutes = [
    "/admin-dashboard",
    "/admin/edit-models"
  ];

  const shouldHideNavbar = hideNavbarRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        {!shouldHideNavbar && <Navbar />}
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
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
          <Route path="/reset-password-otp" element={<ResetPasswordOtp />} />
          <Route path="/admin/edit-models" element={<AdminEditModels />} />

          {/* Repair service routes */}
          <Route path="/services/mobile-repair" element={<DeviceBrandSelector category="phones" />} />
          <Route path="/services/ipad-repair" element={<DeviceBrandSelector category="ipads" />} />
          <Route path="/services/tablet-repair" element={<DeviceBrandSelector category="tablets" />} />
          <Route path="/services/macbook-repair" element={<DeviceBrandSelector category="macbooks" />} />
          <Route path="/services/apple-watch-repair" element={<DeviceBrandSelector category="watches" />} />

          <Route path="/services/mobile-repair/:brandSlug" element={<DeviceModelSelector deviceType="phones" />} />
          <Route path="/services/ipad-repair/:brandSlug" element={<DeviceModelSelector deviceType="ipads" />} />
          <Route path="/services/tablet-repair/:brandSlug" element={<DeviceModelSelector deviceType="tablets" />} />
          <Route path="/services/macbook-repair/:brandSlug" element={<DeviceModelSelector deviceType="macbooks" />} />
          <Route path="/services/apple-watch-repair/models" element={<DeviceModelSelector deviceType="watches" />} />

          <Route path="/services/mobile-repair/:brand/:model" element={<DeviceIssueSelector deviceType="phones" />} />
          <Route path="/services/ipad-repair/:brand/:model/issue" element={<DeviceIssueSelector deviceType="ipads" />} />
          <Route path="/services/tablet-repair/:brand/:model/issue" element={<DeviceIssueSelector deviceType="tablets" />} />
          <Route path="/services/macbook-repair/:brandSlug/issues" element={<DeviceIssueSelector deviceType="macbooks" />} />
          <Route path="/services/apple-watch-repair/issues" element={<DeviceIssueSelector deviceType="watches" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
