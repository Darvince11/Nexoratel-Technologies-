import { Link } from 'react-router';
import { IconFacebook, IconLinkedIn, IconInstagram } from './Icons';
import fullLogo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer style={{ 
      background: 'linear-gradient(180deg, #0b1f38 0%, #050e1d 100%)', 
      paddingTop: '80px', 
      paddingBottom: '30px', 
      borderTop: '1px solid rgba(14, 165, 233, 0.2)', 
      position: 'relative',
      overflow: 'hidden',
      color: '#94a3b8'
    }}>
      {/* Subtle ambient glow effect */}
      <div className="glow-orb blue" style={{ bottom: '-10%', left: '30%', opacity: 0.15, pointerEvents: 'none' }}></div>

      <style>{`
        .footer-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }
        @media (max-width: 1024px) {
          .footer-grid-4 { grid-template-columns: repeat(2, 1fr); gap: 30px; }
        }
        @media (max-width: 640px) {
          .footer-grid-4 { grid-template-columns: 1fr; gap: 30px; }
        }
      `}</style>

      <div className="container footer-grid-4" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Brand Section */}
        <div>
          <Link to="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
            <img 
              src={fullLogo} 
              alt="Nexoratel Technologies Logo" 
              style={{ height: '150px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} 
            />
          </Link>
          <p style={{ color: '#94a3b8', marginBottom: '25px', lineHeight: '1.6', maxWidth: '280px', fontSize: '0.95rem' }}>
            Building ultra-modern digital solutions and scalable architectures for ambitious enterprises worldwide.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="https://www.facebook.com/share/1cT8b6NR9X/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              style={{ color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)', transition: 'all 0.3s ease' }}
            >
              <IconFacebook />
            </a>
            <a 
              href="https://www.instagram.com/nexorateltechnologies/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              style={{ color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)', transition: 'all 0.3s ease' }}
            >
              <IconInstagram />
            </a>
            <a 
              href="https://www.linkedin.com/company/nexorateltechnologies/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              style={{ color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)', transition: 'all 0.3s ease' }}
            >
              <IconLinkedIn />
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h4 style={{ color: '#ffffff', marginBottom: '24px', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.5px' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link to="/about" className="footer-link">Who We Are</Link></li>
            <li><Link to="/industries" className="footer-link">Industries We Serve</Link></li>
            <li><Link to="/about" className="footer-link">Our Core Values</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#ffffff', marginBottom: '24px', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.5px' }}>Core Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link to="/services/custom-software-development-ghana" className="footer-link">Custom Software Development Ghana</Link></li>
            <li><Link to="/services/mobile-app-development-ghana" className="footer-link">Mobile App Development Ghana</Link></li>
            <li><Link to="/services" className="footer-link">DevOps & CI/CD Automation</Link></li>
            <li><Link to="/services" className="footer-link">Cloud Computing</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#ffffff', marginBottom: '24px', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.5px' }}>Digital Solutions</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link to="/products" className="footer-link">E-Commerce Platforms</Link></li>
            <li><Link to="/products/school-management-system-ghana" className="footer-link">School Management System Ghana</Link></li>
            <li><Link to="/products" className="footer-link">Point-of-Sale & Inventory</Link></li>
            <li><Link to="/products" className="footer-link">Enterprise ERP & CRM</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright & Legal Section */}
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', color: '#94a3b8', fontSize: '0.9rem', gap: '15px', position: 'relative', zIndex: 2 }}>
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Nexoratel Technologies. All Rights Reserved.</p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <Link to="/aml-policy" className="footer-link">AML Policy</Link>
        </div>
      </div>
    </footer>
  );
}
