import { Link } from 'react-router';

const PAGE_DATA = {
  customSoftware: {
    eyebrow: 'Custom Software Engineering in Ghana',
    title: 'Custom Software Development Built Around Your Business',
    intro: 'Nexoratel Technologies designs and builds secure web platforms, operational systems, customer portals, and enterprise applications for organizations across Ghana. Every system is shaped around the workflow it needs to improve—not forced into a generic template.',
    problemTitle: 'Move beyond disconnected tools and manual processes',
    problem: 'Spreadsheets, paper approvals, duplicate data entry, and disconnected applications make it difficult to scale. We turn those processes into one maintainable software platform with clear permissions, reliable reporting, and integrations that fit your organization.',
    deliverables: [
      'Business requirements and workflow discovery',
      'User experience and interface design',
      'Web application and secure API development',
      'Database architecture and data migration',
      'Payment, messaging, accounting, and third-party integrations',
      'Cloud deployment, monitoring, training, and support',
    ],
    process: [
      ['Discovery', 'We map the users, business rules, risks, integrations, and outcomes that define a successful system.'],
      ['Design', 'We translate the agreed workflow into architecture, prototypes, delivery milestones, and a practical implementation plan.'],
      ['Build and validate', 'The product is developed iteratively, reviewed with stakeholders, and tested for security, usability, and reliability.'],
      ['Launch and improve', 'We deploy, train users, monitor the system, and plan improvements from real operational feedback.'],
    ],
    audiences: ['Financial and professional services', 'Schools and training institutions', 'Retail and distribution businesses', 'Healthcare and service organizations', 'Growing SMEs and enterprise teams'],
    faqs: [
      ['How much does custom software cost in Ghana?', 'Cost depends on the number of workflows, user roles, integrations, security requirements, and delivery timeline. We begin with a discovery conversation and provide a scoped proposal rather than a generic package price.'],
      ['Can you modernize an existing system?', 'Yes. We can assess an existing application, stabilize critical areas, migrate data, integrate modern services, or plan a staged replacement that reduces operational disruption.'],
      ['Do you provide support after launch?', 'Support can include monitoring, maintenance, backups, security updates, user assistance, and planned feature development based on the operating needs of the system.'],
    ],
    related: [
      ['/services/mobile-app-development-ghana', 'Explore mobile app development in Ghana'],
      ['/products/school-management-system-ghana', 'See our school management system'],
    ],
  },
  mobileApps: {
    eyebrow: 'Mobile App Development in Ghana',
    title: 'Mobile Applications Designed for Ghanaian Users and Operations',
    intro: 'Nexoratel Technologies develops Android, iOS, and cross-platform applications for businesses, institutions, and digital product teams in Ghana. We combine product planning, user experience, secure engineering, and dependable backend systems in one delivery process.',
    problemTitle: 'Build an app people can use reliably',
    problem: 'A successful mobile product needs more than an attractive interface. It must work across common devices, handle changing network conditions, protect user data, and connect cleanly to the services that power the business. We plan those requirements before development begins.',
    deliverables: [
      'Product discovery and feature prioritization',
      'Mobile UX research, wireframes, and interface design',
      'Android, iOS, React Native, or Flutter development',
      'Secure backend APIs and administration dashboards',
      'Payments, notifications, maps, identity, and analytics integrations',
      'Testing, store-release preparation, monitoring, and maintenance',
    ],
    process: [
      ['Product definition', 'We clarify the audience, core task, commercial model, required integrations, and measurable product goals.'],
      ['Prototype', 'Interactive designs validate navigation and critical user journeys before engineering time is committed.'],
      ['Engineering', 'We build the mobile application and backend services in reviewable milestones, with testing throughout delivery.'],
      ['Release and support', 'We prepare production infrastructure and app-store releases, then monitor usage and improve the product.'],
    ],
    audiences: ['Consumer service platforms', 'Internal field-operation teams', 'Schools and learning providers', 'Retail and delivery businesses', 'Fintech and professional-service products'],
    faqs: [
      ['Should we build for Android, iOS, or both?', 'The right choice depends on your users, required device capabilities, budget, and release plan. For many Ghana-focused products Android is a priority, while cross-platform development can support both stores from a shared codebase.'],
      ['Can the app work with unreliable connectivity?', 'Where the workflow permits it, we can design local caching, offline data capture, queued synchronization, and clear connection states so users can continue important tasks.'],
      ['Can you connect mobile money or online payments?', 'Payment integration is planned around the selected provider, supported transaction flow, compliance requirements, settlement process, and the product’s security model.'],
    ],
    related: [
      ['/services/custom-software-development-ghana', 'Explore custom software development'],
      ['/products', 'View our business software solutions'],
    ],
  },
  schoolSystem: {
    eyebrow: 'School Management Software in Ghana',
    title: 'One School Management System for Administration, Learning and Communication',
    intro: 'Nexoratel Technologies builds school management systems for Ghanaian educational institutions that want clearer records, faster administration, better parent communication, and dependable academic reporting.',
    problemTitle: 'Give every school team one reliable source of information',
    problem: 'Admissions, fees, attendance, assessment, report cards, communication, and staff records often live in separate files or manual books. A properly implemented school platform connects these workflows while giving administrators, teachers, parents, and students appropriate access.',
    deliverables: [
      'Admissions, enrollment, classes, and student records',
      'Fee schedules, billing, payment records, and balances',
      'Attendance, assessments, grading, and report cards',
      'Parent, student, teacher, and administrator portals',
      'Announcements, notifications, calendars, and communication',
      'Management reports, permissions, backups, and implementation support',
    ],
    process: [
      ['School workflow review', 'We document the school structure, academic calendar, grading rules, fee process, user roles, and current records.'],
      ['Configuration and preparation', 'The platform is configured around agreed workflows while records and reporting formats are prepared for migration.'],
      ['Pilot and training', 'A controlled rollout validates the system with selected staff before broader administrator, teacher, parent, and student access.'],
      ['Rollout and support', 'We support adoption, resolve operational issues, protect records, and prioritize improvements after launch.'],
    ],
    audiences: ['Basic and junior high schools', 'Senior high schools', 'Private and international schools', 'Training centres and academies', 'Multi-campus educational organizations'],
    faqs: [
      ['Can the system use our existing grading structure?', 'Yes. Grading, terms, subjects, classes, report formats, and approval workflows should be confirmed during implementation and configured to match the institution’s requirements.'],
      ['Can parents check fees and results?', 'Parent access can provide authorized views of balances, payments, attendance, results, announcements, and other information selected by the school.'],
      ['Will staff receive training?', 'Implementation should include administrator and staff training, supporting documentation, a pilot period, and a clear support process for operational questions.'],
    ],
    related: [
      ['/services/custom-software-development-ghana', 'Learn about custom software engineering'],
      ['/contact', 'Discuss your school’s requirements'],
    ],
  },
};

