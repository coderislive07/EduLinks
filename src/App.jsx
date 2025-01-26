import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Australia from "./pages/StudyDestinations/Australia";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contacts from "../src/components/contact/Contact";
import Countries from "./pages/Countries/Countries";
// debugged
import Careersaus from "../src/pages/Careers1/Australia/src/CareersAus";
import Careerscanada from "../src/pages/Careers1/Canada/src/CareersCanada";
import Careersgermany from "../src/pages/Careers1/Germany/src/CareersGermany";
import Careersnewzealand from "../src/pages/Careers1/New Zealand/src/CareersNewZealand/CareersNewZealand";
import Careersuk from "../src/pages/Careers1/UK/src/CareersUk";
import Careersusa from "../src/pages/Careers1/USA/src/CareersUsa";
import Aus from "../src/pages/Top Universities/Aus/aus";
import Canada from "../src/pages/Top Universities/canada";
import Germany from "../src/pages/Top Universities/germany";
import Nz from "../src/pages/Top Universities/nz";
import Uk from "../src/pages/Top Universities/uk";
import Usa from "../src/pages/Top Universities/usa";
import UniversityOfAus from "./pages/Top Universities/Aus/UniversityOfAus";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/studyinaustralia" element={<Australia />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/studydestination" element={<Countries />} />
        <Route path="/australia-career" element={<Careersaus />} />
        <Route path="/canada-career" element={<Careerscanada />} />
        <Route path="/germany-career" element={<Careersgermany />} />
        <Route path="/newzealand-career" element={<Careersnewzealand />} />
        <Route path="/uk-career" element={<Careersuk />} />
        <Route path="/usa-career" element={<Careersusa />} />
        <Route path="/australia-topuniversity" element={<Aus />} />
        <Route
          path="/australia-topuniversity/:id"
          element={<UniversityOfAus />}
        />
        <Route path="/canada-topuniversity" element={<Canada />} />
        <Route path="/germany-topuniversity" element={<Germany />} />
        <Route path="/nz-topuniversity" element={<Nz />} />
        <Route path="/uk-topuniversity" element={<Uk />} />
        <Route path="/usa-topuniversity" element={<Usa />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
