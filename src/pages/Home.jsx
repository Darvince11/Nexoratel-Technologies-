import { useState, useEffect, useRef } from 'react';
import { apiUrl } from '../lib/api';
import { CONTACT_LIMITS, validateContactInput } from '../lib/contactValidation';
import Turnstile from '../components/Turnstile';
import { trackAnalyticsEvent } from '../components/GoogleAnalytics';
import { useNavigate } from 'react-router';

const TAGLINES = [
  "Engineering The Future.",
  "Transforming Industries.",
  "Next-Gen Digital Solutions."
];

const CheckCircleIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const BUYER_REASONS = [
  {
    number: '01',
    title: 'Built around how you work',
    description: 'We study your users, approvals, data, and operating constraints before recommending technology, so the solution fits the business instead of forcing the business into a template.',
  },
  {
    number: '02',
    title: 'Progress you can see',
    description: 'Clear milestones, working demonstrations, and regular reviews keep your team involved and give decision-makers visibility before launch day.',
  },
  {
    number: '03',
    title: 'Designed to remain maintainable',
    description: 'We plan architecture, permissions, integrations, testing, and documentation for the people who will operate and improve the system after delivery.',
  },
  {
    number: '04',
    title: 'A partner beyond deployment',
    description: 'Training, monitoring, maintenance, and planned improvements help your team adopt the product and keep it useful as the organization changes.',
  },
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
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', website: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReset, setTurnstileReset] = useState(0);
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
    setFieldErrors((current) => ({ ...current, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateContactInput(formData);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      setStatus('error');
      setErrorMessage('Please correct the highlighted fields.');
      return;
    }
    if (!turnstileToken) {
      setStatus('error');
      setErrorMessage('Please complete the security verification.');
      return;
    }
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...validation.data, turnstileToken }),
      });

      const data = await response.json();

      if (response.ok) {
        trackAnalyticsEvent('generate_lead', { form_location: 'homepage' });
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', website: '' });
        setFieldErrors({});
      } else {
        setStatus('error');
        setFieldErrors(data.errors || {});
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Could not connect to the mail server. Please try again later.');
    } finally {
      setTurnstileReset((value) => value + 1);
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
        .buyer-reasons-section { background: #071b32; color: #ffffff; padding: 78px 0; }
        .buyer-reasons-intro { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 70px; align-items: end; margin-bottom: 48px; }
        .buyer-reasons-intro h2 { color: #ffffff; font-size: clamp(2.1rem, 4vw, 3.2rem); line-height: 1.12; margin-top: 10px; letter-spacing: 0; }
        .buyer-reasons-intro p { color: #cbd5e1; font-size: 1.08rem; line-height: 1.75; max-width: 680px; }
        .buyer-reasons-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(255,255,255,0.18); }
        .buyer-reason { min-height: 310px; padding: 30px 28px 24px; border-right: 1px solid rgba(255,255,255,0.18); display: flex; flex-direction: column; }
        .buyer-reason:last-child { border-right: 0; }
        .buyer-reason > span { color: #7dd3fc; font-weight: 800; font-size: 0.82rem; }
        .buyer-reason h3 { color: #ffffff; font-size: 1.3rem; line-height: 1.35; margin: 54px 0 14px; letter-spacing: 0; }
        .buyer-reason p { color: #cbd5e1; line-height: 1.7; font-size: 0.96rem; }
        .buyer-reasons-action { margin-top: 38px; display: flex; align-items: center; justify-content: space-between; gap: 25px; }
        .buyer-reasons-action p { color: #e2e8f0; font-weight: 700; }
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
          .buyer-reasons-intro { grid-template-columns: 1fr; gap: 20px; }
          .buyer-reasons-grid { grid-template-columns: repeat(2, 1fr); }
          .buyer-reason:nth-child(2) { border-right: 0; }
          .buyer-reason:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,0.18); }
        }
        @media (max-width: 640px) {
          .services-grid-3x2 { grid-template-columns: 1fr; }
          .responsive-cta-group { flex-direction: column; width: 100%; }
          .responsive-cta-group button { width: 100%; text-align: center; }
          .buyer-reasons-section { padding: 60px 0; }
          .buyer-reasons-grid { grid-template-columns: 1fr; }
          .buyer-reason { min-height: auto; padding: 26px 0; border-right: 0; border-bottom: 1px solid rgba(255,255,255,0.18); }
          .buyer-reason h3 { margin-top: 28px; }
          .buyer-reasons-action { align-items: flex-start; flex-direction: column; }
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

      <section className="buyer-reasons-section">
        <div className="container">
          <div className="buyer-reasons-intro">
            <div>
              <span style={{ color: '#7dd3fc', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.78rem' }}>Why Nexoratel</span>
              <h2>Technology decisions grounded in your business.</h2>
            </div>
            <p>A successful system should remove friction, make important work clearer, and remain dependable after launch. Our delivery process keeps those outcomes visible from the first conversation.</p>
          </div>
          <div className="buyer-reasons-grid">
            {BUYER_REASONS.map((reason) => (
              <article className="buyer-reason" key={reason.number}>
                <span>{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
          <div className="buyer-reasons-action">
            <p>Bring us the workflow, bottleneck, or product idea you need to improve.</p>
            <button className="btn-solid-blue" onClick={scrollToContact}>Talk to an engineer</button>
          </div>
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

      <section className="container" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '24px', marginBottom: '34px', flexWrap: 'wrap' }}>
          <div>
            <span style={{ color: 'var(--brand-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Latest Insights</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '8px', letterSpacing: 0 }}>Thinking from our engineering teams.</h2>
          </div>
          <button onClick={() => navigate('/blog')} className="btn-outline-blue" style={{ padding: '12px 24px' }}>View all insights</button>
        </div>
        <div className="grid-3">
          {[
            ['Software Development', 'Software Development Company in Ghana: How to Choose the Right Team', 'software-development-company-ghana'],
            ['Website Development', 'How Much Does a Website Cost in Ghana? 2026 Prices', 'how-much-does-a-website-cost-in-ghana'],
            ['Cybersecurity', 'Securing Enterprise APIs Against Advanced Threats', 'securing-enterprise-apis-against-advanced-threats']
          ].map(([category, title, slug]) => (
            <article key={slug} style={{ borderTop: '2px solid var(--brand-blue)', padding: '24px 0' }}>
              <span style={{ color: '#0284c7', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase' }}>{category}</span>
              <h3 style={{ fontSize: '1.25rem', lineHeight: 1.4, margin: '12px 0 20px', letterSpacing: 0 }}>{title}</h3>
              <button onClick={() => navigate(`/blog/${slug}`)} style={{ padding: 0, border: 0, background: 'transparent', color: '#0369a1', font: 'inherit', fontWeight: 800, cursor: 'pointer' }}>Read article -&gt;</button>
            </article>
          ))}
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
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ marginBottom: '8px', fontSize: '1.8rem', color: 'var(--text-main)' }}>Start Your Journey</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '25px' }}>Fill in your details for an immediate consultation.</p>

                {status === 'error' && (
                  <div role="alert" style={{ padding: '14px 18px', background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', borderRadius: '10px', marginBottom: '20px', fontSize: '0.95rem' }}>
                    {errorMessage}
                  </div>
                )}
                
                <label className="sr-only" htmlFor="home-contact-name">Full name</label>
                <input
                  id="home-contact-name"
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="modern-input-field" 
                  placeholder="Your Full Name" 
                  autoComplete="name"
                  minLength="2"
                  maxLength={CONTACT_LIMITS.name}
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? 'home-name-error' : undefined}
                  required 
                />
                {fieldErrors.name && <span id="home-name-error" className="form-field-error">{fieldErrors.name}</span>}
                
                <label className="sr-only" htmlFor="home-contact-email">Email address</label>
                <input
                  id="home-contact-email"
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="modern-input-field" 
                  placeholder="Email Address" 
                  autoComplete="email"
                  maxLength={CONTACT_LIMITS.email}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? 'home-email-error' : undefined}
                  required 
                />
                {fieldErrors.email && <span id="home-email-error" className="form-field-error">{fieldErrors.email}</span>}

                <label className="sr-only" htmlFor="home-contact-phone">Phone number</label>
                <input
                  id="home-contact-phone"
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="modern-input-field" 
                  placeholder="Phone Number" 
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={CONTACT_LIMITS.phone}
                  aria-invalid={Boolean(fieldErrors.phone)}
                  aria-describedby={fieldErrors.phone ? 'home-phone-error' : undefined}
                  required 
                />
                {fieldErrors.phone && <span id="home-phone-error" className="form-field-error">{fieldErrors.phone}</span>}
                
                <label className="sr-only" htmlFor="home-contact-message">Project goals</label>
                <textarea 
                  id="home-contact-message"
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="modern-input-field" 
                  placeholder="Tell us about your project goals..." 
                  rows="4" 
                  minLength="20"
                  maxLength={CONTACT_LIMITS.message}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? 'home-message-error' : undefined}
                  required 
                  style={{ resize: 'none' }}
                ></textarea>
                {fieldErrors.message && <span id="home-message-error" className="form-field-error">{fieldErrors.message}</span>}
                <div className="contact-honeypot" aria-hidden="true"><label htmlFor="home-contact-website">Website</label><input id="home-contact-website" name="website" value={formData.website} onChange={handleChange} tabIndex="-1" autoComplete="off" /></div>
                <Turnstile onToken={setTurnstileToken} resetSignal={turnstileReset} />
                
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
