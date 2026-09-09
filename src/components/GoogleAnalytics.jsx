import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const MEASUREMENT_ID = 'G-QJJCTTMKT8';
const CONSENT_KEY = 'nexoratel-cookie-consent';
const SCRIPT_ID = 'google-analytics-script';

function hasAnalyticsConsent() {
  try { return JSON.parse(localStorage.getItem(CONSENT_KEY))?.analytics === true; }
  catch { return false; }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
}

function initializeAnalytics() {
  ensureGtag();
  window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, { send_page_view: false });
  }
}

function clearAnalyticsCookies() {
  const names = document.cookie.split(';').map((item) => item.split('=')[0].trim()).filter((name) => name === '_ga' || name.startsWith('_ga_'));
  const domains = ['', `domain=${window.location.hostname};`, window.location.hostname.includes('.') ? `domain=.${window.location.hostname};` : ''];
  names.forEach((name) => domains.forEach((domain) => { document.cookie = `${name}=; Max-Age=0; path=/; ${domain} SameSite=Lax`; }));
}

export function trackAnalyticsEvent(name, parameters = {}) {
  if (!hasAnalyticsConsent() || typeof window.gtag !== 'function') return;
  window.gtag('event', name, parameters);
}

export default function GoogleAnalytics() {
  const { pathname, search } = useLocation();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const applyConsent = (allowed) => {
      if (allowed) { initializeAnalytics(); setEnabled(true); }
      else { if (typeof window.gtag === 'function') window.gtag('consent', 'update', { analytics_storage: 'denied' }); clearAnalyticsCookies(); setEnabled(false); }
    };
    applyConsent(hasAnalyticsConsent());
    const onConsent = (event) => applyConsent(event.detail?.analytics === true);
    window.addEventListener('nexoratel:consent', onConsent);
    return () => window.removeEventListener('nexoratel:consent', onConsent);
  }, []);

  useEffect(() => {
    if (!enabled || typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', { page_title: document.title, page_location: window.location.href, page_path: `${pathname}${search}` });
  }, [enabled, pathname, search]);

  return null;
}
