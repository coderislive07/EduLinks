import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Australia from './pages/StudyDestinations/Australia';
import About from './pages/About/About';
import Contacts from '../src/components/contact/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/studyinaustralia" element={<Australia />} />
        <Route path="/about"element={<About/>}/>
      </Routes>
      <Contacts/>
      <Footer />
    </Router>
  );
}

export default App;
