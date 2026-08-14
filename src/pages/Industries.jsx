import { useState, useEffect } from 'react';

const INDUSTRIES_LIST = [
  { 
    slug: "fintech-and-banking",
    title: "FinTech & Banking", 
    desc: "Secure payment gateways, decentralized ledger systems, and high-frequency transaction engines built to strict financial compliance standards.",
    longDesc: "In the fast-paced financial sector, security, scalability, and sub-millisecond transaction speeds are non-negotiable. Nexoratel Technologies builds robust financial architectures, secure payment gateways, and compliant ledger systems that safeguard assets and streamline global transactions.",
    impacts: [
      "PCI-DSS and stringent regulatory financial compliance integration",
      "High-frequency transaction engines capable of massive concurrent loads",
      "Zero-trust security models protecting sensitive consumer funds",
      "Seamless integration with traditional banking networks and decentralized ledgers"
    ]
  },
  { 
    slug: "healthcare-and-medtech",
    title: "Healthcare & MedTech", 
    desc: "HIPAA-compliant patient portals, electronic health record (EHR) integrations, and telemedicine infrastructure.",
    longDesc: "Modern healthcare requires secure, instantaneous access to critical data while adhering to strict privacy laws like HIPAA. We build interoperable healthcare platforms, patient portals, and telemedicine suites that enhance patient care and streamline clinical operations.",
    impacts: [
      "HIPAA-compliant data encryption and storage architecture",
      "Interoperable electronic health record (EHR/EMR) integrations",
      "Low-latency telemedicine and remote patient monitoring infrastructure",
      "Intuitive administrative dashboards for hospitals and clinics"
    ]
  },
  { 
    slug: "ecommerce-and-retail",
    title: "E-Commerce & Retail", 
    desc: "High-conversion storefronts, inventory management systems, and real-time omnichannel logistics tracking architectures.",
    longDesc: "In digital retail, user experience and checkout speed directly dictate conversion rates. We engineer high-conversion omnichannel storefronts, lightning-fast inventory management systems, and real-time logistics tracking engines to maximize online sales.",
    impacts: [
      "High-concurrency storefronts optimized for flash sales and peak traffic",
      "Real-time multi-warehouse inventory synchronization",
      "Secure, localized payment gateway and checkout optimization",
      "Advanced customer analytics and personalized product recommendation pipelines"
    ]
  },
  { 
    slug: "telecommunications",
    title: "Telecommunications", 
    desc: "Bulk messaging distribution platforms, high-throughput telecom APIs, and robust subscriber management systems.",
    longDesc: "Telecommunication networks require massive throughput and fault tolerance. We provide scalable bulk messaging distribution engines, high-performance telecom APIs, and automated subscriber management solutions that keep operations running smoothly.",
    impacts: [
      "High-throughput bulk SMS and messaging distribution infrastructures",
      "Robust subscriber data management systems (SDM)",
      "Carrier-grade API gateways designed for high concurrent requests",
      "Automated billing and usage metering architectures"
    ]
  },
  { 
    slug: "logistics-and-supply-chain",
    title: "Logistics & Supply Chain", 
    desc: "Fleet management tracking software, predictive route optimization engines, and automated warehouse management.",
    longDesc: "Supply chain visibility and route efficiency drive profitability in logistics. We build intelligent fleet management tracking software, predictive route optimization engines, and automated warehouse control systems.",
    impacts: [
      "Real-time GPS fleet tracking and telemetry visualization",
      "AI-driven route optimization minimizing fuel consumption and transit time",
      "Automated barcode and RFID warehouse management integrations",
      "Predictive maintenance alerts for transport infrastructure"
    ]
  }
];

export default function Industries() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    document.title = "Industries We Serve | Nexoratel Technologies";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Discover the specialized industries powered by Nexoratel Technologies, including FinTech, Healthcare, E-Commerce, and Telecommunications.";
  }, []);

  const activeIndustry = INDUSTRIES_LIST.find(i => i.slug === selectedSlug);

  // Split: 3 items for top row, 2 items for bottom row
  const topItems = INDUSTRIES_LIST.slice(0, 3);
  const bottomItems = INDUSTRIES_LIST.slice(3, 5);

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

        .industries-top-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 30px;
        }
        .industries-bottom-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 66%;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .industries-top-row { grid-template-columns: repeat(2, 1fr); }
          .industries-bottom-row { max-width: 100%; grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .industries-top-row { grid-template-columns: 1fr; }
          .industries-bottom-row { grid-template-columns: 1fr; }
          .responsive-industries-title { font-size: 2.3rem !important; }
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
          <span style={{ color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Global Impact</span>
          <h1 className="responsive-industries-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '10px', marginBottom: '24px', lineHeight: 1.1, color: '#ffffff' }}>
            Industries We <span style={{ color: '#e0f2fe' }}>Transform.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#f8fafc', lineHeight: '1.7' }}>
            We engineer domain-specific digital solutions tailored to the unique regulatory, operational, and scaling requirements of diverse global sectors.
          </p>
        </div>
      </section>
      
      {activeIndustry ? (
        <div className="container anim-slide-1" style={{ maxWidth: '900px', marginTop: '60px' }}>
          <button 
            onClick={() => setSelectedSlug(null)} 
            style={{ background: 'transparent', border: 'none', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ← Back to All Industries
          </button>
          
          <div className="modern-card" style={{ padding: '50px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--brand-blue)' }}></div>
            
            <span style={{ color: 'var(--brand-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Sector Expertise</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '10px', marginBottom: '20px', color: 'var(--text-main)' }}>
              {activeIndustry.title}
            </h1>
            
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '35px' }}>
              {activeIndustry.longDesc}
            </p>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--text-main)' }}>How We Transform This Sector:</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px', paddingLeft: '20px' }}>
              {activeIndustry.impacts.map((impact, i) => (
                <li key={i} style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {impact}
                </li>
              ))}
            </ul>

            <button 
              className="btn-solid-blue" 
              onClick={() => window.location.href = '/contact'}
              style={{ padding: '16px 32px' }}>
              Partner With Us In This Sector
            </button>
          </div>
        </div>
      ) : (
        <section className="container anim-slide-2" style={{ marginTop: '80px', marginBottom: '80px' }}>
          {/* Top Row: 3 items */}
          <div className="industries-top-row">
            {topItems.map((ind, idx) => (
              <div key={idx} className="modern-card" style={{ padding: '45px 35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>{ind.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '25px' }}>{ind.desc}</p>
                </div>
                <button 
                  onClick={() => { setSelectedSlug(ind.slug); window.scrollTo(0, 0); }}
                  style={{ background: 'transparent', border: 'none', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textAlign: 'left' }}>
                  Read More →
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 items centered in the middle */}
          <div className="industries-bottom-row">
            {bottomItems.map((ind, idx) => (
              <div key={idx} className="modern-card" style={{ padding: '45px 35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>{ind.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '25px' }}>{ind.desc}</p>
                </div>
                <button 
                  onClick={() => { setSelectedSlug(ind.slug); window.scrollTo(0, 0); }}
                  style={{ background: 'transparent', border: 'none', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textAlign: 'left' }}>
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}