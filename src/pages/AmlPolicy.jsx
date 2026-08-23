import { useEffect } from 'react';
import { Link } from 'react-router';

export default function AmlPolicy() {
  useEffect(() => {
    document.title = "AML Policy | Nexoratel Technologies";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Read the Anti-Money Laundering (AML) Policy of Nexoratel Technologies regarding our financial technology and enterprise products.";
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
          <span style={{ color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Compliance Framework</span>
          <h1 className="responsive-terms-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '10px', marginBottom: '20px', lineHeight: 1.1, color: '#ffffff' }}>
            Anti-Money Laundering <span style={{ color: '#e0f2fe' }}>Policy.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#f8fafc', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
            Protecting our financial infrastructure and adhering to global regulatory standards.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container anim-slide-2" style={{ marginTop: '60px', maxWidth: '900px' }}>
        <div className="modern-card" style={{ padding: '50px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--brand-blue)' }}></div>
          
          <div className="legal-content">
            <p>
              At Nexoratel Technologies, as developers of robust financial technology software, payment gateways, and enterprise retail engines, we recognize our responsibility to combat financial crimes. This Anti-Money Laundering (AML) Policy outlines our commitment to preventing our platforms and services from being utilized for money laundering, terrorist financing, or other illicit activities.
            </p>

            <h3>1. Policy Statement</h3>
            <p>
              We maintain a zero-tolerance policy towards money laundering and related financial crimes. We are committed to complying with all relevant local and international laws, including the guidelines set forth by the Financial Intelligence Centre (FIC) of Ghana and international best practices for technology providers.
            </p>

            <h3>2. Know Your Customer (KYC) Procedures</h3>
            <p>
              Before deploying FinTech solutions (such as Teller 360) or establishing enterprise contracts, we conduct rigorous due diligence. This includes:
            </p>
            <ul>
              <li>Verifying the identity of the corporate entity and its ultimate beneficial owners.</li>
              <li>Understanding the nature of the client's business and the intended use of our software infrastructure.</li>
              <li>Ensuring the client operates legally within their stated jurisdictions.</li>
            </ul>

            <h3>3. Transaction Monitoring & Software Compliance</h3>
            <p>
              While Nexoratel Technologies acts primarily as a software engineering firm and not a financial institution, we embed AML compliance capabilities directly into the financial software we build. Our platforms are engineered to allow our clients to:
            </p>
            <ul>
              <li>Flag unusual or suspicious transaction patterns automatically.</li>
              <li>Generate compliance reports required by central banks and financial regulators.</li>
              <li>Maintain immutable, secure audit trails for all financial activities.</li>
            </ul>

            <h3>4. Risk Assessment</h3>
            <p>
              We apply a risk-based approach to our client engagements. Enhanced Due Diligence (EDD) is conducted for clients operating in high-risk sectors or geographic locations known for elevated financial crime risks. We reserve the right to refuse service or terminate contracts if a client fails to meet our compliance thresholds.
            </p>

            <h3>5. Internal Training & Reporting</h3>
            <p>
              Our engineering and sales teams undergo regular training to recognize "red flags" in client requests that may indicate an attempt to build systems for illicit financial obfuscation. Any suspicious inquiries or requests to deliberately bypass security ledgers are immediately escalated to our internal compliance officers.
            </p>

            <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #e2e8f0' }}>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-main)' }}>
                For further inquiries regarding our compliance frameworks, please contact our Legal and Compliance Team via the <Link to="/contact" style={{ color: 'var(--brand-blue)', textDecoration: 'none' }}>Contact Page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
