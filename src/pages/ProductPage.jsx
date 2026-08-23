import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const GENERAL_PRODUCTS_DATA = [
  {
    slug: "schools",
    name: "School Management Systems",
    tagline: "Comprehensive Academic Portals & E-Learning Platforms",
    desc: "Streamline administrative workflows, student enrollment, grading pipelines, and virtual e-learning delivery for educational institutions of all sizes.",
    advantages: [
      "Automated student registration, fee tracking, and digital report card generation",
      "Interactive parent-teacher communication portals and attendance logs",
      "Integrated e-learning modules with video lecture hosting and online testing",
      "Role-based access control for administrators, teachers, students, and parents"
    ]
  },
  {
    slug: "churches",
    name: "Church Management Software",
    tagline: "Member Engagement, Tithes Tracking & Ministry Coordination",
    desc: "Empower faith-based organizations with digital tools to manage congregations, track donations, organize events, and broadcast ministries.",
    advantages: [
      "Secure digital tithes, offerings, and recurring pledge tracking",
      "Centralized member directory with family grouping and attendance analytics",
      "Event registration and volunteer scheduling coordination tools",
      "Automated SMS/email broadcast messaging for church announcements"
    ]
  },
  {
    slug: "hotels",
    name: "Hotel Management & Booking",
    tagline: "Property Management Systems (PMS) & Reservation Engines",
    desc: "Deliver seamless guest experiences with automated check-ins, real-time room inventory management, and integrated billing suites.",
    advantages: [
      "Real-time room availability calendar and direct booking engine integration",
      "Automated guest check-in/check-out workflows and digital housekeeping logs",
      "Point-of-sale integration for hotel restaurants, spas, and room service",
      "Comprehensive financial reporting and occupancy analytics dashboards"
    ]
  },
  {
    slug: "pos",
    name: "Point-of-Sale (POS) Systems",
    tagline: "High-Speed Retail Checkout & Sales Processing",
    desc: "Lightning-fast hardware and software POS terminals engineered to process retail transactions securely and synchronize sales instantly.",
    advantages: [
      "Sub-second offline and online transaction processing capabilities",
      "Barcode scanning and multi-register hardware synchronization",
      "Instant deduction of stock levels upon every completed sale",
      "Detailed daily shift summaries, cashier tracking, and sales analytics"
    ]
  },
  {
    slug: "inventory",
    name: "Inventory Tracking Software",
    tagline: "Warehouse Logistics, Barcoding & Supply Chain Tracking",
    desc: "Gain absolute visibility over stock levels, warehouse movements, and supply chain fulfillment with automated tracking technology.",
    advantages: [
      "Real-time stock level monitoring across multiple warehouse locations",
      "Automated low-stock reorder alerts and supplier purchase order generation",
      "Barcode and RFID scanning integration for rapid stock audits",
      "Comprehensive audit trails minimizing shrinkage and inventory discrepancies"
    ]
  },
  {
    slug: "ecommerce",
    name: "E-Commerce Platforms",
    tagline: "High-Conversion Digital Storefronts & Omnichannel Retail",
    desc: "Build feature-rich online storefronts optimized for maximum conversion rates, multi-currency checkout, and seamless catalog management.",
    advantages: [
      "Lightning-fast digital storefronts optimized for high conversion rates",
      "Multi-currency support and secure integrated payment checkouts",
      "Advanced product catalog management with variant attributes and filters",
      "Customer wishlists, product reviews, and personalized recommendation engines"
    ]
  },
  {
    slug: "crm",
    name: "Customer Relationship Management (CRM)",
    tagline: "Sales Pipeline Automation & Lead Conversion Suites",
    desc: "Manage customer lifecycles, track sales pipelines, and automate marketing outreach to accelerate business growth and client retention.",
    advantages: [
      "Visual drag-and-drop sales pipeline tracking from lead to closed deal",
      "Automated email marketing sequences and customer interaction logs",
      "Comprehensive customer history tracking for personalized support",
      "Advanced revenue forecasting and team performance analytics"
    ]
  },
  {
    slug: "erp",
    name: "Enterprise Resource Planning (ERP)",
    tagline: "Centralized Business Operations & Resource Planning",
    desc: "Unify core business processes—including finance, HR, manufacturing, and supply chain—into a single high-performance enterprise ecosystem.",
    advantages: [
      "Centralized database eliminating data silos across company departments",
      "Automated financial bookkeeping, payroll, and tax compliance reporting",
      "Resource allocation tools optimizing workforce and asset productivity",
      "Real-time executive dashboards providing holistic enterprise visibility"
    ]
  },
  {
    slug: "hr-payroll",
    name: "HR & Payroll Systems",
    tagline: "Automated Workforce Management & Salary Processing",
    desc: "Streamline employee onboarding, attendance tracking, tax deductions, and automated payroll disbursement for modern enterprises.",
    advantages: [
      "Automated multi-tier tax calculations and statutory compliance reporting",
      "Digital employee self-service portals for leave requests and payslips",
      "Biometric and digital clock-in attendance tracking integrations",
      "Secure, direct bank disbursement pipelines for payroll execution"
    ]
  }
];

