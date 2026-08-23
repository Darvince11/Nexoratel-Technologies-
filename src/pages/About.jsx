import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About Our Ghana Software Company | Nexoratel Technologies";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Learn about Nexoratel Technologies, a Tema-based engineering company delivering software, cloud, mobile, data, and infrastructure solutions across Ghana.";
  }, []);

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
        .anim-slide-2 { opacity: 0; animation: seriousSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; }
        .anim-slide-3 { opacity: 0; animation: seriousSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; }
        .floating-orb-custom { animation: orbFloat 7s ease-in-out infinite; }

        .about-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        .about-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        @media (max-width: 1024px) {
          .about-grid-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .about-grid-2 { grid-template-columns: 1fr; }
          .about-grid-3 { grid-template-columns: 1fr; }
          .responsive-about-title { font-size: 2.3rem !important; }
        }
      `}</style>

      {/* Hero Header with Homepage Matching Blue Gradient & Rounded Edges */}
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
          <span style={{ color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Who We Are</span>
          <h1 className="responsive-about-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '10px', marginBottom: '24px', lineHeight: 1.1, color: '#ffffff' }}>
            Engineering Excellence & <span style={{ color: '#e0f2fe' }}>Digital Innovation.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#f8fafc', lineHeight: '1.7' }}>
            Nexoratel Technologies is an elite software engineering and digital solutions agency. We partner with ambitious global enterprises to transform complex challenges into scalable, high-performance software products.
          </p>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="container anim-slide-2" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <div className="about-grid-2">
          <div className="modern-card" style={{ padding: '45px 35px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)' }}></div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'var(--text-main)' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              To empower global industries through bulletproof software architectures, cutting-edge mobile solutions, and human-centric digital experiences that drive exponential growth.
            </p>
          </div>
          <div className="modern-card" style={{ padding: '45px 35px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)' }}></div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'var(--text-main)' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              To be the premier technological powerhouse recognized worldwide for setting new benchmarks in cloud reliability, cyber defense, and rapid digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="anim-slide-3" style={{ background: 'var(--bg-alt)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
            <span style={{ color: 'var(--brand-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Our Principles</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '10px', color: 'var(--text-main)' }}>Driven By Core Values</h2>
          </div>
          <div className="about-grid-3">
            <div className="modern-card" style={{ padding: '40px 30px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-main)' }}>Uncompromising Quality</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>Every line of code we ship is rigorously tested, optimized, and built to scale effortlessly under heavy enterprise loads.</p>
            </div>
            <div className="modern-card" style={{ padding: '40px 30px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-main)' }}>Relentless Innovation</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>We stay ahead of technological curves, deploying modern frameworks, secure cloud pipelines, and AI-driven workflows.</p>
            </div>
            <div className="modern-card" style={{ padding: '40px 30px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-main)' }}>Client Partnership</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>Your success is our metric. We operate as an extension of your team, providing transparent communication and 24/7 dedication.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
