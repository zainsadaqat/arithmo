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
import ArithmoRebuild from './components/ArithmoRebuild';
import CookieConsentLib from './components/CookieConsentLib';
import NewArithmoWorks from './components/NewArithmoWorks';
import NewBlogs from './pages/NewBlogs';
import BlogPostView1 from './pages/BlogPostsView/BlogPostView1'
import BlogPostView2 from './pages/BlogPostsView/BlogPostView2'
import BlogPostView3 from './pages/BlogPostsView/BlogPostView3'
import BlogPostView4 from './pages/BlogPostsView/BlogPostView4'
import BlogPostView5 from './pages/BlogPostsView/BlogPostView5'
import BlogPostView6 from './pages/BlogPostsView/BlogPostView6'

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
        {/* <Route path="/howitworks" element={<ArithmoWorks />} /> */}
        <Route path="/howitworks" element={<NewArithmoWorks />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<GetInTouch />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blogs" element={<NewBlogs />} />
        <Route path="/blog-post-view1" element={<BlogPostView1 />} />
        <Route path="/blog-post-view2" element={<BlogPostView2 />} />
        <Route path="/blog-post-view3" element={<BlogPostView3 />} />
        <Route path="/blog-post-view4" element={<BlogPostView4 />} />
        <Route path="/blog-post-view5" element={<BlogPostView5 />} />
        <Route path="/blog-post-view6" element={<BlogPostView6 />} />
      </Routes>
      <CookieConsentLib />
      <Footer />
    </div>
  );
}

export default App;
