import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/seo/ScrollToTop';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CommercialSolar from './pages/CommercialSolar';
import ResidentialSolar from './pages/ResidentialSolar';
import HousingSociety from './pages/HousingSociety';
import UtilityScaleSolar from './pages/UtilityScaleSolar';
import OffGridSolar from './pages/OffGridSolar';
import OnGridSolar from './pages/OnGridSolar';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import SolarCalculator from './pages/SolarCalculator';
import OurProjects from './pages/OurProjects';
import ConsultationForm from './components/sections/ConsultationForm';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commercial" element={<CommercialSolar />} />
          <Route path="/residential" element={<ResidentialSolar />} />
          <Route path="/housing" element={<HousingSociety />} />
          <Route path="/housing-society" element={<Navigate to="/housing" replace />} />
          <Route path="/utility-scale" element={<UtilityScaleSolar />} />
          <Route path="/off-grid" element={<OffGridSolar />} />
          <Route path="/on-grid" element={<OnGridSolar />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/calculator" element={<SolarCalculator />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/consultation" element={<ConsultationForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;