import { useParams, Link } from 'react-router';
import { IconCheck } from '../components/GlobalComponents'; // Adjust import path

const INDUSTRY_DB = {
  'finance': {
    title: "Financial Technology",
    overview: "Nexoratel builds hyper-secure, AML-compliant banking systems, payment gateways, and core ledger engines.",
    systems: ["Teller 360 Core Banking", "Payment Switch", "Crypto Wallets", "Loan Management"]
  },
  'healthcare': {
    title: "Healthcare Solutions",
    overview: "We digitize clinics and hospitals with comprehensive HMS, telemedicine platforms, and patient portals.",
    systems: ["HMS Platform", "E-Prescriptions", "Telemedicine App", "Lab Integration"]
  },
  'retail': {
    title: "Retail & E-Commerce",
    overview: "Scale your retail operations with our omni-channel POS solutions and inventory management.",
    systems: ["Sellarpro POS", "Inventory Sync", "E-Commerce Storefronts", "Loyalty Engines"]
  }
};

export default function IndustryDetails() {
  const { slug } = useParams();
  const industry = INDUSTRY_DB[slug];

  if (!industry) {
    return (
      <div className="container py-20 text-center" style={{ marginTop: '80px' }}>
        <h2>Industry Not Found</h2>
        <Link to="/industries" className="btn-solid-red" style={{ display: 'inline-block', marginTop: '20px' }}>Back to Industries</Link>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'var(--brand-navy-dark)' }}>
          {industry.title}
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-gray)', maxWidth: '800px', marginBottom: '40px' }}>
          {industry.overview}
        </p>

        <h3 style={{ marginBottom: '20px' }}>Systems We Build</h3>
        <div className="grid-4 slide-up">
          {industry.systems.map((sys, idx) => (
            <div key={idx} className="glass-panel hover-lift" style={{ padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <IconCheck />
              <span style={{ fontWeight: 700, color: 'var(--brand-navy)' }}>{sys}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
