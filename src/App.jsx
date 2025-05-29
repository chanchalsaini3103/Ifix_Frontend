import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import Services from './components/Services';

import AboutContact from './components/AboutContact';
import RequestRepair from './components/RequestRepair';
import Login from './components/Login';

import OrderDetails from './components/OrderDetails';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import MyRepairRequests from './components/MyRepairRequests';
import ResetPassword from './components/ResetPassword';
import PhoneRegister from './components/PhoneRegister';
import AdminEditModels from './components/AdminEditModels';
import MobileBrandSelect from './components/MobileBrandSelect';
import MobileModels from './components/MobileModels';

import ModelIssues from './components/ModelIssues';
import IpadRepairBrands from './components/IpadRepairBrands';
import IpadModels from './components/IpadModels';
import IpadIssues from './components/IpadIssues';
import AppleWatchCategories from './components/AppleWatchCategories';
import AppleWatchModels from './components/AppleWatchModels';
import AppleWatchIssues from "./components/AppleWatchIssues"; // adjust the path if needed
import MacbookCategory from './components/MacbookCategory';
import MacbookModels from './components/MacbookModels';
import MacbookIssueSelect from './components/MacbookIssueSelect';
import TabletRepairBrands from './components/TabletRepairBrands';
import TabletModels from './components/TabletModels';
import TabletIssues from './components/TabletIssues';



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
          
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/my-requests" element={<MyRepairRequests />} />
            <Route path="/reset-password" element={<ResetPassword />} />
             <Route path="/admin/edit-models" element={<AdminEditModels />} />
            
<Route path="/services/mobile-repair" element={<MobileBrandSelect />} />
  <Route path="/repair/mobile-repair/:brand" element={<MobileModels />} />
        <Route path="/repair/mobile-repair/:brand/:model" element={<ModelIssues />} />


 <Route path="/services/ipad-repair" element={<IpadRepairBrands />} />
      <Route path="/ipad-repair/:brand" element={<IpadModels />} />
      <Route path="/ipad-repair/:brand/:model/issue" element={<IpadIssues />} />
     

     <Route path="/services/apple-watch-repair" element={<AppleWatchCategories />} />
<Route path="/services/apple-watch-repair/:category" element={<AppleWatchModels />} />
<Route path="/services/apple-watch-repair/issues" element={<AppleWatchIssues />} />



<Route path="/services/macbook-repair" element={<MacbookCategory />} />
<Route path="/services/macbook-repair/:type" element={<MacbookModels />} />
<Route path="/services/macbook-repair/:type/issues" element={<MacbookIssueSelect />} />


<Route path="/services/tablet-repair" element={<TabletRepairBrands />} />
<Route path="/services/tablet-repair/:brand" element={<TabletModels />} />
<Route path="/services/tablet-repair/:brand/:model/issue" element={<TabletIssues />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
