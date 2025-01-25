import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Australia from './pages/StudyDestinations/Australia';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contacts from '../src/components/contact/Contact'
import Countries from "./pages/Countries/Countries"
// debugged
// import Careersaus from '../src/pages/Careers/Australia/src/CareersAus'
// import Careerscanada from '../src/pages/Careers/Canada/src/CareersCanada'
// import Careersgermany from '../src/pages/Careers/Germany/src/CareersGermany'
// import Careersnewzealand from '../src/pages/Careers/New Zealand/src/CareersNewZealand/CareersNewZealand'
// import Careersuk from '../src/pages/Careers/UK/src/CareersUk'
// import Careersusa from '../src/pages/Careers/USA/src/CareersUsa'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/studyinaustralia" element={<Australia />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about"element={<About/>}/>
        <Route path="/studydestination"element={<Countries/>}/>
        {/* <Route path="/australia-career"element={<Careersaus/>}/>
        <Route path="/canada-career"element={<Careerscanada/>}/>
        <Route path="/germany-career"element={<Careersgermany/>}/>
        <Route path="/newzealand-career"element={<Careersnewzealand/>}/>
        <Route path="/uk-career"element={<Careersuk/>}/>
        <Route path="/usa-career"element={<Careersusa/>}/> */}

      </Routes>
      <Contacts/>
      <Footer />
    </Router>
  );
}

export default App;
