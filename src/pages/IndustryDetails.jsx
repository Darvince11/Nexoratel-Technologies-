import { Link, useParams } from 'react-router';
import './IndustryDetails.css';

const INDUSTRIES = {
  finance: {
    eyebrow: 'Financial technology in Ghana',
    title: 'Secure systems for modern financial operations',
    intro: 'We help financial institutions and fintech teams turn complex transaction, lending, customer, and reporting workflows into dependable digital platforms.',
    challengeTitle: 'Build trust into every transaction',
    challenge: 'Financial products must balance a simple customer experience with strong identity controls, traceable transactions, reliable reconciliation, and operational oversight. Nexoratel designs these requirements as one system rather than disconnected features.',
    systems: [
      ['Core ledger platforms', 'Structured account, journal, balance, and reconciliation workflows with complete transaction histories.'],
      ['Payments and wallets', 'Secure collection, transfer, settlement, notification, and exception-management experiences.'],
      ['Loan management', 'Application, assessment, approval, disbursement, repayment, arrears, and portfolio reporting tools.'],
      ['Operations portals', 'Role-based tools for customer service, compliance review, finance teams, and management reporting.'],
    ],
    outcomes: ['Faster reconciliation and exception handling', 'Clear audit trails across sensitive actions', 'Consistent customer and operations data', 'Architecture designed for integrations and growth'],
    priorities: [
      ['Security from discovery', 'Threat modeling, least-privilege access, encryption boundaries, and audit requirements are defined before implementation.'],
      ['Operational resilience', 'Monitoring, backups, recovery objectives, transaction integrity, and failure handling are designed around real business risk.'],
      ['Compliance-ready workflows', 'We help teams translate internal controls and applicable regulatory obligations into traceable product behavior.'],
    ],
    related: ['/services/custom-software-development-ghana', 'Custom software development'],
  },
  healthcare: {
    eyebrow: 'Healthcare technology in Ghana',
    title: 'Connected software for safer, clearer patient care',
    intro: 'We digitize clinical and administrative workflows so healthcare teams can find reliable information, coordinate services, and spend less time moving records between isolated systems.',
    challengeTitle: 'Connect care without compromising confidentiality',
    challenge: 'A healthcare platform must serve clinicians, laboratories, pharmacies, administrators, patients, and finance teams while protecting sensitive records. We map how information should move, who should see it, and what happens when connectivity or integrations fail.',
    systems: [
      ['Hospital management', 'Registration, appointments, encounters, wards, billing, discharge, and operational reporting in one platform.'],
      ['Clinical records', 'Structured histories, observations, diagnoses, treatment plans, and controlled access to patient information.'],
      ['Laboratory and pharmacy', 'Order tracking, results, dispensing, stock visibility, and links between clinical and fulfillment workflows.'],
      ['Patient access', 'Appointment, communication, result, payment, and telemedicine experiences designed around appropriate consent.'],
    ],
    outcomes: ['Less duplicate data entry across departments', 'Faster access to authorized patient information', 'Clearer billing and service reconciliation', 'Better visibility into facility operations'],
    priorities: [
      ['Privacy by design', 'Access roles, consent, retention, audit histories, and secure data exchange are treated as core product behavior.'],
      ['Workflow fit', 'The system reflects how the facility actually delivers care, including approvals, handoffs, and exceptions.'],
      ['Adoption and continuity', 'Pilots, training, data migration, offline considerations, and support planning reduce disruption to patient services.'],
    ],
    related: ['/services/mobile-app-development-ghana', 'Mobile application development'],
  },
  retail: {
    eyebrow: 'Retail technology in Ghana',
    title: 'One operational view across sales, stock, and customers',
    intro: 'We build retail platforms that connect storefronts, online orders, inventory, payments, fulfillment, and management reporting across growing businesses.',
    challengeTitle: 'Keep every channel working from the same information',
    challenge: 'Retail operations lose margin when stock records, sales channels, purchasing, and customer data disagree. Nexoratel connects these workflows so teams can respond to demand, reduce manual reconciliation, and serve customers consistently.',
    systems: [
      ['Point of sale', 'Fast checkout, cashier controls, receipts, returns, shift management, and operation during unstable connectivity.'],
      ['Inventory management', 'Stock movements, transfers, counts, reorder levels, purchasing, and traceability across locations.'],
      ['E-commerce and fulfillment', 'Catalogs, payments, promotions, order routing, delivery status, and customer communications.'],
      ['Retail intelligence', 'Sales, margin, stock aging, product performance, and branch-level dashboards for practical decisions.'],
    ],
    outcomes: ['Accurate stock visibility across locations', 'Fewer manual sales and inventory reconciliations', 'Faster order and fulfillment workflows', 'Decision-ready product and branch reporting'],
    priorities: [
      ['Reliable checkout', 'Critical selling workflows are designed for speed, clear recovery, and common hardware and network conditions.'],
      ['Inventory integrity', 'Every receipt, sale, return, adjustment, and transfer creates a traceable stock movement.'],
      ['Scalable operations', 'Permissions, branches, catalogs, pricing rules, and integrations can expand without rebuilding the platform.'],
    ],
    related: ['/products', 'Retail and business software'],
  },
};

export default function IndustryDetails() {
  const { slug } = useParams();
  const industry = INDUSTRIES[slug];
  if (!industry) return <main className="industry-missing"><h1>Industry not found</h1><Link to="/industries" className="btn-solid-blue">View industries</Link></main>;

  return <main className="industry-detail">
    <header className={`industry-hero industry-${slug}`}><div className="container"><nav aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/industries">Industries</Link></nav><span className="industry-eyebrow">{industry.eyebrow}</span><h1>{industry.title}</h1><p>{industry.intro}</p><Link to="/contact" className="btn-solid-blue">Discuss your requirements</Link></div></header>
    <section className="container industry-challenge"><div><span className="industry-eyebrow">The sector challenge</span><h2>{industry.challengeTitle}</h2></div><p>{industry.challenge}</p></section>
    <section className="industry-systems"><div className="container"><span className="industry-eyebrow">Systems we engineer</span><h2>Technology shaped around the work</h2><div className="industry-system-grid">{industry.systems.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="container industry-outcomes"><div><span className="industry-eyebrow">Operational value</span><h2>Outcomes the platform should support</h2></div><ul>{industry.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>
    <section className="industry-priorities"><div className="container"><span className="industry-eyebrow">Implementation priorities</span><h2>What responsible delivery looks like</h2><div>{industry.priorities.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="container industry-final"><div><span className="industry-eyebrow">Start with discovery</span><h2>Plan the right system before writing code.</h2><p>We begin by understanding users, controls, integrations, data, operating constraints, and the result your organization needs.</p></div><div><Link to="/contact" className="btn-solid-blue">Request a consultation</Link><Link to={industry.related[0]}>{industry.related[1]} -&gt;</Link></div></section>
  </main>;
}
