import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Industries from "./pages/Industries"
import Work from "./pages/Work"
import Insights from "./pages/Insights"
import InsightPost from "./pages/InsightPost"
import About from "./pages/About"
import Careers from "./pages/Careers"
import Job from "./pages/Job"
import Contact from "./pages/Contact"
import IrisVideoAnalytics from "./pages/IrisVideoAnalytics"
import NotFound from "./pages/NotFound"
import { ThemeProvider } from "./context/ThemeContext"

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
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:id" element={<Job />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/irisVideoAnalytics" element={<IrisVideoAnalytics />} />
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
