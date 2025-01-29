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
import CanAusengandtech from "./pages/Careers1/Canada/fields/AusEngandTech";
import CanHealthsc from "./pages/Careers1/Canada/fields/Healthsc";
import CanNaturalSc from "./pages/Careers1/Canada/fields/NaturalSc";
import CanInfoTech from "./pages/Careers1/Canada/fields/InfoTech";
import CanEnviroSc from "./pages/Careers1/Canada/fields/EnviroSc";
import CanBioTech from "./pages/Careers1/Canada/fields/BioTech";
import CanMathStat from "./pages/Careers1/Canada/fields/MathStat";
import CanBusEco from "./pages/Careers1/Canada/fields/BusEco";
import CanEducation from "./pages/Careers1/Canada/fields/Education";
import CanPsycho from "./pages/Careers1/Canada/fields/Psycho";
import CanMarketing from "./pages/Careers1/Canada/fields/Marketing";
import CanData from "./pages/Careers1/Canada/fields/Data";
import CanArtificial from "./pages/Careers1/Canada/fields/Artificial";
import CanGraphMed from "./pages/Careers1/Canada/fields/GraphMed";
import CanLaw from "./pages/Careers1/Canada/fields/Law";

import UsaEngandTech from "./pages/Careers1/USA/fields/AusEngandTech";
import UsaHealthsc from "./pages/Careers1/USA/fields/Healthsc";
import UsaNaturalSc from "./pages/Careers1/USA/fields/NaturalSc";
import UsaInfoTech from "./pages/Careers1/USA/fields/InfoTech";
import UsaEnviroSc from "./pages/Careers1/USA/fields/EnviroSc";
import UsaBioTech from "./pages/Careers1/USA/fields/BioTech";
import UsaMathStat from "./pages/Careers1/USA/fields/MathStat";
import UsaBusEco from "./pages/Careers1/USA/fields/BusEco";
import UsaEducation from "./pages/Careers1/USA/fields/Education";
import UsaPsycho from "./pages/Careers1/USA/fields/Psycho";
import UsaMarketing from "./pages/Careers1/USA/fields/Marketing";
import UsaData from "./pages/Careers1/USA/fields/Data";
import UsaArtificial from "./pages/Careers1/USA/fields/Artificial";
import UsaGraphMed from "./pages/Careers1/USA/fields/GraphMed";
import UsaLaw from "./pages/Careers1/USA/fields/Law";

import UkEngandTech from "./pages/Careers1/UK/fields/AusEngandTech";
import UkHealthsc from "./pages/Careers1/UK/fields/Healthsc";
import UkNaturalSc from "./pages/Careers1/UK/fields/NaturalSc";
import UkInfoTech from "./pages/Careers1/UK/fields/InfoTech";
import UkEnviroSc from "./pages/Careers1/UK/fields/EnviroSc";
import UkBioTech from "./pages/Careers1/UK/fields/BioTech";
import UkMathStat from "./pages/Careers1/UK/fields/MathStat";
import UkBusEco from "./pages/Careers1/UK/fields/BusEco";
import UkEducation from "./pages/Careers1/UK/fields/Education";
import UkPsycho from "./pages/Careers1/UK/fields/Psycho";
import UkMarketing from "./pages/Careers1/UK/fields/Marketing";
import UkData from "./pages/Careers1/UK/fields/Data";
import UkArtificial from "./pages/Careers1/UK/fields/Artificial";
import UkGraphMed from "./pages/Careers1/UK/fields/GraphMed";
import UkLaw from "./pages/Careers1/UK/fields/Law";

