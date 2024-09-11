import './App.css';
import Home from './component/Home';
import Contact from './component/Contact';
import Services from './component/Services';
import AboutUs from './component/AboutUs';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Technologies from './component/Technologies';
import SuccessStories from './component/SuccessStories';
import Partners from './component/Partners';
import Products from './component/Products';
import Industries from './component/Industries';
import Transportation from './component/Transportation';
import Footer from './component/Footer';
import ECommerce from './component/ECommerce';
import Clients from './component/Clients';
import Careers from './component/Careers';
import StockExchange from './component/StockExchange';
import ScrollToTop from './component/ScrollToTop';
import ScrollToTopButton from './component/ScrollButton';
import ScriptsManager from './component/ScriptsManager';


function App() {
  return (
    <Router>
      <ScriptsManager/>
     < ScrollToTop/>    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/industries" element={<Industries/>} />
        <Route path="/transportation" element={<Transportation/>} />
        <Route path="/eCommerce" element={<ECommerce/>} />
        <Route path="/stock-exchange" element={<StockExchange/>} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      <ScrollToTopButton/>
      
    </Router>
  );
}

export default App;
