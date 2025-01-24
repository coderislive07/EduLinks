import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Australia from './pages/StudyDestinations/Australia';
import Services from './pages/Services/Services';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/studyinaustralia" element={<Australia />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
