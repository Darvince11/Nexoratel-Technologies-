import { useLocation } from 'react-router';
import Seo, { SITE_URL } from './Seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Nexoratel Technologies',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  email: 'info@nexorateltechnologies.com',
  telephone: '+233545059232',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Community 6',
    addressLocality: 'Tema',
    addressRegion: 'Greater Accra',
    addressCountry: 'GH',
  },
  areaServed: { '@type': 'Country', name: 'Ghana' },
  sameAs: [
    'https://www.facebook.com/share/1cT8b6NR9X/',
    'https://www.instagram.com/nexorateltechnologies/',
    'https://www.linkedin.com/company/nexorateltechnologies/',
  ],
};

const pages = {
  '/': {
    title: 'Software Development Company in Ghana | Nexoratel Technologies',
    description: 'Nexoratel Technologies is a software development company in Tema, Ghana, building custom software, mobile apps, cloud infrastructure, and business systems.',
    schema: organizationSchema,
  },
  '/about': {
    title: 'About Our Ghana Software Company | Nexoratel Technologies',
    description: 'Learn about Nexoratel Technologies, a Tema-based engineering company delivering software, cloud, mobile, data, and infrastructure solutions across Ghana.',
  },
  '/services': {
    title: 'Software Engineering Services in Ghana | Nexoratel Technologies',
    description: 'Explore custom software, mobile application, DevOps, cloud, networking, and data analytics services for organizations across Ghana.',
  },
  '/industries': {
    title: 'Technology Solutions for Ghanaian Industries | Nexoratel',
    description: 'Explore technology solutions for finance, healthcare, retail, education, hospitality, telecommunications, and other industries in Ghana.',
  },
  '/industries/finance': {
    title: 'Financial Technology Solutions in Ghana | Nexoratel',
    description: 'Build secure payment, lending, ledger, wallet, and financial operations software for regulated organizations in Ghana.',
  },
  '/industries/healthcare': {
    title: 'Healthcare Software Solutions in Ghana | Nexoratel',
    description: 'Connect clinical, laboratory, pharmacy, billing, and patient workflows with secure healthcare software built for Ghanaian providers.',
  },
  '/industries/retail': {
    title: 'Retail and E-Commerce Software in Ghana | Nexoratel',
    description: 'Unify sales, inventory, customer, payment, and fulfillment operations with retail technology designed for Ghanaian businesses.',
  },
  '/products': {
    title: 'Business Software Solutions in Ghana | Nexoratel Technologies',
    description: 'Explore school management, POS, inventory, hotel, e-commerce, CRM, ERP, and payroll software solutions built for Ghanaian organizations.',
  },
  '/contact': {
    title: 'Contact a Software Company in Tema, Ghana | Nexoratel',
    description: 'Contact Nexoratel Technologies in Tema, Ghana to discuss custom software, mobile apps, cloud infrastructure, or business management systems.',
  },
  '/blog': {
    title: 'Technology Insights & Engineering Blog | Nexoratel',
    description: 'Read practical insights from Nexoratel Technologies on software engineering, cloud architecture, cybersecurity, mobile development, and digital strategy.',
  },
  '/blog/software-development-company-ghana': {
    title: 'Software Development Company in Ghana | Custom Software',
    description: 'Looking for a software development company in Ghana? Discover how custom software can automate operations, improve efficiency and help your business grow with Nexoratel Technologies.',
    image: `${SITE_URL}/blog-software-development-company-ghana.png`,
  },
  '/blog/how-much-does-a-website-cost-in-ghana': {
    title: 'How Much Does a Website Cost in Ghana? 2026 Prices',
    description: 'How much does a website cost in Ghana? Discover website design prices, what affects development costs, and professional websites from Nexoratel Technologies starting at GH₵2,000.',
    image: `${SITE_URL}/blog-website-cost-ghana-2026.png`,
  },
  '/blog/future-of-cloud-architecture-2026': {
    title: 'The Future of Cloud Architecture in 2026 | Nexoratel',
    description: 'Explore serverless platforms, multi-cloud resilience, and cost management strategies for modern enterprise cloud architecture.',
  },
  '/blog/securing-enterprise-apis-against-advanced-threats': {
    title: 'Securing Enterprise APIs Against Advanced Threats | Nexoratel',
    description: 'A practical guide to zero-trust access, token security, abuse prevention, and continuous testing for enterprise APIs.',
  },
  '/blog/cross-platform-mobile-app-performance-secrets': {
    title: 'Cross-Platform Mobile App Performance | Nexoratel',
    description: 'Learn how to keep React Native and Flutter apps responsive across real-world devices, workloads, and mobile networks.',
  },
  '/terms': {
    title: 'Terms of Service | Nexoratel Technologies',
    description: 'Read the terms governing Nexoratel Technologies software engineering services and digital products.',
  },
  '/aml-policy': {
    title: 'AML Policy | Nexoratel Technologies',
    description: 'Read the Nexoratel Technologies anti-money laundering policy for financial technology and enterprise solutions.',
  },
  '/accessibility': {
    title: 'Accessibility Statement | Nexoratel Technologies',
    description: 'Read how Nexoratel Technologies works to make its website accessible to people with disabilities and how to request assistance.',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Nexoratel Technologies',
    description: 'Learn how Nexoratel Technologies uses cookies and browser storage, and manage your analytics and marketing preferences.',
  },
  '/services/custom-software-development-ghana': {
    title: 'Custom Software Development in Ghana | Nexoratel',
    description: 'Build secure, scalable custom software for your Ghanaian organization with Nexoratel Technologies. From discovery and UX to deployment and support.',
  },
  '/services/mobile-app-development-ghana': {
    title: 'Mobile App Development Company in Ghana | Nexoratel',
    description: 'Nexoratel designs and develops secure Android, iOS, and cross-platform mobile apps for businesses and organizations in Ghana.',
  },
  '/products/school-management-system-ghana': {
    title: 'School Management System in Ghana | Nexoratel',
    description: 'Manage admissions, fees, attendance, results, communication, and reporting with school management software built for Ghanaian institutions.',
  },
};

