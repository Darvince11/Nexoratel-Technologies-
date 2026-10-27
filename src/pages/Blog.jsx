import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import './Blog.css';
import { POSTS } from '../data/blogPosts';

const CATEGORIES = ['All', ...new Set(POSTS.map((post) => post.category))];

function BlogIndex() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const featured = POSTS[0];
  const filteredPosts = useMemo(() => {
    const term = query.trim().toLowerCase();
    return POSTS.filter((post) => (category === 'All' || post.category === category) && (!term || `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(term)));
  }, [category, query]);

  return <>
    <section className="blog-hero">
      <img src="/blog-engineering-team.png" alt="Nexoratel engineers reviewing a secure cloud architecture" />
      <div className="blog-hero-overlay" />
      <div className="container blog-hero-content"><span className="blog-eyebrow">Nexoratel Insights</span><h1>Ideas for building better digital systems.</h1><p>Practical perspectives on software engineering, cloud, cybersecurity, mobile products, and technology strategy from our teams.</p></div>
    </section>
    <section className="container blog-section">
      <div className="blog-feature-row"><div><span className="blog-eyebrow">Featured</span><h2>Latest from our team</h2></div><Link to={`/blog/${featured.slug}`} className="blog-featured">{featured.cover && <img className="blog-featured-image" src={featured.cover} alt="" />}<span>{featured.category}</span><h3>{featured.title}</h3><p>{featured.excerpt}</p><small>{featured.date} / {featured.read}</small></Link></div>
      <div className="blog-toolbar" aria-label="Filter articles"><div className="blog-categories">{CATEGORIES.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="blog-search"><span className="sr-only">Search articles</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search insights" /></label></div>
      {filteredPosts.length ? <div className="blog-grid">{filteredPosts.map((post) => <article key={post.slug} className="blog-card"><div className="blog-card-meta"><span>{post.category}</span><time dateTime={post.isoDate}>{post.date}</time></div><h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><div className="blog-card-footer"><span>{post.read}</span><Link to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>Read article <span aria-hidden="true">-&gt;</span></Link></div></article>)}</div> : <div className="blog-empty"><h2>No articles found</h2><p>Try another category or search term.</p></div>}
    </section>
    <section className="blog-cta-band"><div className="container blog-cta-inner"><div><span className="blog-eyebrow">Build with us</span><h2>Turn an idea into a reliable digital product.</h2></div><Link to="/contact" className="btn-solid-blue">Start a conversation</Link></div></section>
  </>;
}

function BlogArticle({ post }) {
  const relatedPosts = POSTS.filter((item) => item.slug !== post.slug).slice(0, 2);
  return <article className="blog-article">
    <header className="blog-article-header"><div className="container"><Link to="/blog" className="blog-back">&lt;- All insights</Link><span className="blog-eyebrow">{post.category}</span><h1>{post.title}</h1><p>{post.excerpt}</p><div className="blog-byline"><strong>{post.author}</strong><span>{post.role}</span><time dateTime={post.isoDate}>{post.date}</time><span>{post.read}</span></div></div></header>
    {post.cover && <div className="container blog-cover"><img src={post.cover} alt={post.coverAlt || 'A Ghanaian business owner reviewing a professionally designed website'} /></div>}
    <div className="container blog-article-layout"><div className="blog-article-copy">
      {(post.intro || post.content).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {post.sections?.map((section) => <section className="blog-copy-section" key={section.title}>
        <h2>{section.title}</h2>
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.subsections?.map(([title, paragraph]) => <div className="blog-copy-subsection" key={title}><h3>{title}</h3><p>{paragraph}</p></div>)}
        {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
        {section.closing && <p>{section.closing}</p>}
      </section>)}
      <div className="blog-article-cta"><h2>{post.ctaTitle || (post.slug === 'how-much-does-a-website-cost-in-ghana' ? 'Ready to build your website?' : 'Planning a system like this?')}</h2><p>{post.ctaText || (post.slug === 'how-much-does-a-website-cost-in-ghana' ? 'Tell us what you want your website to achieve. Website development starts from GH₵2,000, and we will prepare a quotation around your requirements.' : 'Our engineering team can help you assess the architecture, delivery plan, and operational risks.')}</p><div className="blog-cta-actions">{post.ctaService && <Link to={post.ctaService} className="btn-outline-blue">Explore the service</Link>}<Link to="/contact" className="btn-solid-blue">Discuss your project</Link></div></div>
    </div><aside className="blog-related" aria-label="Related insights"><h2>Continue reading</h2>{relatedPosts.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`}><span>{item.category}</span><strong>{item.title}</strong><small>{item.read}</small></Link>)}</aside></div>
  </article>;
}

export default function Blog() {
  const { slug } = useParams();
  const post = slug ? POSTS.find((item) => item.slug === slug) : null;
  if (slug && !post) return <main className="blog-not-found"><h1>Article not found</h1><p>The insight you requested may have moved or is no longer available.</p><Link to="/blog" className="btn-solid-blue">Browse insights</Link></main>;
  return <main className="blog-page">{post ? <BlogArticle post={post} /> : <BlogIndex />}</main>;
}
