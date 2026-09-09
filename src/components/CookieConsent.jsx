import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './CookieConsent.css';

const CONSENT_KEY = 'nexoratel-cookie-consent';

function saveConsent(preferences) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ ...preferences, updatedAt: new Date().toISOString() }));
  window.dispatchEvent(new CustomEvent('nexoratel:consent', { detail: preferences }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    setVisible(!stored);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences({ analytics: Boolean(parsed.analytics), marketing: Boolean(parsed.marketing) });
      } catch {
        localStorage.removeItem(CONSENT_KEY);
        setVisible(true);
      }
    }
    const reopen = () => { setCustomizing(true); setVisible(true); };
    window.addEventListener('nexoratel:open-cookie-settings', reopen);
    return () => window.removeEventListener('nexoratel:open-cookie-settings', reopen);
  }, []);

  const choose = (next) => {
    saveConsent(next);
    setPreferences(next);
    setVisible(false);
    setCustomizing(false);
  };

  if (!visible) return null;

  return <section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
    <div className="cookie-copy">
      <span>Privacy preferences</span>
      <h2 id="cookie-title">Your choices matter</h2>
      <p>We use essential browser storage to operate this website. With your permission, we may also use analytics and marketing cookies to understand visits and improve our services. <Link to="/cookie-policy">Read our Cookie Policy</Link>.</p>
      {customizing && <div className="cookie-options">
        <label><span><strong>Essential</strong><small>Required for consent and security preferences.</small></span><input type="checkbox" checked disabled /></label>
        <label><span><strong>Analytics</strong><small>Helps us understand how the website is used.</small></span><input type="checkbox" checked={preferences.analytics} onChange={(event) => setPreferences({ ...preferences, analytics: event.target.checked })} /></label>
        <label><span><strong>Marketing</strong><small>Supports relevant outreach and campaign measurement.</small></span><input type="checkbox" checked={preferences.marketing} onChange={(event) => setPreferences({ ...preferences, marketing: event.target.checked })} /></label>
      </div>}
    </div>
    <div className="cookie-actions">
      {customizing ? <button className="cookie-primary" onClick={() => choose(preferences)}>Save choices</button> : <button className="cookie-secondary" onClick={() => setCustomizing(true)}>Customize</button>}
      <button className="cookie-secondary" onClick={() => choose({ analytics: false, marketing: false })}>Reject optional</button>
      <button className="cookie-primary" onClick={() => choose({ analytics: true, marketing: true })}>Accept all</button>
    </div>
  </section>;
}