const serviceSchema = (page, path) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: page.title.split('|')[0].trim(),
  description: page.description,
  url: `${SITE_URL}${path}`,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'Ghana' },
});

const articleDetails = {
  '/blog/software-development-company-ghana': ['2026-09-09', 'Nexoratel Editorial Team', '/blog-software-development-company-ghana.png'],
  '/blog/how-much-does-a-website-cost-in-ghana': ['2026-09-09', 'Nexoratel Editorial Team', '/blog-website-cost-ghana-2026.png'],
  '/blog/future-of-cloud-architecture-2026': ['2026-06-12', 'Daniel Baisel'],
  '/blog/securing-enterprise-apis-against-advanced-threats': ['2026-05-28', 'Nexoratel Security Team'],
  '/blog/cross-platform-mobile-app-performance-secrets': ['2026-05-14', 'Nexoratel Mobile Team'],
};

const articleSchema = (page, path) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: page.title.split('|')[0].trim(),
  description: page.description,
  datePublished: articleDetails[path][0],
  author: { '@type': 'Person', name: articleDetails[path][1] },
  publisher: { '@id': `${SITE_URL}/#organization` },
  mainEntityOfPage: `${SITE_URL}${path}`,
  image: `${SITE_URL}${articleDetails[path][2] || '/blog-engineering-team.png'}`,
});

export default function RouteSeo() {
  const { pathname } = useLocation();
  const canonicalPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const page = pages[canonicalPath];
  const isLandingPage = canonicalPath.startsWith('/services/') || canonicalPath.startsWith('/products/');
  const isKnownIndustry = /^\/industries\/(finance|healthcare|retail)$/.test(canonicalPath);
  const isBlogArticle = Boolean(articleDetails[canonicalPath]);

  if (!page && !isKnownIndustry) {
    return <Seo title="Page Not Found | Nexoratel Technologies" description="The requested page could not be found." path={canonicalPath} noindex />;
  }

  const resolved = page || {
    title: 'Industry Technology Solutions in Ghana | Nexoratel',
    description: 'Explore tailored software and digital infrastructure solutions for organizations operating in Ghana.',
  };

  return (
    <Seo
      {...resolved}
      path={canonicalPath}
      schema={resolved.schema || (isBlogArticle ? articleSchema(resolved, canonicalPath) : (isLandingPage || isKnownIndustry ? serviceSchema(resolved, canonicalPath) : undefined))}
    />
  );
}
