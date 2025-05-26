import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import Services from './components/Services';
import BrandModels from './components/BrandModels';
import AboutContact from './components/AboutContact';
import RequestRepair from './components/RequestRepair';
import Login from './components/Login';
import Register from './components/Register';
import ModelIssues from './components/ModelIssues';
import OrderDetails from './components/OrderDetails';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import MyRepairRequests from './components/MyRepairRequests';
import ResetPassword from './components/ResetPassword';
import PhoneRegister from './components/PhoneRegister';
import AdminEditModels from './components/AdminEditModels';


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
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<PhoneRegister />} />
            <Route path="/services" element={<Services />} />
            <Route path="/request" element={<RequestRepair />} />
            <Route path="/contact" element={<AboutContact />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/brands/:brandName" element={<BrandPage />} />
            <Route path="/brands/:brand/:model" element={<ModelIssues />} />
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/my-requests" element={<MyRepairRequests />} />
            <Route path="/reset-password" element={<ResetPassword />} />
             <Route path="/admin/edit-models" element={<AdminEditModels />} />
            

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
