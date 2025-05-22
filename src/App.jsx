import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import Services from './components/Services';
import RequestForm from './components/RequestForm';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
