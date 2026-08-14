import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | Nexoratel Technologies";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Read the Terms of Service governing your use of Nexoratel Technologies' digital products, software engineering services, and platforms.";
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
        .anim-slide-2 { opacity: 0; animation: seriousSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; }
        .floating-orb-custom { animation: orbFloat 7s ease-in-out infinite; }

        .legal-content h3 {
          font-size: 1.5rem;
          color: var(--text-main);
          margin-top: 40px;
          margin-bottom: 15px;
        }
        .legal-content p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1.05rem;
          margin-bottom: 20px;
        }
        .legal-content ul {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1.05rem;
          padding-left: 20px;
          margin-bottom: 20px;
        }
        .legal-content li {
          margin-bottom: 10px;
        }
        @media (max-width: 640px) {
          .responsive-terms-title { font-size: 2.3rem !important; }
        }
      `}</style>

      {/* Hero Header */}
      <section style={{ 
        minHeight: '50vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative', 
        paddingTop: '140px', 
        paddingBottom: '80px', 
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
          <span style={{ color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Legal Agreement</span>
          <h1 className="responsive-terms-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '10px', marginBottom: '20px', lineHeight: 1.1, color: '#ffffff' }}>
            Terms of <span style={{ color: '#e0f2fe' }}>Service.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#f8fafc', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container anim-slide-2" style={{ marginTop: '60px', maxWidth: '900px' }}>
        <div className="modern-card" style={{ padding: '50px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--brand-blue)' }}></div>
          
          <div className="legal-content">
            <p>
              Welcome to Nexoratel Technologies. These Terms of Service ("Terms") govern your access to and use of our website, custom software engineering services, enterprise applications, and digital platforms (collectively, the "Services"). By engaging with our Services, you agree to be bound by these Terms.
            </p>

            <h3>1. Acceptance of Terms</h3>
            <p>
              By signing a statement of work, paying an invoice, or otherwise accessing our Services, you confirm that you have read, understood, and agree to these Terms. If you do not agree, you may not use our Services.
            </p>

            <h3>2. Description of Services</h3>
            <p>
              Nexoratel Technologies provides enterprise software engineering, mobile application development, cloud architecture, cybersecurity, and ready-to-deploy digital solutions. The specific scope of work, deliverables, and timelines for custom projects will be outlined in a dedicated Service Level Agreement (SLA) or contract between Nexoratel Technologies and the client.
            </p>

            <h3>3. Intellectual Property Rights</h3>
            <ul>
              <li><strong>Pre-existing Material:</strong> Nexoratel Technologies retains all rights to any pre-existing codebases, frameworks, and proprietary software modules used during development.</li>
              <li><strong>Custom Deliverables:</strong> Upon full payment of all undisputed project fees, the intellectual property rights of the custom-developed source code will be transferred to the client, unless otherwise stated in the SLA.</li>
              <li><strong>Platform Subscriptions:</strong> For SaaS products (e.g., Sellarpro, HMS, Teller 360), clients are granted a non-exclusive, non-transferable license to use the software. We retain full ownership of the underlying IP.</li>
            </ul>

            <h3>4. Client Responsibilities</h3>
            <p>
              The client agrees to provide timely access to necessary information, assets, credentials, and feedback required for Nexoratel Technologies to fulfill its obligations. Delays caused by the client may result in adjusted project timelines.
            </p>

            <h3>5. Confidentiality and Data Security</h3>
            <p>
              Both parties agree to keep all proprietary information, trade secrets, and business operations strictly confidential. Nexoratel Technologies implements ISO-aligned security practices to protect client data, but the client is ultimately responsible for maintaining the security of their deployment credentials.
            </p>

            <h3>6. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Nexoratel Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities arising out of or related to your use of our Services.
            </p>

            <h3>7. Governing Law and Jurisdiction</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes arising from these Terms or our Services shall be subject to the exclusive jurisdiction of the courts in Accra, Greater Accra Region.
            </p>

            <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #e2e8f0' }}>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-main)' }}>
                Questions regarding these Terms? Please contact us at: <br/>
                <Link to="/contact" style={{ color: 'var(--brand-blue)', textDecoration: 'none' }}>Legal Department via Contact Page</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}