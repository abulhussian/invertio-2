import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Industries from "./pages/Industries"
import Work from "./pages/Work"
import Blogs from "./pages/Blogs"
import BlogPost from "./pages/BlogPost"
import About from "./pages/About"
import Careers from "./pages/Careers"
import Job from "./pages/Job"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import { ThemeProvider } from "./context/ThemeContext"
import DigitalInformation from "./pages/DigitalTransformation"
import CloudServices from "./pages/CloudServices"
import SoftwareDevelopment from "./pages/SoftwareDevelopment"
import DataAnalytics from "./pages/DataAnalytics"
import CyberSecurity from "./pages/CyberSecurity"
import ITConsulting from "./pages/ItConsulting"
import Education from "./pages/Education"
import Logistics from "./pages/Logistics"
import RetailEcommerce from "./pages/RetailEcommerence"
import FinanceBanking from "./pages/FinanceBanking"
import HealthcareIndustry from "./pages/Healthcare"
import InformationServices from "./pages/Information"
import QatarMoehe from "./pages/QatarMoehe"
import AIPilot from "./pages/AiPilot"
import BaladiExpressMart from "./pages/BaladiExpress"
import Singleview from "./pages/SingleView"
import SamasaLogistics from "./pages/Samsa"
import KPMG from "./pages/Kpmg"
import StudyFoxAI from "./pages/StudyFox"
import Taxi360 from "./pages/Taxi360"
import PrivacyPolicy from "./pages/Privacy"
import TermsConditions from "./pages/Terms&Conditions"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/work" element={<Work />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:id" element={<Job />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/digitalTransformation" element={<DigitalInformation />} />
              <Route path="/cloudServices" element={<CloudServices />} />
              <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
              <Route path="/dataanalytics" element={<DataAnalytics />} />
              <Route path="/cybersecurity" element={<CyberSecurity />} />
              <Route path="/itconsulting" element={<ITConsulting />} />
              <Route path="/education" element={<Education />} />
              <Route path="/logistics" element={<Logistics />} />
              <Route path="/retail" element={<RetailEcommerce />} />
              <Route path="/finance" element={<FinanceBanking />} />
              <Route path="/healthcare" element={<HealthcareIndustry />} />
              <Route path="/informationservices" element={<InformationServices />} />
              <Route path="/qatar-moehe" element={<QatarMoehe />} />
              <Route path="/ai-pilot" element={<AIPilot />} />
              <Route path="/baladi-express-mart" element={<BaladiExpressMart />} /> 
               <Route path="/single-view" element={<Singleview />} />  
              <Route path="/smsa-express" element={<SamasaLogistics />} />  
               <Route path="/kpmg" element={<KPMG />} /> 
              <Route path="/studyfox-ai" element={<StudyFoxAI />} />
              <Route path="/360taxi" element={<Taxi360 />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />



              <Route path="*" element={<NotFound />} />
              
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
