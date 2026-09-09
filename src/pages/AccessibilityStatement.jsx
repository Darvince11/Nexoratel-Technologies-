import { Link } from 'react-router';
import './PolicyPage.css';

export default function AccessibilityStatement() {
  return <main className="policy-page">
    <header className="policy-header"><div className="container"><span>Inclusive access</span><h1>Accessibility Statement</h1><p>Our commitment to making Nexoratel Technologies accessible to as many people as possible.</p></div></header>
    <article className="container policy-content">
      <p className="policy-updated">Last updated: September 9, 2026</p>
      <h2>Our commitment</h2><p>Nexoratel Technologies is committed to providing a website that can be used by people with diverse abilities, technologies, and ways of interacting with digital content. We are working toward conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.</p>
      <h2>Measures we take</h2><ul><li>Use semantic headings, labels, landmarks, and meaningful link text.</li><li>Support keyboard navigation and visible focus indicators.</li><li>Provide text alternatives for meaningful images.</li><li>Maintain readable contrast and responsive layouts.</li><li>Respect reduced-motion preferences where animation is used.</li><li>Review new features for accessibility as the website evolves.</li></ul>
      <h2>Compatibility</h2><p>The website is designed for current versions of major browsers and works with standard assistive technologies supported by those browsers. Some older browsers may not provide the same experience.</p>
      <h2>Known limitations</h2><p>Some third-party services, embedded content, or older pages may not yet meet our accessibility target. We are working to identify and improve these areas. If a feature is inaccessible, contact us and we will make reasonable efforts to provide the information or service in another format.</p>
      <h2>Feedback and assistance</h2><p>If you experience an accessibility barrier, tell us which page or feature caused difficulty and what assistive technology or browser you were using, if you are comfortable sharing it.</p>
      <div className="policy-contact"><strong>Nexoratel Technologies</strong><a href="mailto:info@nexorateltechnologies.com">info@nexorateltechnologies.com</a><a href="tel:+233545059232">+233 54 505 9232</a><span>Tema Community 6, Ghana</span></div>
      <p>For general inquiries, you may also use our <Link to="/contact">contact page</Link>.</p>
    </article>
  </main>;
}
