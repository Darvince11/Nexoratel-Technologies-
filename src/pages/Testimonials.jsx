import { useState, useEffect } from 'react';

const REVIEWS = [
  { 
    slug: "fintech-global-transformation",
    quote: "Nexoratel Technologies completely revolutionized our core banking transaction engine. Their adherence to security and speed is unmatched.", 
    author: "Kwame Mensah", 
    role: "CTO, FinTech Global",
    fullStory: "FinTech Global faced critical latency bottlenecks in processing millions of daily transactions across multiple African markets. Nexoratel Technologies stepped in to re-engineer their core transaction pipeline using high-performance microservices, reducing transaction latency by 70% while guaranteeing full regulatory and PCI-DSS compliance.",
    metrics: "70% lower transaction latency | 99.999% system uptime achieved"
  },
  { 
    slug: "retailhub-mobile-growth",
    quote: "The mobile application they engineered for our e-commerce platform boosted our customer retention by 45% within three months.", 
    author: "Sarah Jenkins", 
    role: "Head of Product, RetailHub",
    fullStory: "To capture a broader mobile-first market, RetailHub required an ultra-responsive, cross-platform mobile shopping app. Nexoratel designed a sleek, high-conversion interface with real-time push notifications, seamless local checkout options, and offline sync capabilities that radically elevated user engagement.",
    metrics: "45% boost in 90-day customer retention | 3.2x increase in mobile checkout speeds"
  },
  { 
    slug: "healthmed-cloud-migration",
    quote: "Professional, punctual, and elite in their technical execution. Their cloud migration strategy saved us thousands in server overhead.", 
    author: "Dr. Alistair Vance", 
    role: "Director of IT, HealthMed Systems",
    fullStory: "HealthMed Systems was struggling with costly legacy infrastructure and slow data retrieval times for patient records. Nexoratel executed a zero-downtime HIPAA-compliant cloud migration, implementing automated scaling protocols that slashed infrastructure operational costs while enhancing data security.",
    metrics: "$45,000 annual server overhead savings | 100% HIPAA compliance audit score"
  }
];

export default function Testimonials() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    document.title = "Client Testimonials | Nexoratel Technologies";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Read success stories and feedback from enterprise leaders who partner with Nexoratel Technologies for their software and cloud needs.";
  }, []);

  const activeReview = REVIEWS.find(r => r.slug === selectedSlug);

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

        @media (max-width: 640px) {
          .responsive-testimonials-title { font-size: 2.3rem !important; }
        }
      `}</style>

      {/* Hero Header with Vibrant Blue Gradient & Rounded Edges */}
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
          <span style={{ color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Client Success</span>
          <h1 className="responsive-testimonials-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '10px', marginBottom: '24px', lineHeight: 1.1, color: '#ffffff' }}>
            Trusted By <span style={{ color: '#e0f2fe' }}>Industry Leaders.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#f8fafc', lineHeight: '1.7' }}>
            Here is what executives and engineering leaders say about partnering with Nexoratel Technologies for mission-critical software solutions.
          </p>
        </div>
      </section>
      
      {activeReview ? (
        <div className="container anim-slide-1" style={{ maxWidth: '900px', marginTop: '60px' }}>
          <button 
            onClick={() => setSelectedSlug(null)} 
            style={{ background: 'transparent', border: 'none', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ← Back to All Testimonials
          </button>
          
          <div className="modern-card" style={{ padding: '50px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--brand-blue)' }}></div>
            
            <span style={{ color: 'var(--brand-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Client Success Story</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '10px', marginBottom: '20px', color: 'var(--text-main)' }}>
              {activeReview.author}
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--brand-blue)', fontWeight: 700, marginBottom: '25px' }}>{activeReview.role}</p>
            
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '30px', fontStyle: 'italic' }}>
              "{activeReview.quote}"
            </p>

            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-main)' }}>The Enterprise Challenge & Solution:</h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '30px' }}>
              {activeReview.fullStory}
            </p>

            <div style={{ background: 'var(--brand-blue-dim)', padding: '20px 24px', borderRadius: '14px', border: '1px solid rgba(42, 183, 234, 0.3)', marginBottom: '35px' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Key Impact Metric</h4>
              <p style={{ fontSize: '1.1rem', color: 'var(--brand-blue)', fontWeight: 700 }}>{activeReview.metrics}</p>
            </div>

            <button 
              className="btn-solid-blue" 
              onClick={() => window.location.href = '/contact'}
              style={{ padding: '16px 32px' }}>
              Start Your Success Story
            </button>
          </div>
        </div>
      ) : (
        <section className="container anim-slide-2" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="grid-3">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="modern-card" style={{ padding: '45px 35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
                <div>
                  <p style={{ color: 'var(--text-main)', fontStyle: 'italic', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '30px' }}>
                    "{rev.quote}"
                  </p>
                </div>
                <div>
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>{rev.author}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--brand-blue)', fontWeight: 700, marginTop: '4px' }}>{rev.role}</p>
                  </div>
                  <button 
                    onClick={() => { setSelectedSlug(rev.slug); window.scrollTo(0, 0); }}
                    style={{ background: 'transparent', border: 'none', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textAlign: 'left' }}>
                    Read Full Story →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}