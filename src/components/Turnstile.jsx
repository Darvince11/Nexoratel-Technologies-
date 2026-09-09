import { useEffect, useRef } from 'react';

const SITE_KEY = '0x4AAAAAAEtzBp54BgeNsCiw';
const SCRIPT_ID = 'cloudflare-turnstile-script';

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  return new Promise((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID);
    const onLoad = () => resolve(window.turnstile);
    if (existing) {
      existing.addEventListener('load', onLoad, { once: true });
      existing.addEventListener('error', reject, { once: true });
      return;
    }
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = onLoad;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function Turnstile({ onToken, resetSignal = 0 }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let active = true;
    loadTurnstile().then((turnstile) => {
      if (!active || !containerRef.current || widgetIdRef.current !== null) return;
      widgetIdRef.current = turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        action: 'contact',
        theme: 'light',
        size: 'flexible',
        callback: (token) => onToken(token),
        'expired-callback': () => onToken(''),
        'error-callback': () => onToken(''),
      });
    }).catch(() => onToken(''));
    return () => {
      active = false;
      if (widgetIdRef.current !== null && window.turnstile) window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, [onToken]);

  useEffect(() => {
    if (resetSignal > 0 && widgetIdRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      onToken('');
    }
  }, [onToken, resetSignal]);

  return <div className="turnstile-field"><div ref={containerRef} /><p>Protected by Cloudflare Turnstile</p></div>;
}
