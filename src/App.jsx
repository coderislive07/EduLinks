import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Australia from "./pages/StudyDestinations/Australia";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Countries from "./pages/Countries/Countries";
// debugged
import Careersaus from "../src/pages/Careers1/Australia/src/CareersAus";
import Careerscanada from "../src/pages/Careers1/Canada/src/CareersCanada";
import Careersgermany from "../src/pages/Careers1/Germany/src/CareersGermany";
import Careersnewzealand from "../src/pages/Careers1/New Zealand/src/CareersNewZealand/CareersNewZealand";
import Careersuk from "../src/pages/Careers1/UK/src/CareersUk";
import Careersusa from "../src/pages/Careers1/USA/src/CareersUsa";
import Aus from "../src/pages/Top Universities/Aus/aus";
import Canada from "./pages/Top Universities/canada/canada";
import Germany from "./pages/Top Universities/germany/germany";
import Nz from "../src/pages/Top Universities/newzealand/nz";
import Uk from "../src/pages/Top Universities/UK/uk";
import Usa from "./pages/Top Universities/Usa/usa";
import UniversityOfAus from "./pages/Top Universities/Aus/UniversityOfAus";
import CarrEngi from "../src/pages/InsideCareers/Page";
import Ausengandtech from "./pages/Careers1/Australia/fields/AusEngandTech";

import Healthsc from "./pages/Careers1/Australia/fields/Healthsc"; 
import NaturalSc from "./pages/Careers1/Australia/fields/NaturalSc";   
import InfoTech from "./pages/Careers1/Australia/fields/InfoTech";  
import EnviroSc from "./pages/Careers1/Australia/fields/EnviroSc"; 
import BioTech from "./pages/Careers1/Australia/fields/BioTech";  
import MathStat from "./pages/Careers1/Australia/fields/MathStat";   
import BusEco from "./pages/Careers1/Australia/fields/BusEco";
import Education from "./pages/Careers1/Australia/fields/Education";
import Psycho from "./pages/Careers1/Australia/fields/Psycho";
import Marketing from "./pages/Careers1/Australia/fields/Marketing";
import Data from "./pages/Careers1/Australia/fields/Data";
import Artificial from "./pages/Careers1/Australia/fields/Artificial";
import GraphMed from "./pages/Careers1/Australia/fields/GraphMed";
import Law from "./pages/Careers1/Australia/fields/Law";
import canAusengandtech from "./pages/Careers1/Canada/"

import Universityofcanada from "./pages/Top Universities/canada/universityofcanada";
import Universityofgermany from "./pages/Top Universities/germany/universityofgermany";
import UniversityofNz from "./pages/Top Universities/newzealand/UniversityOfNz"
import UniversityOfUk from "../src/pages/Top Universities/UK/UniversityOfUK";
import UniversityOfUsa from "../src/pages/Top Universities/Usa/UniversityOfUsa"

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
        <Route
          path="/canada-topuniversity/:id"
          element={<Universityofcanada />}
        />
        <Route path="/germany-topuniversity" element={<Germany />} />
        <Route
          path="/germany-topuniversity/:id"
          element={<Universityofgermany />}
        />
        <Route path="/nz-topuniversity" element={<Nz />} />
        <Route
          path="/nz-topuniversity/:id"
          element={<UniversityofNz/>}
        />
        <Route path="/uk-topuniversity" element={<Uk/>} />
        <Route
         path="/uk-topuniversity/:id" element={<UniversityOfUk/>} />
           <Route
          path="/usa-top-university/:id"
          element={<UniversityOfUsa/>}
        />
        <Route path="/usa-topuniversity" element={<Usa />} />
        <Route path="/about" element={<About />} />
        <Route path="/studydestination" element={<Countries />} />
        <Route path="/australia-career" element={<Careersaus />} />
        <Route path="/canada-career" element={<Careerscanada />} />
        <Route path="/germany-career" element={<Careersgermany />} />
        <Route path="/newzealand-career" element={<Careersnewzealand />} />
        <Route path="/uk-career" element={<Careersuk />} />
        <Route path="/usa-career" element={<Careersusa />} />
        <Route path="/australia-topuniversity" element={<Aus />} />
        <Route path="/canada-topuniversity" element={<Canada />} />
        <Route path="/germany-topuniversity" element={<Germany />} />
        <Route path="/nz-topuniversity" element={<Nz />} />
        <Route path="/uk-topuniversity" element={<Uk />} />
        <Route path="/usa-topuniversity" element={<Usa />} />
        <Route path="/carr-engineering" element={<CarrEngi />} />
        <Route path="/australia-engineering-technology" element={<Ausengandtech />} />



        
        <Route path="/australia-health-science" element={<Healthsc />} />
        <Route path="/australia-natural-sciences" element={<NaturalSc />} />
        <Route path="/australia-information-technology" element={<InfoTech/>} />
        <Route path="/australia-environmental-science" element={<EnviroSc />} />
        <Route path="/australia-biotechnology" element={<BioTech />} />
        <Route path="/australia-mathematics-statistics" element={<MathStat />} />
        <Route path="/australia-business-economics" element={<BusEco />} />
        <Route path="/australia-education" element={<Education />} />
        <Route path="/australia-psychology-neuroscience" element={<Psycho />} />
        <Route path="/australia-marketing" element={<Marketing />} />
        <Route path="/australia-data-science" element={<Data />} />
        <Route path="/australia-artificial-intelligence" element={<Artificial />} />
        <Route path="/australia-graphic-design-media" element={<GraphMed />} />
        <Route path="/australia-law-policy" element={<Law />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