export default function ProductPage() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    document.title = "Business Software Solutions in Ghana | Nexoratel Technologies";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore school management, POS, inventory, hotel, e-commerce, CRM, ERP, and payroll software solutions built for Ghanaian organizations.";
  }, []);

  const activeProduct = GENERAL_PRODUCTS_DATA.find(p => p.slug === selectedSlug);

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

        .products-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        @media (max-width: 1024px) {
          .products-grid-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .products-grid-3 { grid-template-columns: 1fr; }
          .responsive-prod-title { font-size: 2.3rem !important; }
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
          <span style={{ color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Digital Software Solutions</span>
          <h1 className="responsive-prod-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '10px', marginBottom: '24px', lineHeight: 1.1, color: '#ffffff' }}>
            Software Built For <span style={{ color: '#e0f2fe' }}>Every Industry.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#f8fafc', lineHeight: '1.7' }}>
            We engineer powerful, scalable digital systems ranging from school management and hotel portals to e-commerce, POS terminals, and enterprise inventory tracking.
          </p>
        </div>
      </section>

      {/* Dynamic View: If a software solution is selected, show its advantages */}
      {activeProduct ? (
        <section className="container anim-slide-1" style={{ marginTop: '60px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <button 
              onClick={() => { setSelectedSlug(null); window.scrollTo(0, 0); }}
              style={{ background: 'transparent', border: 'none', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '8px', padding: 0 }}>
              ← Back to All Solutions
            </button>
            
            <div className="modern-card" style={{ padding: '50px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--brand-blue)' }}></div>
              
              <span style={{ color: 'var(--brand-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Solution Spotlight</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '10px', marginBottom: '10px', color: 'var(--text-main)' }}>
                {activeProduct.name}
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--brand-blue)', fontWeight: 600, marginBottom: '25px' }}>{activeProduct.tagline}</p>
              
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '35px' }}>
                {activeProduct.desc}
              </p>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--text-main)' }}>Key Advantages & Capabilities:</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px', paddingLeft: '20px' }}>
                {activeProduct.advantages.map((adv, i) => (
                  <li key={i} style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {adv}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <button 
                  className="btn-solid-blue" 
                  onClick={() => window.location.href = '/contact'}
                  style={{ padding: '16px 32px' }}>
                  Request Custom Solution Build
                </button>
                <button 
                  onClick={() => { setSelectedSlug(null); window.scrollTo(0, 0); }}
                  className="btn-outline-blue" 
                  style={{ padding: '16px 32px', textAlign: 'center', cursor: 'pointer', background: 'transparent' }}>
                  View Other Solutions
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Default View: Grid of Software Solutions */
        <section className="container anim-slide-2" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="products-grid-3">
            {GENERAL_PRODUCTS_DATA.map((prod, idx) => (
              <div key={idx} className="modern-card" style={{ padding: '45px 35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>{prod.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--brand-blue)', fontWeight: 700, marginBottom: '16px' }}>{prod.tagline}</p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem', marginBottom: '25px' }}>{prod.desc}</p>
                </div>
                {prod.slug === 'schools' ? (
                  <Link to="/products/school-management-system-ghana" style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.95rem' }}>
                    Explore our school management system in Ghana →
                  </Link>
                ) : (
                  <button
                    onClick={() => { setSelectedSlug(prod.slug); window.scrollTo(0, 0); }}
                    style={{ background: 'transparent', border: 'none', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textAlign: 'left' }}>
                    Read more →
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
