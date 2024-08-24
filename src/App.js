import './App.css';
import Home from './component/Home';
import Contact from './component/Contact';
import HireDeveloper from './component/HireDeveloper';
import Services from './component/Services';
import Career from './component/Career';
import CaseStudies from './component/CaseStudies';
import AboutUs from './component/AboutUs';
import Navbar from './component/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Or Navbar2 based on your requirement */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hire-developer" element={<HireDeveloper />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </Router>
  );
}

export default App;
