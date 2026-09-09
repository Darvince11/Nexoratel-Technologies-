import { Link } from 'react-router';
import { IconFacebook, IconLinkedIn, IconInstagram } from './Icons';
import fullLogo from '../assets/logo.png';

const socialLinks = [
  ['Facebook', 'https://www.facebook.com/share/1cT8b6NR9X/', <IconFacebook />],
  ['Instagram', 'https://www.instagram.com/nexorateltechnologies/', <IconInstagram />],
  ['LinkedIn', 'https://www.linkedin.com/company/nexorateltechnologies/?viewAsMember=true', <IconLinkedIn />],
];

export default function Footer() {
  const openCookieSettings = () => window.dispatchEvent(new Event('nexoratel:open-cookie-settings'));
  return (
    <footer className="site-footer">
      <style>{`
        .site-footer { background: #101820; color: #aebcc7; border-top: 4px solid #11a8d8; }
        .footer-main { display: grid; grid-template-columns: minmax(280px, 1.3fr) repeat(3, minmax(150px, .7fr)); gap: 54px; padding-top: 70px; padding-bottom: 56px; }
        .footer-brand { max-width: 350px; }
        .footer-logo { width: 196px; height: 72px; object-fit: contain; object-position: left center; filter: brightness(0) invert(1); }
        .footer-summary { max-width: 340px; margin: 20px 0 24px; color: #b9c5ce; font-size: .96rem; line-height: 1.75; }
        .footer-contact { display: grid; gap: 8px; margin-bottom: 24px; font-style: normal; }
        .footer-contact a, .footer-contact span { color: #e7eef2; font-size: .92rem; overflow-wrap: anywhere; }
        .footer-contact a:hover { color: #67e8f9; }
        .footer-socials { display: flex; gap: 9px; }
        .footer-social { width: 38px; height: 38px; display: grid; place-items: center; color: #fff; border: 1px solid #41505c; border-radius: 6px; transition: background .2s ease, border-color .2s ease; }
        .footer-social:hover { color: #fff; background: #087ea4; border-color: #087ea4; }
        .footer-column h2 { color: #fff; font-size: .82rem; text-transform: uppercase; letter-spacing: 1px; margin: 8px 0 23px; }
        .footer-list { list-style: none; display: grid; gap: 13px; }
        .footer-link { color: #aebcc7; font-size: .93rem; line-height: 1.45; transition: color .2s ease; }
        .footer-link:hover { color: #fff; }
        .footer-bottom { border-top: 1px solid #2b3944; padding-top: 23px; padding-bottom: 26px; display: flex; align-items: center; justify-content: space-between; gap: 20px; color: #8fa0ac; font-size: .82rem; }
        .footer-legal { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px 22px; }
        .footer-legal button { background: none; border: 0; padding: 0; font: inherit; cursor: pointer; }
        @media (max-width: 1000px) { .footer-main { grid-template-columns: 1.2fr 1fr 1fr; } .footer-column:last-child { grid-column: 2 / 4; } }
        @media (max-width: 700px) { .footer-main { grid-template-columns: 1fr 1fr; gap: 38px 24px; padding-top: 52px; } .footer-brand { grid-column: 1 / -1; max-width: none; padding-bottom: 10px; } .footer-column:last-child { grid-column: 1 / -1; } .footer-bottom { align-items: flex-start; flex-direction: column; } .footer-legal { justify-content: flex-start; gap: 12px 18px; } }
        @media (max-width: 420px) { .footer-main { grid-template-columns: 1fr; } .footer-brand, .footer-column:last-child { grid-column: auto; } }
      `}</style>
      <div className="container footer-main">
        <div className="footer-brand">
          <Link to="/" aria-label="Nexoratel Technologies home"><img className="footer-logo" src={fullLogo} alt="Nexoratel Technologies" /></Link>
          <p className="footer-summary">Custom software, mobile products, and cloud systems designed for the way your organization operates.</p>
          <address className="footer-contact"><span>Tema Community 6, Ghana</span><a href="mailto:info@nexorateltechnologies.com">info@nexorateltechnologies.com</a><a href="tel:+233545059232">+233 54 505 9232</a></address>
          <div className="footer-socials">{socialLinks.map(([label, href, icon]) => <a className="footer-social" key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{icon}</a>)}</div>
        </div>
        <nav className="footer-column" aria-label="Company links"><h2>Company</h2><ul className="footer-list"><li><Link to="/about" className="footer-link">About Nexoratel</Link></li><li><Link to="/industries" className="footer-link">Industries</Link></li><li><Link to="/products" className="footer-link">Products</Link></li><li><Link to="/blog" className="footer-link">Insights & Blog</Link></li><li><Link to="/contact" className="footer-link">Contact</Link></li></ul></nav>
        <nav className="footer-column" aria-label="Service links"><h2>Services</h2><ul className="footer-list"><li><Link to="/services/custom-software-development-ghana" className="footer-link">Custom software</Link></li><li><Link to="/services/mobile-app-development-ghana" className="footer-link">Mobile applications</Link></li><li><Link to="/services" className="footer-link">Cloud & DevOps</Link></li><li><Link to="/services" className="footer-link">Data analytics</Link></li><li><Link to="/services" className="footer-link">Enterprise networking</Link></li></ul></nav>
        <nav className="footer-column" aria-label="Solution links"><h2>Solutions</h2><ul className="footer-list"><li><Link to="/products/school-management-system-ghana" className="footer-link">School management</Link></li><li><Link to="/products" className="footer-link">POS & inventory</Link></li><li><Link to="/products" className="footer-link">ERP & CRM</Link></li><li><Link to="/products" className="footer-link">E-commerce platforms</Link></li></ul></nav>
      </div>
      <div className="container footer-bottom"><p>&copy; {new Date().getFullYear()} Nexoratel Technologies. All rights reserved.</p><div className="footer-legal"><Link to="/terms" className="footer-link">Terms</Link><Link to="/aml-policy" className="footer-link">AML</Link><Link to="/accessibility" className="footer-link">Accessibility</Link><Link to="/cookie-policy" className="footer-link">Cookies</Link><button type="button" onClick={openCookieSettings} className="footer-link">Cookie settings</button></div></div>
    </footer>
  );
}