import GerEngandTech from "./pages/Careers1/Germany/fields/AusEngandTech";
import GerHealthsc from "./pages/Careers1/Germany/fields/Healthsc";
import GerNaturalSc from "./pages/Careers1/Germany/fields/NaturalSc";
import GerInfoTech from "./pages/Careers1/Germany/fields/InfoTech";
import GerEnviroSc from "./pages/Careers1/Germany/fields/EnviroSc";
import GerBioTech from "./pages/Careers1/Germany/fields/BioTech";
import GerMathStat from "./pages/Careers1/Germany/fields/MathStat";
import GerBusEco from "./pages/Careers1/Germany/fields/BusEco";
import GerEducation from "./pages/Careers1/Germany/fields/Education";
import GerPsycho from "./pages/Careers1/Germany/fields/Psycho";
import GerMarketing from "./pages/Careers1/Germany/fields/Marketing";
import GerData from "./pages/Careers1/Germany/fields/Data";
import GerArtificial from "./pages/Careers1/Germany/fields/Artificial";
import GerGraphMed from "./pages/Careers1/Germany/fields/GraphMed";
import GerLaw from "./pages/Careers1/Germany/fields/Law";

import NzEngandTech from "./pages/Careers1/New Zealand/fields/AusEngandTech";
import NzHealthsc from "./pages/Careers1/New Zealand/fields/Healthsc";
import NzNaturalSc from "./pages/Careers1/New Zealand/fields/NaturalSc";
import NzInfoTech from "./pages/Careers1/New Zealand/fields/InfoTech";
import NzEnviroSc from "./pages/Careers1/New Zealand/fields/EnviroSc";
import NzBioTech from "./pages/Careers1/New Zealand/fields/BioTech";
import NzMathStat from "./pages/Careers1/New Zealand/fields/MathStat";
import NzBusEco from "./pages/Careers1/New Zealand/fields/BusEco";
import NzEducation from "./pages/Careers1/New Zealand/fields/Education";
import NzPsycho from "./pages/Careers1/New Zealand/fields/Psycho";
import NzMarketing from "./pages/Careers1/New Zealand/fields/Marketing";
import NzData from "./pages/Careers1/New Zealand/fields/Data";
import NzArtificial from "./pages/Careers1/New Zealand/fields/Artificial";
import NzGraphMed from "./pages/Careers1/New Zealand/fields/GraphMed";
import NzLaw from "./pages/Careers1/New Zealand/fields/Law";

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
        <Route path="/canada-engineering-technology" element={<CanAusengandtech />} />
        <Route path="/canada-health-science" element={<CanHealthsc />} />
        <Route path="/canada-natural-sciences" element={<CanNaturalSc />} />
        <Route path="/canada-information-technology" element={<CanInfoTech />} />
        <Route path="/canada-environmental-science" element={<CanEnviroSc />} />
        <Route path="/canada-biotechnology" element={<CanBioTech />} />
        <Route path="/canada-mathematics-statistics" element={<CanMathStat />} />
        <Route path="/canada-business-economics" element={<CanBusEco />} />
        <Route path="/canada-education" element={<CanEducation />} />
        <Route path="/canada-psychology-neuroscience" element={<CanPsycho />} />
        <Route path="/canada-marketing" element={<CanMarketing />} />
        <Route path="/canada-data-science" element={<CanData />} />
        <Route path="/canada-artificial-intelligence" element={<CanArtificial />} />
        <Route path="/canada-graphic-design-media" element={<CanGraphMed />} />
        <Route path="/canada-law-policy" element={<CanLaw />} />
        <Route path="/usa-engineering-technology" element={<UsaEngandTech />} />
        <Route path="/usa-health-science" element={<UsaHealthsc />} />
        <Route path="/usa-natural-sciences" element={<UsaNaturalSc />} />
        <Route path="/usa-information-technology" element={<UsaInfoTech />} />
        <Route path="/usa-environmental-science" element={<UsaEnviroSc />} />
        <Route path="/usa-biotechnology" element={<UsaBioTech />} />
        <Route path="/usa-mathematics-statistics" element={<UsaMathStat />} />
        <Route path="/usa-business-economics" element={<UsaBusEco />} />
        <Route path="/usa-education" element={<UsaEducation />} />
        <Route path="/usa-psychology-neuroscience" element={<UsaPsycho />} />
        <Route path="/usa-marketing" element={<UsaMarketing />} />
        <Route path="/usa-data-science" element={<UsaData />} />
        <Route path="/usa-artificial-intelligence" element={<UsaArtificial />} />
        <Route path="/usa-graphic-design-media" element={<UsaGraphMed />} />
        <Route path="/usa-law-policy" element={<UsaLaw />} />
        <Route path="/uk-engineering-technology" element={<UkEngandTech />} />
        <Route path="/uk-health-science" element={<UkHealthsc />} />
        <Route path="/uk-natural-sciences" element={<UkNaturalSc />} />
        <Route path="/uk-information-technology" element={<UkInfoTech />} />
        <Route path="/uk-environmental-science" element={<UkEnviroSc />} />
        <Route path="/uk-biotechnology" element={<UkBioTech />} />
        <Route path="/uk-mathematics-statistics" element={<UkMathStat />} />
        <Route path="/uk-business-economics" element={<UkBusEco />} />
        <Route path="/uk-education" element={<UkEducation />} />
        <Route path="/uk-psychology-neuroscience" element={<UkPsycho />} />
        <Route path="/uk-marketing" element={<UkMarketing />} />
        <Route path="/uk-data-science" element={<UkData />} />
        <Route path="/uk-artificial-intelligence" element={<UkArtificial />} />
        <Route path="/uk-graphic-design-media" element={<UkGraphMed />} />
        <Route path="/uk-law-policy" element={<UkLaw />} />
        <Route path="/germany-engineering-technology" element={<GerEngandTech />} />
        <Route path="/germany-health-science" element={<GerHealthsc />} />
        <Route path="/germany-natural-sciences" element={<GerNaturalSc />} />
        <Route path="/germany-information-technology" element={<GerInfoTech />} />
        <Route path="/germany-environmental-science" element={<GerEnviroSc />} />
        <Route path="/germany-biotechnology" element={<GerBioTech />} />
        <Route path="/germany-mathematics-statistics" element={<GerMathStat />} />
        <Route path="/germany-business-economics" element={<GerBusEco />} />
        <Route path="/germany-education" element={<GerEducation />} />
        <Route path="/germany-psychology-neuroscience" element={<GerPsycho />} />
        <Route path="/germany-marketing" element={<GerMarketing />} />
        <Route path="/germany-data-science" element={<GerData />} />
        <Route path="/germany-artificial-intelligence" element={<GerArtificial />} />
        <Route path="/germany-graphic-design-media" element={<GerGraphMed />} />
        <Route path="/germany-law-policy" element={<GerLaw />} />
        <Route path="/newzealand-engineering-technology" element={<NzEngandTech />} />
        <Route path="/newzealand-health-science" element={<NzHealthsc />} />
        <Route path="/newzealand-natural-sciences" element={<NzNaturalSc />} />
        <Route path="/newzealand-information-technology" element={<NzInfoTech />} />
        <Route path="/newzealand-environmental-science" element={<NzEnviroSc />} />
        <Route path="/newzealand-biotechnology" element={<NzBioTech />} />
        <Route path="/newzealand-mathematics-statistics" element={<NzMathStat />} />
        <Route path="/newzealand-business-economics" element={<NzBusEco />} />
        <Route path="/newzealand-education" element={<NzEducation />} />
        <Route path="/newzealand-psychology-neuroscience" element={<NzPsycho />} />
        <Route path="/newzealand-marketing" element={<NzMarketing />} />
        <Route path="/newzealand-data-science" element={<NzData />} />
        <Route path="/newzealand-artificial-intelligence" element={<NzArtificial />} />
        <Route path="/newzealand-graphic-design-media" element={<NzGraphMed />} />
        <Route path="/newzealand-law-policy" element={<NzLaw />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
