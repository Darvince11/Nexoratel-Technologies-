import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- INLINE SVG ICONS ---
export const IconMenu = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>;
export const IconClose = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>;
export const IconChevron = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6l4 4 4-4"/></svg>;
export const IconFacebook = () => <svg width="24" height="24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>;
export const IconLinkedIn = () => <svg width="24" height="24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
export const IconStar = () => <svg width="20" height="20" fill="#fbbf24"><path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.755 4.635 1.122 6.545z"/></svg>;
export const IconCheck = () => <svg width="20" height="20" fill="none" stroke="var(--brand-red)" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>;

// --- NAVBAR ---
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`} style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000, transition: '0.3s' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-navy-dark)' }}>
          NEXORATEL<span style={{ color: 'var(--brand-red)' }}>.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-only" style={{ display: 'flex', gap: '30px', alignItems: 'center', fontWeight: 500 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          
          <div className="nav-item" style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
            Our Products <IconChevron />
            <div className="dropdown-menu glass-panel">
              <Link to="/bulk-sms" className="dropdown-item">Bulk SMS</Link>
              <Link to="/sellarpro" className="dropdown-item">Sellarpro</Link>
              <Link to="/teller-360" className="dropdown-item">Teller 360</Link>
              <Link to="/osuite" className="dropdown-item">Osuite</Link>
              <Link to="/hms" className="dropdown-item">HMS</Link>
            </div>
          </div>
          
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
          <button className="btn-solid-red">BOOK US</button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IconClose /> : <IconMenu />}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="glass-panel mobile-menu slide-up" style={{ display: 'flex' }}>
          <Link to="/" onClick={()=>setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={()=>setIsOpen(false)}>About Us</Link>
          <Link to="/sellarpro" onClick={()=>setIsOpen(false)}>Products</Link>
          <Link to="/contact" onClick={()=>setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}

// --- FOOTER ---
export function Footer() {
  return (
    <footer style={{ background: '#010a19', color: '#fff', paddingTop: '60px', paddingBottom: '30px' }}>
      <div className="container grid-4">
        <div>
          <h3 style={{ color: 'white', marginBottom: '20px' }}>Nexoratel Technologies</h3>
          <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>Building ultra-modern digital solutions for ambitious enterprises worldwide.</p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" style={{ color: 'var(--text-gray)' }}><IconFacebook /></a>
            <a href="#" style={{ color: 'var(--text-gray)' }}><IconLinkedIn /></a>
          </div>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '20px' }}>Company</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-gray)' }}>
            <li><Link to="/who-we-are">Who We Are</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '20px' }}>Services</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-gray)' }}>
            <li><Link to="/services">Software Development</Link></li>
            <li><Link to="/services">UI/UX Design</Link></li>
            <li><Link to="/services">Cloud Architecture</Link></li>
            <li><Link to="/services">Cybersecurity</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '20px' }}>Products</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-gray)' }}>
            <li><Link to="/sellarpro">Sellarpro</Link></li>
            <li><Link to="/teller-360">Teller 360</Link></li>
            <li><Link to="/osuite">Osuite</Link></li>
            <li><Link to="/hms">HMS</Link></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-gray)' }}>
        <p>&copy; {new Date().getFullYear()} Nexoratel Technologies. All Rights Reserved. | <Link to="/terms">Terms</Link> | <Link to="/aml-policy">AML Policy</Link></p>
      </div>
    </footer>
  );
}

// --- BACK TO TOP ---
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return visible ? (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ position: 'fixed', bottom: '30px', right: '30px', background: 'var(--brand-navy)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', cursor: 'pointer', zIndex: 999, boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
    >
      ↑
    </button>
  ) : null;
}