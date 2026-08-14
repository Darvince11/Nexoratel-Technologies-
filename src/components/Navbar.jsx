import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconMenu, IconClose } from './Icons';

// Import both the full text logo and the standalone emblem for mobile
import fullLogo from '../assets/logo.png';
import logoEmblem from '../assets/logo-emblem.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ 
      position: 'absolute', 
      top: '24px', 
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 48px)',
      maxWidth: '1240px', 
      zIndex: 1000, 
      background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.85) 0%, rgba(29, 78, 216, 0.85) 100%)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      borderRadius: '50px',
      boxShadow: '0 15px 35px rgba(14, 165, 233, 0.25)'
    }}>
      <style>{`
        @keyframes slideInBar {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        .desktop-logo { display: flex; }
        .mobile-logo { display: none; }
        .mobile-toggle { display: none; }
        .desktop-only { display: flex; }
        @media (max-width: 900px) {
          .desktop-logo { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-logo { display: flex !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '75px', 
        padding: '0 28px',
        width: '100%'
      }}>
        
        {/* 1. Left Section: Logo */}
        <div style={{ display: 'flex', alignItems: 'center', minWidth: '150px' }}>
          <NavLink to="/" className="desktop-logo" style={{ alignItems: 'center', textDecoration: 'none' }}>
            <div style={{ height: '42px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
              <img 
                src={fullLogo} 
                alt="Nexoratel Technologies Logo" 
                style={{ height: '120px', width: 'auto', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' }} 
              />
            </div>
          </NavLink>

          <NavLink to="/" className="mobile-logo" style={{ alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src={logoEmblem} 
              alt="Nexoratel Emblem" 
              style={{ height: '42px', width: 'auto', objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }} 
            />
          </NavLink>
        </div>

        {/* 2. Middle Section: Centered Navigation Links */}
        <div className="desktop-only" style={{ 
          display: 'flex', 
          gap: '24px', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flex: 1, 
          fontWeight: 500, 
          color: '#f8fafc', 
          fontSize: '0.95rem' 
        }}>
          
          <NavLink to="/" style={{ position: 'relative', textDecoration: 'none', color: '#f8fafc', whiteSpace: 'nowrap', paddingBottom: '4px' }}>
            {({ isActive }) => (
              <>
                <span style={{ color: isActive ? '#ffffff' : '#f8fafc' }}>Home</span>
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: '-2px', left: 0, width: '100%', height: '3px',
                    backgroundColor: '#ffffff', borderRadius: '4px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                    animation: 'slideInBar 0.3s ease forwards', transformOrigin: 'left'
                  }} />
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/about" style={{ position: 'relative', textDecoration: 'none', color: '#f8fafc', whiteSpace: 'nowrap', paddingBottom: '4px' }}>
            {({ isActive }) => (
              <>
                <span style={{ color: isActive ? '#ffffff' : '#f8fafc' }}>About Us</span>
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: '-2px', left: 0, width: '100%', height: '3px',
                    backgroundColor: '#ffffff', borderRadius: '4px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                    animation: 'slideInBar 0.3s ease forwards', transformOrigin: 'left'
                  }} />
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/services" style={{ position: 'relative', textDecoration: 'none', color: '#f8fafc', whiteSpace: 'nowrap', paddingBottom: '4px' }}>
            {({ isActive }) => (
              <>
                <span style={{ color: isActive ? '#ffffff' : '#f8fafc' }}>Services</span>
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: '-2px', left: 0, width: '100%', height: '3px',
                    backgroundColor: '#ffffff', borderRadius: '4px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                    animation: 'slideInBar 0.3s ease forwards', transformOrigin: 'left'
                  }} />
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/industries" style={{ position: 'relative', textDecoration: 'none', color: '#f8fafc', whiteSpace: 'nowrap', paddingBottom: '4px' }}>
            {({ isActive }) => (
              <>
                <span style={{ color: isActive ? '#ffffff' : '#f8fafc' }}>Industries</span>
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: '-2px', left: 0, width: '100%', height: '3px',
                    backgroundColor: '#ffffff', borderRadius: '4px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                    animation: 'slideInBar 0.3s ease forwards', transformOrigin: 'left'
                  }} />
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/products" style={{ position: 'relative', textDecoration: 'none', color: '#f8fafc', whiteSpace: 'nowrap', paddingBottom: '4px' }}>
            {({ isActive }) => (
              <>
                <span style={{ color: isActive ? '#ffffff' : '#f8fafc' }}>Products</span>
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: '-2px', left: 0, width: '100%', height: '3px',
                    backgroundColor: '#ffffff', borderRadius: '4px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                    animation: 'slideInBar 0.3s ease forwards', transformOrigin: 'left'
                  }} />
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/contact" style={{ position: 'relative', textDecoration: 'none', color: '#f8fafc', whiteSpace: 'nowrap', paddingBottom: '4px' }}>
            {({ isActive }) => (
              <>
                <span style={{ color: isActive ? '#ffffff' : '#f8fafc' }}>Contact Us</span>
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: '-2px', left: 0, width: '100%', height: '3px',
                    backgroundColor: '#ffffff', borderRadius: '4px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                    animation: 'slideInBar 0.3s ease forwards', transformOrigin: 'left'
                  }} />
                )}
              </>
            )}
          </NavLink>
        </div>

        {/* 3. Right Section: Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minWidth: '150px' }}>
          <div className="desktop-only">
            <button 
              className="btn-solid-blue" 
              onClick={() => window.location.href = '/contact'}
              style={{ 
                padding: '10px 22px', 
                fontSize: '0.8rem', 
                whiteSpace: 'nowrap', 
                background: '#ffffff', 
                color: '#1d4ed8', 
                borderRadius: '30px', 
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            >
              BOOK US
            </button>
          </div>

          <div className="mobile-toggle" style={{ cursor: 'pointer', color: '#ffffff', alignItems: 'center' }} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IconClose /> : <IconMenu />}
          </div>
        </div>
      </div>
      
      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div style={{ 
          position: 'absolute', 
          top: '85px', 
          left: 0, 
          right: 0, 
          display: 'flex', 
          flexDirection: 'column', 
          padding: '24px', 
          gap: '15px', 
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.98) 0%, rgba(29, 78, 216, 0.98) 100%)', 
          backdropFilter: 'blur(20px)', 
          border: '1px solid rgba(255, 255, 255, 0.15)', 
          borderRadius: '24px', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)' 
        }}>
          <NavLink to="/" onClick={()=>setIsOpen(false)} style={({isActive}) => ({ color: isActive ? '#ffffff' : '#f8fafc', fontWeight: 500, textDecoration: 'none' })}>Home</NavLink>
          <NavLink to="/about" onClick={()=>setIsOpen(false)} style={({isActive}) => ({ color: isActive ? '#ffffff' : '#f8fafc', fontWeight: 500, textDecoration: 'none' })}>About Us</NavLink>
          <NavLink to="/services" onClick={()=>setIsOpen(false)} style={({isActive}) => ({ color: isActive ? '#ffffff' : '#f8fafc', fontWeight: 500, textDecoration: 'none' })}>Services</NavLink>
          <NavLink to="/industries" onClick={()=>setIsOpen(false)} style={({isActive}) => ({ color: isActive ? '#ffffff' : '#f8fafc', fontWeight: 500, textDecoration: 'none' })}>Industries</NavLink>
          <NavLink to="/products" onClick={()=>setIsOpen(false)} style={({isActive}) => ({ color: isActive ? '#ffffff' : '#f8fafc', fontWeight: 500, textDecoration: 'none' })}>Products</NavLink>
          <NavLink to="/contact" onClick={()=>setIsOpen(false)} style={({isActive}) => ({ color: isActive ? '#ffffff' : '#f8fafc', fontWeight: 500, textDecoration: 'none' })}>Contact Us</NavLink>
        </div>
      )}
    </nav>
  );
}