import { Link } from 'react-router';

export default function NotFound() {
  return (
    <main className="container py-20 text-center" style={{ minHeight: '70vh', paddingTop: '180px' }}>
      <span style={{ color: 'var(--brand-blue)', fontWeight: 800 }}>404</span>
      <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '12px 0 20px' }}>Page not found</h1>
      <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.7 }}>
        The page may have moved or the address may be incorrect. Return to the homepage or explore our software engineering services.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <Link to="/" className="btn-solid-blue">Return home</Link>
        <Link to="/services" className="btn-outline-blue">Explore services</Link>
      </div>
    </main>
  );
}
