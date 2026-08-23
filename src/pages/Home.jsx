import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

const TAGLINES = [
  "Engineering The Future.",
  "Transforming Industries.",
  "Next-Gen Digital Solutions."
];

// --- CUSTOM SVG VECTOR ICONS FOR ENTERPRISE PILLARS ---
const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconLightning = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const IconChart = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const IconSupportUser = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ENTERPRISE_PILLARS = [
  { icon: <IconShield />, title: "Enterprise Security", subtitle: "ISO-Aligned Defense" },
  { icon: <IconLightning />, title: "Rapid Deployment", subtitle: "Agile CI/CD Pipelines" },
  { icon: <IconChart />, title: "Scalable Growth", subtitle: "High-Availability Cloud" },
  { icon: <IconSupportUser />, title: "Dedicated Support", subtitle: "24/7 Engineering Ops" }
];

// --- CUSTOM MODERN VECTOR SVG ILLUSTRATIONS FOR SERVICES ---
const IconCodeEngineering = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const IconMobileDev = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const IconDevOps = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const IconNetworking = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const IconDataAnalytics = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const IconCloudComputing = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const CORE_SERVICES = [
  { 
    icon: <IconCodeEngineering />, 
    title: "Custom Software Engineering", 
    desc: "Scalable, high-availability web and mobile architectures built on cutting-edge frameworks for rapid enterprise expansion." 
  },
  { 
    icon: <IconMobileDev />, 
    title: "Mobile Application Development", 
    desc: "High-performance native and cross-platform mobile apps engineered for fluid user experiences across iOS and Android." 
  },
  { 
    icon: <IconDevOps />, 
    title: "DevOps & CI/CD Automation", 
    desc: "Automated deployment pipelines, container orchestration, and infrastructure-as-code for rapid, reliable releases." 
  },
  { 
    icon: <IconNetworking />, 
    title: "Networking", 
    desc: "Robust enterprise networking solutions designed for secure, lightning-fast, and reliable internal and external connectivity." 
  },
  { 
    icon: <IconDataAnalytics />, 
    title: "Data Analytics", 
    desc: "Advanced business intelligence and predictive data pipelines that turn raw data into actionable enterprise insights." 
  },
  { 
    icon: <IconCloudComputing />, 
    title: "Cloud Computing", 
    desc: "Scalable cloud infrastructure migration, serverless architectures, and multi-cloud management for modern workloads." 
  }
];

function AnimatedCounter({ end, suffix = "" }) {
  const [count, setCount] = useState(end);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setCount(end);
          observer.disconnect();
          return;
        }
        setCount(0);
        const duration = 2200;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <h2 ref={ref} aria-label={`${end}${suffix}`} style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', color: 'var(--text-main)', margin: '10px 0' }}><span aria-hidden="true">{count}<span style={{ color: 'var(--brand-blue)' }}>{suffix}</span></span></h2>;
}

