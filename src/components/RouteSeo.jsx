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
  '/products': {
    title: 'Business Software Solutions in Ghana | Nexoratel Technologies',
    description: 'Explore school management, POS, inventory, hotel, e-commerce, CRM, ERP, and payroll software solutions built for Ghanaian organizations.',
  },
  '/contact': {
    title: 'Contact a Software Company in Tema, Ghana | Nexoratel',
    description: 'Contact Nexoratel Technologies in Tema, Ghana to discuss custom software, mobile apps, cloud infrastructure, or business management systems.',
  },
  '/terms': {
    title: 'Terms of Service | Nexoratel Technologies',
    description: 'Read the terms governing Nexoratel Technologies software engineering services and digital products.',
  },
  '/aml-policy': {
    title: 'AML Policy | Nexoratel Technologies',
    description: 'Read the Nexoratel Technologies anti-money laundering policy for financial technology and enterprise solutions.',
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

export default function RouteSeo() {
  const { pathname } = useLocation();
  const page = pages[pathname];
  const isLandingPage = pathname.startsWith('/services/') || pathname.startsWith('/products/');
  const isKnownIndustry = /^\/industries\/(finance|healthcare|retail)$/.test(pathname);

  if (!page && !isKnownIndustry) {
    return <Seo title="Page Not Found | Nexoratel Technologies" description="The requested page could not be found." path={pathname} noindex />;
  }

  const resolved = page || {
    title: 'Industry Technology Solutions in Ghana | Nexoratel',
    description: 'Explore tailored software and digital infrastructure solutions for organizations operating in Ghana.',
  };

  return (
    <Seo
      {...resolved}
      path={pathname}
      schema={resolved.schema || (isLandingPage || isKnownIndustry ? serviceSchema(resolved, pathname) : undefined)}
    />
  );
}
