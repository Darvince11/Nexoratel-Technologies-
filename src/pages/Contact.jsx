import { useState, useEffect } from 'react';

// Premium Minimalist SVG Icons
const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.title = "Contact Us | Nexoratel Technologies - Start Your Project";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Get in touch with Nexoratel Technologies to discuss your next software development or digital transformation project.";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Point this to your self-hosted backend endpoint
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Could not connect to the mail server. Please try again later.');
    }
  };

  return (
    <main style={{ paddingBottom: '90px', overflowX: 'hidden' }}>
      <style>{`
        @keyframes seriousSlideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(1.08); }
        }
        .anim-slide-1 { animation: seriousSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .anim-slide-2 { opacity: 0; animation: seriousSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; }
        .floating-orb-custom { animation: orbFloat 7s ease-in-out infinite; }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: start;
        }

        .sleek-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .sleek-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -10px rgba(14, 165, 233, 0.15);
          border-color: rgba(14, 165, 233, 0.3);
        }

        .sleek-input {
          width: 100%;
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          font-size: 1rem;
          color: #334155;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .sleek-input:focus {
          outline: none;
          border-color: var(--brand-blue);
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.15);
        }

        .icon-wrapper {
          width: 54px;
          height: 54px;
          min-width: 54px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(29, 78, 216, 0.1) 100%);
          color: var(--brand-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .responsive-contact-title { font-size: 2.3rem !important; }
        }
      `}</style>

      {/* Hero Header */}
      <section style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative', 
        paddingTop: '140px', 
        paddingBottom: '90px', 
        overflow: 'hidden',
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        background: 'linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%)',
        boxShadow: '0 25px 50px rgba(14, 165, 233, 0.25)',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <div className="glow-orb blue floating-orb-custom" style={{ top: '10%', right: '10%', opacity: 0.3 }}></div>
        
        <div className="container anim-slide-1" style={{ maxWidth: '900px', zIndex: 2 }}>
          <span style={{ color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Get In Touch</span>
          <h1 className="responsive-contact-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '10px', marginBottom: '24px', lineHeight: 1.1, color: '#ffffff' }}>
            Let's build something <span style={{ color: '#e0f2fe' }}>extraordinary.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#f8fafc', lineHeight: '1.7' }}>
            Partner with Nexoratel Technologies today. Our senior engineering consultants are ready to discuss your project goals and turn your vision into production code.
          </p>
        </div>
      </section>
      
      {/* Contact Channels & Interactive Form Section */}
      <section className="container anim-slide-2" style={{ marginTop: '80px' }}>
        <div className="contact-grid">
          
          {/* Left Column */}
          <div>
            <span style={{ color: 'var(--brand-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Direct Reach</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '10px', marginBottom: '20px', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>Contact Channels</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '40px' }}>
              Reach out through our primary office channels or send us a direct message using the project inquiry form.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="sleek-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="icon-wrapper"><LocationIcon /></div>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '4px' }}>Global Headquarters</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>Accra, Ghana (Madina / UPSA Area)</p>
                </div>
              </div>
              
              <div className="sleek-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="icon-wrapper"><EmailIcon /></div>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '4px' }}>Email Inquiries</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>contact@nexoratel.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Dynamic State Form */}
          <div className="sleek-card" style={{ padding: '50px 40px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: 'var(--brand-blue)' }}></div>

            {status === 'success' ? (
              /* Proof of Submission Card */
              <div style={{ textAlign: 'center', padding: '30px 10px' }} className="anim-slide-1">
                <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
                  <CheckCircleIcon />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '12px' }}>Inquiry Received!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '420px', margin: '0 auto 30px auto' }}>
                  Thank you for submitting your project requirements. Your message has been sent directly to our team, and an email confirmation has been dispatched to your inbox.
                </p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="btn-outline-blue" 
                  style={{ padding: '14px 28px', cursor: 'pointer', background: 'transparent', borderRadius: '10px' }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit}>
                <h3 style={{ marginBottom: '8px', fontSize: '1.8rem', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>Project Inquiry</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '30px' }}>Fill out the form below to get a direct consultation.</p>

                {status === 'error' && (
                  <div style={{ padding: '14px 18px', background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', borderRadius: '10px', marginBottom: '20px', fontSize: '0.95rem' }}>
                    {errorMessage}
                  </div>
                )}
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="sleek-input" 
                    placeholder="e.g. Jane Doe" 
                    required 
                  />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Work Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="sleek-input" 
                    placeholder="jane@company.com" 
                    required 
                  />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Project Goals</label>
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="sleek-input" 
                    placeholder="Briefly describe your software requirements and timeline..." 
                    rows="5" 
                    required 
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="btn-solid-blue" 
                  style={{ 
                    width: '100%', 
                    padding: '18px', 
                    fontSize: '1.05rem', 
                    borderRadius: '12px', 
                    boxShadow: '0 8px 20px rgba(14, 165, 233, 0.3)',
                    opacity: status === 'submitting' ? 0.7 : 1,
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                  }}
                >
                  {status === 'submitting' ? 'DISPATCHING INQUIRY...' : 'SUBMIT SECURE REQUEST'}
                </button>
              </form>
            )}

          </div>

        </div>
      </section>
    </main>
  );
}