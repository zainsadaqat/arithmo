import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Info from './components/Info';
import Structure from './components/Structure';
import UseCases from './components/UseCases';
import ArithmoWorks from './components/ArithmoWorks';
import GetReady from './components/GetReady';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Features from './components/Features';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import Imprint from './pages/Imprint';
import CookiePolicy from './pages/CookiePolicy';
import AboutUs from './pages/AboutUs';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';

function App() {
  return (
    <div>
      <header className="bg-white sticky top-0 z-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="relative">
          <Navbar />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>

      
    </div>
  );
}

export default App;
