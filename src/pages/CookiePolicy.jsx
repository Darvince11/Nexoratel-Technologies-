import './PolicyPage.css';

export default function CookiePolicy() {
  const openSettings = () => window.dispatchEvent(new Event('nexoratel:open-cookie-settings'));
  return <main className="policy-page">
    <header className="policy-header"><div className="container"><span>Privacy & control</span><h1>Cookie Policy</h1><p>How Nexoratel Technologies uses cookies and browser storage, and how you can control them.</p></div></header>
    <article className="container policy-content">
      <p className="policy-updated">Last updated: September 9, 2026</p>
      <h2>What cookies are</h2><p>Cookies are small text files stored by your browser. Similar technologies, including local storage, can remember settings or help a website understand how it is used. This policy refers to these technologies collectively as cookies.</p>
      <h2>How we use cookies</h2><div className="policy-table-wrap"><table><thead><tr><th>Category</th><th>Purpose</th><th>Choice</th></tr></thead><tbody><tr><td>Essential</td><td>Remember privacy preferences, support core functions, and protect forms from automated abuse through Cloudflare Turnstile.</td><td>Always active</td></tr><tr><td>Analytics</td><td>Google Analytics measures page visits and successful inquiry events so we can improve content and performance. We do not send contact-form details to Google.</td><td>Optional</td></tr><tr><td>Marketing</td><td>Measure campaigns and support relevant communications where such tools are enabled.</td><td>Optional</td></tr></tbody></table></div>
      <p>We do not activate optional categories through this consent system unless you allow them. The current website stores your cookie choices in local storage so we do not ask on every visit.</p>
      <h2>Your choices</h2><p>You can accept all optional cookies, reject them, or select categories separately. You can change your selection at any time using the button below. Changing your choice applies to future use; you may also delete existing browser data through your browser settings.</p><button className="policy-settings-button" onClick={openSettings}>Manage cookie settings</button>
      <h2>Personal information</h2><p>Information that you intentionally submit through a contact form is used to respond to your request. Cookie consent does not authorize us to collect contact details automatically.</p>
      <h2>Policy changes</h2><p>We may update this policy when our website or service providers change. The date at the top shows the latest revision.</p>
      <h2>Contact us</h2><p>Questions about this policy can be sent to <a href="mailto:info@nexorateltechnologies.com">info@nexorateltechnologies.com</a>.</p>
    </article>
  </main>;
}