export default function GhanaLandingPage({ page }) {
  const content = PAGE_DATA[page];

  return (
    <main className="seo-landing">
      <section className="seo-hero">
        <div className="glow-orb blue" style={{ top: '-20%', right: '5%', opacity: 0.35 }} />
        <div className="container seo-hero-content">
          <span className="seo-eyebrow">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
          <div className="seo-actions">
            <Link to="/contact" className="btn-solid-blue">Request a consultation</Link>
            <a href="https://wa.me/233545059232" className="btn-outline-blue" target="_blank" rel="noreferrer">Talk to us on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="container seo-section seo-two-column">
        <div>
          <span className="seo-eyebrow">The business challenge</span>
          <h2>{content.problemTitle}</h2>
        </div>
        <p className="seo-lead">{content.problem}</p>
      </section>

      <section className="seo-muted-section">
        <div className="container seo-section">
          <span className="seo-eyebrow">What we can deliver</span>
          <h2>A practical solution shaped around your requirements</h2>
          <div className="seo-card-grid">
            {content.deliverables.map((item) => (
              <div className="modern-card seo-feature-card" key={item}>
                <span aria-hidden="true">✓</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container seo-section">
        <span className="seo-eyebrow">How delivery works</span>
        <h2>A clear path from requirements to a supported system</h2>
        <div className="seo-process-grid">
          {content.process.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seo-dark-section">
        <div className="container seo-section seo-two-column">
          <div>
            <span className="seo-eyebrow">Who we work with</span>
            <h2>Designed for organizations operating in Ghana</h2>
          </div>
          <ul className="seo-audience-list">
            {content.audiences.map((audience) => <li key={audience}>{audience}</li>)}
          </ul>
        </div>
      </section>

      <section className="container seo-section">
        <span className="seo-eyebrow">Frequently asked questions</span>
        <h2>What organizations ask before getting started</h2>
        <div className="seo-faq-list">
          {content.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container seo-cta modern-card">
        <div>
          <span className="seo-eyebrow">Start with a focused conversation</span>
          <h2>Tell us what your organization needs to improve</h2>
          <p>We will review your goals, users, current workflow, and constraints before recommending an implementation approach.</p>
        </div>
        <Link to="/contact" className="btn-solid-blue">Request a software consultation</Link>
      </section>

      <nav className="container seo-related" aria-label="Related services">
        {content.related.map(([path, label]) => <Link to={path} key={path}>{label} →</Link>)}
      </nav>
    </main>
  );
}
