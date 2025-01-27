import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Australia from './pages/StudyDestinations/Australia3';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contacts from '../src/components/contact/Contact'
import Countries from "./pages/Countries/Countries"
// debugged
import Careersaus from '../src/pages/Careers1/Australia/src/CareersAus'
import Careerscanada from '../src/pages/Careers1/Canada/src/CareersCanada'
import Careersgermany from '../src/pages/Careers1/Germany/src/CareersGermany'
import Careersnewzealand from '../src/pages/Careers1/New Zealand/src/CareersNewZealand/CareersNewZealand'
import Careersuk from '../src/pages/Careers1/UK/src/CareersUk'
import Careersusa from '../src/pages/Careers1/USA/src/CareersUsa'
import Aus from '../src/pages/Top Universities/Aus/aus'
import Studyvisa from "../src/pages/Services/(sub)/StudentVisa"
import Scholarship from "../src/pages/Services/(sub)/Scholarship"
import Loan from "../src/pages/Services/(sub)/Loan"
import PostLanding from "../src/pages/Services/(sub)/PostLanding"
import Edulink from "../src/pages/Services/(sub)/EduLink"
import CareeGuide from "../src/pages/Services/(sub)/CareerGuide"
import USA1 from "../src/pages/StudyDestinations/USA1"
import Canada2 from "../src/pages/StudyDestinations/Canada2"
import Australia3 from "../src/pages/StudyDestinations/Australia3"
import NewZealand4 from './pages/StudyDestinations/NewZealand4';
import UK5 from "../src/pages/StudyDestinations/Uk5"
import Germany6 from "../src/pages/StudyDestinations/Geramany6"

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
        <Route path="/australia-career"element={<Careersaus/>}/>
        <Route path="/canada-career"element={<Careerscanada/>}/>
        <Route path="/germany-career"element={<Careersgermany/>}/>
        <Route path="/newzealand-career"element={<Careersnewzealand/>}/>
        <Route path="/uk-career"element={<Careersuk/>}/>
        <Route path="/usa-career"element={<Careersusa/>}/>
        <Route path="/australia-topuniversity"element={<Aus/>}/>
        <Route path="/student-visa" element={<Studyvisa/>} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/post-landing" element={<PostLanding />} />
        <Route path="/edulink" element={<Edulink />} />
        <Route path="/career-guide" element={<CareeGuide />} />
        <Route path="/usa" element={<USA1 />} />
        <Route path="/canada" element={<Canada2 />} />
        <Route path="/australia" element={<Australia3 />} />
        <Route path="/newzealand" element={<NewZealand4 />} />
        <Route path="/uk" element={<UK5 />} />
        <Route path="/germany" element={<Germany6 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
