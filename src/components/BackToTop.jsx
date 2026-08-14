import { useState, useEffect } from 'react';

// Sleek minimal SVG icon
const ChevronUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <>
      <style>{`
        .back-to-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%);
          color: white;
          border: none;
          cursor: pointer;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(14, 165, 233, 0.35);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          
          /* Smooth entrance animation instead of abrupt rendering */
          opacity: ${visible ? 1 : 0};
          transform: translateY(${visible ? '0' : '20px'}) scale(${visible ? 1 : 0.9});
          pointer-events: ${visible ? 'auto' : 'none'};
        }
        
        .back-to-top-btn:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 15px 35px rgba(14, 165, 233, 0.5);
        }

        @media (max-width: 768px) {
          .back-to-top-btn {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
      
      <button 
        className="back-to-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll back to top"
      >
        <ChevronUpIcon />
      </button>
    </>
  );
}