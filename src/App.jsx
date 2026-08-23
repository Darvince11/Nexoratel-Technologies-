import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ChatWidget from './components/ChatWidget';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import IndustryDetails from './pages/IndustryDetails';
import ProductPage from './pages/ProductPage'; 
// import Testimonials from './pages/Testimonials'; // Hidden until ready
// import Blog from './pages/Blog';                 // Hidden until ready
import Contact from './pages/Contact';
import Terms from './pages/Terms';           
import AmlPolicy from './pages/AmlPolicy';   

// A helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Generic Placeholder Component for remaining minor secondary pages
const GenericPage = ({ title }) => (
  <div className="container py-20 text-center slide-up" style={{ minHeight: '60vh' }}>
    <h1 style={{ fontSize: '3rem', marginTop: '100px' }}>{title}</h1>
    <p style={{ color: 'var(--text-gray)', marginTop: '20px' }}>Content for {title} coming soon.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Core Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<IndustryDetails />} />
        <Route path="/products" element={<ProductPage />} />
        
        {/* Disabled for now - uncomment when ready to launch */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        
        <Route path="/contact" element={<Contact />} />
        
        {/* Official Legal Pages */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/aml-policy" element={<AmlPolicy />} />

        {/* Secondary pages kept as placeholders */}
        <Route path="/who-we-are" element={<GenericPage title="Who We Are" />} />
        <Route path="/why-choose-us" element={<GenericPage title="Why Choose Us" />} />
        <Route path="/careers" element={<GenericPage title="Careers" />} />
        <Route path="/faqs" element={<GenericPage title="FAQs" />} />
        
        
      </Routes>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </Router>
  );
}
