import { useState, useEffect } from 'react';

const POSTS = [
  { 
    slug: "future-of-cloud-architecture-2026",
    title: "The Future of Cloud Architecture in 2026", 
    date: "June 12, 2026", 
    read: "5 min read", 
    excerpt: "Exploring serverless scaling trends, multi-cloud resilience, and cost optimization strategies for modern enterprises.",
    author: "Daniel Baisel, Lead Cloud Architect",
    content: [
      "Cloud architecture has evolved rapidly, moving away from monolithic server instances toward highly distributed, serverless ecosystems. In 2026, enterprises are no longer just asking 'Is it in the cloud?' but rather 'How optimized, resilient, and multi-cloud agnostic is our infrastructure?'",
      "Serverless scaling trends have eliminated traditional idle resource costs, allowing applications to scale instantly from zero to millions of requests. However, managing state and reducing cold starts require sophisticated edge computing strategies.",
      "Furthermore, multi-cloud resilience has become standard practice for mission-critical platforms, preventing vendor lock-in and ensuring uninterrupted business continuity even in the event of major regional data center outages."
    ]
  },
  { 
    slug: "securing-enterprise-apis-against-advanced-threats",
    title: "Securing Enterprise APIs Against Advanced Threats", 
    date: "May 28, 2026", 
    read: "7 min read", 
    excerpt: "A deep dive into zero-trust security models, JWT authentication token hygiene, and automated vulnerability testing.",
    author: "Security Engineering Team",
    content: [
      "As microservices architectures proliferate, the attack surface expands exponentially. Securing enterprise APIs demands a shift toward zero-trust security models, where no request is trusted by default.",
      "JWT (JSON Web Token) authentication token hygiene is critical. Implementing short-lived access tokens alongside robust refresh token rotation mechanisms prevents session hijacking and token replay vulnerabilities.",
      "Finally, integrating automated vulnerability testing and dynamic application security testing (DAST) directly into CI/CD pipelines ensures that security flaws are caught and patched before code ever reaches production environments."
    ]
  },
  { 
    slug: "cross-platform-mobile-app-performance-secrets",
    title: "Cross-Platform Mobile App Performance Secrets", 
    date: "May 14, 2026", 
    read: "4 min read", 
    excerpt: "How to optimize React Native and Flutter codebases for 60fps frame rates and native device responsiveness.",
    author: "Mobile Development Practice",
    content: [
      "Cross-platform frameworks like React Native and Flutter have matured significantly, enabling developers to ship feature-rich apps for both iOS and Android from a single codebase. Yet, achieving buttery-smooth 60fps animations requires careful optimization.",
      "The key secret lies in keeping the JavaScript/Dart bridge lightweight, offloading heavy computations to native modules or background isolates, and minimizing unnecessary component re-renders.",
      "Memory management, efficient list virtualization for long data feeds, and optimized image caching round out the foundational pillars for building cross-platform apps that feel indistinguishable from native builds."
    ]
  }
];

export default function Blog() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    document.title = "Engineering Blog & Insights | Nexoratel Technologies";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Read expert articles on software engineering, cloud architecture, cybersecurity, and mobile app development by Nexoratel Technologies.";
  }, []);

  const activePost = POSTS.find(p => p.slug === selectedSlug);

  return (
    <main style={{ paddingBottom: '90px', overflowX: 'hidden' }}>
      <style>{`
        @keyframes seriousSlideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(1.08); }
        }
        .anim-slide-1 { animation: seriousSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .anim-slide-2 { opacity: 0; animation: seriousSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; }
        .floating-orb-custom { animation: orbFloat 7s ease-in-out infinite; }

        @media (max-width: 640px) {
          .responsive-blog-title { font-size: 2.3rem !important; }
        }
      `}</style>

      {/* Hero Header with Vibrant Blue Gradient & Rounded Edges */}
      <section style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative', 
        paddingTop: '140px', 
        paddingBottom: '90px', 
        overflow: 'hidden',
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        background: 'linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%)',
        boxShadow: '0 25px 50px rgba(14, 165, 233, 0.25)',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <div className="glow-orb blue floating-orb-custom" style={{ top: '10%', right: '10%', opacity: 0.3 }}></div>
        
        <div className="container anim-slide-1" style={{ maxWidth: '900px', zIndex: 2 }}>
          <span style={{ color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Expert Insights</span>
          <h1 className="responsive-blog-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '10px', marginBottom: '24px', lineHeight: 1.1, color: '#ffffff' }}>
            Engineering <span style={{ color: '#e0f2fe' }}>Blog.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#f8fafc', lineHeight: '1.7' }}>
            Thoughts, architectural breakdowns, and technological updates straight from our senior software engineering consultants.
          </p>
        </div>
      </section>
      
      {activePost ? (
        <div className="container anim-slide-1" style={{ maxWidth: '900px', marginTop: '60px' }}>
          <button 
            onClick={() => setSelectedSlug(null)} 
            style={{ background: 'transparent', border: 'none', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ← Back to All Articles
          </button>
          
          <div className="modern-card" style={{ padding: '50px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--brand-blue)' }}></div>
            
            <div style={{ display: 'flex', gap: '15px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '15px', fontWeight: 600 }}>
              <span>{activePost.date}</span> • <span>{activePost.read}</span> • <span style={{ color: 'var(--brand-blue)' }}>{activePost.author}</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '30px', color: 'var(--text-main)', lineHeight: '1.2' }}>
              {activePost.title}
            </h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {activePost.content.map((paragraph, i) => (
                <p key={i} style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div style={{ background: 'var(--brand-blue-dim)', padding: '24px', borderRadius: '14px', border: '1px solid rgba(42, 183, 234, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>Liked this architectural breakdown?</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Discuss your upcoming enterprise software project with our consultants.</p>
              </div>
              <button 
                className="btn-solid-blue" 
                onClick={() => window.location.href = '/contact'}
                style={{ padding: '12px 24px', fontSize: '0.8rem' }}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      ) : (
        <section className="container anim-slide-2" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="grid-3">
            {POSTS.map((post, idx) => (
              <article key={idx} className="modern-card" style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--brand-blue)', opacity: 0.8 }}></div>
                <div>
                  <div style={{ display: 'flex', gap: '15px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '15px', fontWeight: 600 }}>
                    <span>{post.date}</span> • <span>{post.read}</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', lineHeight: '1.3', color: 'var(--text-main)' }}>{post.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem', marginBottom: '25px' }}>{post.excerpt}</p>
                </div>
                <button 
                  onClick={() => { setSelectedSlug(post.slug); window.scrollTo(0, 0); }}
                  style={{ background: 'transparent', border: 'none', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textAlign: 'left' }}>
                  Read Article →
                </button>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}