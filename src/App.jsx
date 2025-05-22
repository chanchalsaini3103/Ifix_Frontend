import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import Services from './components/Services';
import RequestForm from './components/RequestForm';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import BrandModels from './components/BrandModels';
import Navbar from './components/Navbar';
import AboutContact from './components/AboutContact';
import RequestRepair from './components/RequestRepair';
import Login from './components/Login';
import Register from './components/Register';

function BrandPage() {
  const { brandName } = useParams();
  return <BrandModels brand={brandName} />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/request" element={<RequestRepair />} />
        <Route path="/contact" element={<AboutContact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/brands/:brandName" element={<BrandPage />} />
      </Routes>
    </Router>
  );
}

export default App;
