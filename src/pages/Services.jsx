import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const SERVICES_LIST = [
  { 
    slug: "custom-software-engineering",
    title: "Custom Software Engineering", 
    desc: "Scalable web and mobile architectures built on cutting-edge frameworks for rapid enterprise expansion.",
    longDesc: "Our custom software engineering practice focuses on designing robust, high-availability digital products tailored specifically to your business workflows. We utilize modern full-stack architectures (React, Next.js, Node, Laravel) to ensure high performance, seamless database optimization, and absolute code maintainability.",
    benefits: [
      "Tailored system design matching your exact business logic",
      "High-availability architectures built for zero downtime",
      "Rigorous unit testing and automated QA pipelines",
      "Seamless integration with third-party APIs and legacy systems"
    ]
  },
  { 
    slug: "mobile-application-development",
    title: "Mobile Application Development", 
    desc: "High-performance native and cross-platform mobile apps engineered for fluid user experiences across iOS and Android.",
    longDesc: "We build feature-rich, ultra-responsive mobile applications that captivate users. Whether utilizing cross-platform frameworks for rapid deployment or native SDKs for maximum device hardware utilization, our apps deliver 60fps fluid interfaces and secure offline capabilities.",
    benefits: [
      "Cross-platform efficiency (React Native / Flutter) or pure native development",
      "Intuitive, human-centric UI/UX design optimized for touch interactions",
      "Secure local data encryption and real-time synchronization",
      "Optimized battery consumption and low-latency network handling"
    ]
  },
  { 
    slug: "devops-and-infrastructure",
    title: "DevOps & CI/CD Automation", 
    desc: "Automated deployment pipelines, container orchestration, and infrastructure-as-code for rapid, reliable releases.",
    longDesc: "Accelerate your software release cycles and eliminate operational bottlenecks with our specialized DevOps engineering. We architect automated continuous integration and continuous deployment (CI/CD) pipelines, configure Kubernetes and Docker clusters, and deploy Infrastructure-as-Code (Terraform / Ansible) to ensure zero-downtime deployments and rapid scaling.",
    benefits: [
      "Fully automated CI/CD deployment pipelines (GitHub Actions, GitLab, Jenkins)",
      "Containerization and microservices orchestration with Docker & Kubernetes",
      "Infrastructure-as-Code (IaC) configuration for reproducible cloud environments",
      "Real-time health monitoring, log aggregation, and automated disaster recovery"
    ]
  },
  { 
    slug: "networking",
    title: "Networking", 
    desc: "Robust enterprise networking solutions designed for secure, lightning-fast, and reliable internal and external connectivity.",
    longDesc: "Enterprise success relies on uncompromised connectivity. We architect, configure, and manage high-performance networking infrastructures that ensure secure data transit, low latency, and fault tolerance across all corporate nodes.",
    benefits: [
      "Secure software-defined wide area networking (SD-WAN)",
      "High-speed internal routing and multi-location VPN tunnels",
      "Advanced firewall configuration and intrusion detection systems",
      "Optimized bandwidth allocation for data-heavy operations"
    ]
  },
  { 
    slug: "data-analytics",
    title: "Data Analytics", 
    desc: "Advanced business intelligence and predictive data pipelines that turn raw data into actionable enterprise insights.",
    longDesc: "Transform raw data into your most valuable asset. We build sophisticated data warehouses, real-time analytics dashboards, and machine learning prediction pipelines that empower executives to make data-driven decisions with confidence.",
    benefits: [
      "Real-time executive business intelligence (BI) dashboards",
      "Scalable data lakehouse and ETL pipeline construction",
      "Predictive trend modeling and automated reporting systems",
      "Data cleansing, governance, and secure multi-tenant storage"
    ]
  },
  { 
    slug: "cloud-computing",
    title: "Cloud Computing", 
    desc: "Scalable cloud infrastructure migration, serverless architectures, and multi-cloud management for modern workloads.",
    longDesc: "Future-proof your infrastructure with our enterprise cloud computing services. We handle seamless cloud migrations (AWS, Google Cloud, DigitalOcean), serverless backend scaling, and multi-cloud orchestration designed to optimize operating costs.",
    benefits: [
      "Zero-downtime migration from legacy hardware to cloud environments",
      "Cost-optimized serverless and microservices architectures",
      "Auto-scaling configurations to handle traffic spikes effortlessly",
      "Multi-cloud redundancy and automated backup disaster recovery"
    ]
  }
];

export default function Services() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    document.title = "Software Engineering Services in Ghana | Nexoratel Technologies";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore custom software, mobile application, DevOps, cloud, networking, and data analytics services for organizations across Ghana.";
  }, []);

  // Find active service if a slug is selected
  const activeService = SERVICES_LIST.find(s => s.slug === selectedSlug);

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
        
        .services-grid-3x2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        @media (max-width: 1024px) {
          .services-grid-3x2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .services-grid-3x2 { grid-template-columns: 1fr; }
          .responsive-services-title { font-size: 2.3rem !important; }
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
          <span style={{ color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>What We Offer</span>
          <h1 className="responsive-services-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '10px', marginBottom: '24px', lineHeight: 1.1, color: '#ffffff' }}>
            Comprehensive <span style={{ color: '#e0f2fe' }}>Technical Services.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#f8fafc', lineHeight: '1.7' }}>
            From core software architecture to automated DevOps workflows and cloud deployments, we deliver end-to-end technical solutions designed to give your business a decisive competitive edge.
          </p>
        </div>
      </section>
      
      {/* Dynamic View: If a service is selected, show the detailed page view */}
      {activeService ? (
        <div className="container anim-slide-1" style={{ maxWidth: '900px', marginTop: '60px' }}>
          <button 
            onClick={() => setSelectedSlug(null)} 
            style={{ background: 'transparent', border: 'none', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ← Back to All Services
          </button>
          
          <div className="modern-card" style={{ padding: '50px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--brand-blue)' }}></div>
            
            <span style={{ color: 'var(--brand-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Enterprise Expertise</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '10px', marginBottom: '20px', color: 'var(--text-main)' }}>
              {activeService.title}
            </h2>
            
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '35px' }}>
              {activeService.longDesc}
            </p>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--text-main)' }}>Key Engineering Benefits:</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px', paddingLeft: '20px' }}>
              {activeService.benefits.map((benefit, i) => (
                <li key={i} style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {benefit}
                </li>
              ))}
            </ul>

            <button 
              className="btn-solid-blue" 
              onClick={() => window.location.href = '/contact'}
              style={{ padding: '16px 32px' }}>
              Consult With Our Experts
            </button>
          </div>
        </div>
      ) : (
        // Default View: Services Grid
        <section className="container anim-slide-2" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="services-grid-3x2">
            {SERVICES_LIST.map((srv, idx) => (
              <div key={idx} className="modern-card" style={{ padding: '45px 35px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>{srv.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '25px' }}>{srv.desc}</p>
                </div>
                {srv.slug === 'custom-software-engineering' || srv.slug === 'mobile-application-development' ? (
                  <Link
                    to={srv.slug === 'custom-software-engineering' ? '/services/custom-software-development-ghana' : '/services/mobile-app-development-ghana'}
                    style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.95rem' }}>
                    {srv.slug === 'custom-software-engineering' ? 'Explore custom software development in Ghana' : 'Explore mobile app development in Ghana'} →
                  </Link>
                ) : (
                  <button
                    onClick={() => { setSelectedSlug(srv.slug); window.scrollTo(0, 0); }}
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