export default function Home() {
  const navigate = useNavigate();
  const contactSectionRef = useRef(null);

  const [currentLine, setCurrentLine] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.title = "Software Development Company in Ghana | Nexoratel Technologies";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Nexoratel Technologies is a software development company in Tema, Ghana, building custom software, mobile apps, cloud infrastructure, and business systems.";
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % TAGLINES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Could not connect to the mail server. Please try again later.');
    }
  };

  const topServices = CORE_SERVICES.slice(0, 3);
  const bottomServices = CORE_SERVICES.slice(3, 6);

  return (
    <main>
      <style>{`
        @keyframes skeletonPulse {
          0% { opacity: 0.4; }
          50% { opacity: 0.9; }
          100% { opacity: 0.4; }
        }
        .skeleton-pulse {
          animation: skeletonPulse 1.8s ease-in-out infinite;
        }
        .services-grid-3x2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
        }
        .modern-input-field {
          width: 100%;
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          font-size: 1rem;
          color: #334155;
          margin-bottom: 18px;
          transition: all 0.3s ease;
          font-family: inherit;
          box-sizing: border-box;
        }
        .modern-input-field:focus {
          outline: none;
          border-color: var(--brand-blue);
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.15);
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .responsive-hero-title { font-size: 2.5rem !important; }
          .responsive-cta-group { justify-content: center; }
          .hero-mockup-wrapper {
            max-width: 300px !important;
            margin: 40px auto 0 auto !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid-3x2 { grid-template-columns: 1fr; }
          .responsive-cta-group { flex-direction: column; width: 100%; }
          .responsive-cta-group button { width: 100%; text-align: center; }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{ 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative', 
        paddingTop: '130px', 
        paddingBottom: '90px', 
        overflow: 'hidden',
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        background: 'linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%)',
        boxShadow: '0 25px 50px rgba(14, 165, 233, 0.25)',
        zIndex: 2
      }}>
        <div className="glow-orb blue" style={{ top: '10%', left: '10%', opacity: 0.3 }}></div>
        
        <div className="container hero-grid" style={{ zIndex: 2 }}>
          <div className="fade-in-up">
            <h1 className="responsive-hero-title" style={{ fontSize: '4.4rem', lineHeight: '1.08', marginBottom: '24px', color: '#ffffff' }}>
              <span style={{ display: 'block' }}>{TAGLINES[currentLine]}</span>
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '40px', maxWidth: '100%', lineHeight: '1.6' }}>
              We architect robust, enterprise-grade software systems and breathtaking digital experiences that elevate brands and accelerate global market dominance.
            </p>
            
            <div className="responsive-cta-group" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <button 
                className="btn-solid-blue" 
                onClick={scrollToContact}
                style={{ cursor: 'pointer' }}
              >
                Start a Project
              </button>
              
              <button 
                className="btn-outline-blue" 
                onClick={() => navigate('/products')} 
                style={{ color: '#ffffff', borderColor: '#ffffff', cursor: 'pointer' }}
              >
                Explore Products
              </button>
            </div>
          </div>
          
          <div className="fade-in-up hero-mockup-wrapper" style={{ position: 'relative', animationDelay: '0.2s', display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '560px', margin: '0 auto' }}>
             
             <div className="modern-card" style={{ width: '100%', background: '#ffffff', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(42, 183, 234, 0.4)', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)' }}>
                
                <div style={{ background: '#f8fafc', padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', flexWrap: 'wrap', gap: '8px' }}>
                   <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                   </div>
                   <div style={{ background: '#ffffff', padding: '3px 10px', borderRadius: '6px', fontSize: '0.65rem', color: '#64748b', border: '1px solid #cbd5e1', maxWidth: '160px', textAlign: 'center', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      https://NexoratelTechnologies.com
                   </div>
                   <span style={{ fontSize: '0.65rem', color: 'var(--brand-blue)', fontWeight: 700, background: 'var(--brand-blue-dim)', padding: '2px 6px', borderRadius: '4px' }}>LIVE</span>
                </div>

                <div style={{ padding: '20px 16px', background: '#ffffff', minHeight: '320px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                   
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                      <div className="skeleton-pulse" style={{ width: '70px', height: '8px', background: '#cbd5e1', borderRadius: '4px' }}></div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                         <div className="skeleton-pulse" style={{ width: '25px', height: '6px', background: '#e2e8f0', borderRadius: '4px' }}></div>
                         <div className="skeleton-pulse" style={{ width: '25px', height: '6px', background: '#e2e8f0', borderRadius: '4px' }}></div>
                         <div className="skeleton-pulse" style={{ width: '35px', height: '12px', background: 'var(--brand-blue)', borderRadius: '4px' }}></div>
                      </div>
                   </div>

                   <div className="skeleton-pulse" style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ width: '70%', height: '14px', background: '#0f172a', borderRadius: '4px' }}></div>
                      <div style={{ width: '95%', height: '6px', background: '#cbd5e1', borderRadius: '4px' }}></div>
                      <div style={{ width: '60%', height: '6px', background: '#cbd5e1', borderRadius: '4px' }}></div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                         <div style={{ width: '65px', height: '16px', background: 'var(--brand-blue)', borderRadius: '4px' }}></div>
                         <div style={{ width: '65px', height: '16px', background: '#e2e8f0', borderRadius: '4px' }}></div>
                      </div>
                   </div>

                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div className="skeleton-pulse" style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                         <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--brand-blue-dim)' }}></div>
                         <div style={{ width: '75%', height: '6px', background: '#0f172a', borderRadius: '4px' }}></div>
                         <div style={{ width: '90%', height: '5px', background: '#cbd5e1', borderRadius: '4px' }}></div>
                      </div>
                      <div className="skeleton-pulse" style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                         <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--brand-blue-dim)' }}></div>
                         <div style={{ width: '75%', height: '6px', background: '#0f172a', borderRadius: '4px' }}></div>
                         <div style={{ width: '90%', height: '5px', background: '#cbd5e1', borderRadius: '4px' }}></div>
                      </div>
                   </div>

                </div>
             </div>

             <div className="modern-card desktop-only" style={{ position: 'absolute', top: '6%', right: '-3%', width: '100%', aspectRatio: '4/3', border: '1px solid var(--brand-blue)', transform: 'rotate(4deg)', zIndex: 1, opacity: 0.15, background: 'var(--brand-blue-dim)', pointerEvents: 'none' }}></div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="container py-20" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <span style={{ color: 'var(--brand-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>What We Do Best</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '10px' }}>Engineered For Peak Performance</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '15px', fontSize: '1.1rem' }}>We combine technical mastery with exceptional design to deliver bulletproof software solutions.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Top Row: 3 items */}
          <div className="services-grid-3x2">
            {topServices.map((srv, index) => (
              <article key={index} className="modern-card" style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
                
                <div>
                  <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'var(--brand-blue-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(42, 183, 234, 0.2)' }}>
                    {srv.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '14px', letterSpacing: '-0.5px' }}>{srv.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>{srv.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Row: 3 items */}
          <div className="services-grid-3x2">
            {bottomServices.map((srv, index) => (
              <article key={index} className="modern-card" style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
                
                <div>
                  <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'var(--brand-blue-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(42, 183, 234, 0.2)' }}>
                    {srv.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '14px', letterSpacing: '-0.5px' }}>{srv.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>{srv.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Value Pillars */}
      <section className="container" style={{ paddingBottom: '60px', paddingTop: '20px' }}>
        <div className="grid-4">
          {ENTERPRISE_PILLARS.map((pillar, idx) => (
            <div key={idx} className="modern-card" style={{ padding: '22px', display: 'flex', alignItems: 'center', gap: '16px', background: '#ffffff' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'var(--brand-blue-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(42, 183, 234, 0.2)' }}>
                {pillar.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)' }}>{pillar.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{pillar.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Animated Statistics Section */}
      <section style={{ background: 'var(--bg-alt)', paddingTop: '60px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="grid-3">
            <div className="modern-card" style={{ padding: '40px 24px', textAlign: 'center', background: '#ffffff' }}>
              <AnimatedCounter end={500} suffix="+" />
              <p style={{ fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', marginTop: '10px' }}>Projects Delivered Globally</p>
            </div>
            
            <div className="modern-card" style={{ padding: '40px 24px', textAlign: 'center', background: '#ffffff' }}>
              <AnimatedCounter end={99} suffix="%" />
              <p style={{ fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', marginTop: '10px' }}>Client Satisfaction Rating</p>
            </div>
            
            <div className="modern-card" style={{ padding: '40px 24px', textAlign: 'center', background: '#ffffff' }}>
              <AnimatedCounter end={10} suffix="+" />
              <p style={{ fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', marginTop: '10px' }}>Enterprise SaaS Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Converting Contact / Book Us Section (Tightened Spacing & Top-Aligned) */}
      <section ref={contactSectionRef} id="get-in-touch" style={{ position: 'relative', paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="glow-orb blue" style={{ bottom: '10%', right: '10%', opacity: 0.15 }}></div>
        <div className="container grid-2" style={{ alignItems: 'start', gap: '50px' }}>
          
          {/* Left Text Column */}
          <div style={{ paddingTop: '10px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(14, 165, 233, 0.25)',
              color: 'var(--brand-blue)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              fontSize: '0.8rem',
              marginBottom: '14px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)' }}></span>
              BOOK US NOW
            </div>

            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.6rem)', marginTop: '4px', marginBottom: '20px', lineHeight: 1.1, color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
              Book Us Now & Build <span style={{ color: 'var(--brand-blue)' }}>Extraordinary.</span>
            </h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '500px' }}>
              Partner with Nexoratel Technologies today to discuss your next digital product. Our senior engineering consultants are ready to turn your vision into production code.
            </p>
          </div>
          
          {/* Right Form Column */}
          <div className="modern-card fade-in-up" style={{ padding: '40px', background: '#ffffff', position: 'relative', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: 'var(--brand-blue)' }}></div>
            
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
                  <CheckCircleIcon />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '12px', fontWeight: 800 }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '420px', margin: '0 auto 30px auto' }}>
                  Thank you for reaching out. We have received your project details and an automated confirmation has been sent to your email.
                </p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="btn-outline-blue" 
                  style={{ padding: '14px 28px', cursor: 'pointer', background: 'transparent', borderRadius: '10px', fontWeight: 600 }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ marginBottom: '8px', fontSize: '1.8rem', color: 'var(--text-main)' }}>Start Your Journey</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '25px' }}>Fill in your details for an immediate consultation.</p>

                {status === 'error' && (
                  <div style={{ padding: '14px 18px', background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', borderRadius: '10px', marginBottom: '20px', fontSize: '0.95rem' }}>
                    {errorMessage}
                  </div>
                )}
                
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="modern-input-field" 
                  placeholder="Your Full Name" 
                  required 
                />
                
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="modern-input-field" 
                  placeholder="Work Email Address" 
                  required 
                />

                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="modern-input-field" 
                  placeholder="Phone Number (e.g. +233 50 000 0000)" 
                  required 
                />
                
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="modern-input-field" 
                  placeholder="Tell us about your project goals..." 
                  rows="4" 
                  required 
                  style={{ resize: 'none' }}
                ></textarea>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="btn-solid-blue" 
                  style={{ 
                    width: '100%', 
                    padding: '18px',
                    opacity: status === 'submitting' ? 0.7 : 1,
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                  }}
                >
                  {status === 'submitting' ? 'TRANSMITTING REQUEST...' : 'SUBMIT PROJECT REQUEST'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
