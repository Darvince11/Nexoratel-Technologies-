import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import './Blog.css';

const POSTS = [
  {
    slug: 'software-development-company-ghana',
    category: 'Software Development',
    title: 'Software Development Company in Ghana: How to Choose the Right Team',
    date: 'September 9, 2026',
    isoDate: '2026-09-09',
    read: '11 min read',
    author: 'Nexoratel Editorial Team',
    role: 'Software Engineering',
    cover: '/blog-software-development-company-ghana.png',
    coverAlt: 'A Ghanaian software development team reviewing a business operations platform in Accra',
    excerpt: 'Learn how to choose a software development company in Ghana and when custom software, workflow automation, or a business platform is the right investment.',
    intro: [
      'Businesses in Ghana are increasingly using technology to simplify operations, reduce repetitive work, manage information, and serve customers more efficiently. However, finding the right software development company in Ghana can be difficult, especially when your business needs something more specific than an existing off-the-shelf application.',
      'This is where custom software development becomes important.',
      'At Nexoratel Technologies, we help businesses turn ideas, operational challenges, and manual processes into practical digital solutions. From business management systems and web applications to automation solutions and custom platforms, our focus is on building technology around the actual needs of the business.',
      'Before choosing a software developer, it is important to understand what custom software is, when your business needs it, and what you should expect from a professional development company.',
    ],
    sections: [
      {
        title: 'What Is Custom Software Development?',
        paragraphs: [
          'Custom software development is the process of designing and building software specifically around the requirements of a particular business or organization.',
          'Think about a company currently managing its operations using Excel spreadsheets, notebooks, WhatsApp messages, and several disconnected applications. Employees may have to enter the same information multiple times, prepare reports manually, or move information from one system to another.',
          'Instead of forcing the company to change its entire operation to fit an existing application, custom software can be developed around its workflow. A business may need one system to manage:',
        ],
        bullets: ['Sales', 'Inventory', 'Employees', 'Customers', 'Suppliers', 'Expenses', 'Reports', 'Multiple branches', 'User permissions', 'Business analytics'],
        closing: 'The software is designed according to what that particular business needs. This is the central value of custom software development in Ghana: the technology follows the operation rather than forcing the operation into a generic template.',
      },
      {
        title: 'Why Are Ghanaian Businesses Investing in Custom Software?',
        paragraphs: ['As businesses grow, manual processes become increasingly difficult to manage. Something that works perfectly when a company has three employees may become inefficient when it has 30 employees, multiple departments, or several branches. Common problems include:'],
        subsections: [
          ['Repetitive data entry', 'Employees spend valuable time entering the same information into different spreadsheets or systems.'],
          ['Poor visibility', 'Management cannot easily see what is happening across the business without requesting reports from different employees.'],
          ['Manual reporting', 'Staff spend hours preparing daily, weekly, or monthly reports that software could generate automatically.'],
          ['Disconnected systems', 'Sales information may be stored in one application, inventory in another, and financial records somewhere else.'],
          ['Human errors', 'Repeated manual calculations and data entry increase the possibility of mistakes.'],
          ['Difficulty managing growth', 'Processes that worked for a small startup may become bottlenecks as the company expands.'],
        ],
        closing: 'Custom business software can help bring these processes together, giving teams a clearer and more reliable way to work.',
      },
      {
        title: 'What Can a Software Development Company Build?',
        paragraphs: ['A professional software development company in Ghana can develop different types of solutions depending on the business problem. At Nexoratel Technologies, projects can include solutions such as:'],
        subsections: [
          ['Business management systems', 'A centralized system can help management oversee sales, inventory, employees, expenses, customers, suppliers, and reporting from one place.'],
          ['Inventory management systems', 'Businesses can track stock received, stock sold, stock remaining, transfers, low-stock products, product performance, and inventory movements without depending entirely on spreadsheets or manual counts.'],
          ['Point-of-sale systems', 'Retail businesses can process sales while automatically updating inventory and producing reports. More advanced systems can support multiple branches, employee permissions, different payment methods, and business analytics.'],
          ['Workflow automation', 'Business automation in Ghana can reduce repetitive data entry, report generation, customer notifications, invoice generation, status updates, reminders, and document processing.'],
          ['Web applications', 'Unlike a traditional informational website, a web application lets users complete specific tasks. Examples include customer portals, booking platforms, dashboards, management systems, membership platforms, and online service platforms.'],
          ['SaaS platforms', 'A business with a strong software idea can build a subscription platform, with careful planning for users, billing, security, performance, data management, and scalability.'],
          ['Internal business systems', 'Private systems can support employee and management workflows such as approvals, reporting, documents, and operational processes.'],
        ],
      },
      {
        title: 'Custom Software vs Ready-Made Software',
        paragraphs: [
          'Should your business build its own software or buy an existing solution? Neither option is automatically better.',
          'Ready-made software can be a good choice when your requirements are common and an existing product already solves the problem effectively. Custom software becomes more useful when your workflow, requirements, or business model cannot be handled properly by existing software.',
        ],
        subsections: [
          ['Ready-made software may be better when:', 'You need something immediately, your requirements are standard, an affordable existing solution already meets your needs, and you do not require extensive customization.'],
          ['Custom software may be better when:', 'Your business has unique processes, existing tools create inefficient workflows, employees depend on manual work, systems are disconnected, integrations are required, or you are building a unique digital product.'],
        ],
        closing: 'A responsible software company in Ghana should help you determine whether custom development is actually necessary instead of recommending it for every problem.',
      },
      {
        title: 'How to Choose a Software Development Company in Ghana',
        paragraphs: ['Choosing developers should involve more than comparing quotations. Software may become a critical part of your business, so the team needs to understand both technology and the problem the technology is supposed to solve.'],
        subsections: [
          ['1. Do they understand your business problem?', 'A good team asks who will use the system, how work is currently done, what causes delays, what data and reports are required, and which employees should access each function before discussing programming languages.'],
          ['2. Do they plan before coding?', 'Professional delivery can involve requirement gathering, system analysis, user flows, database planning, interface design, architecture, security planning, development, testing, deployment, and maintenance. Skipping this work can cause expensive changes later.'],
          ['3. Do they consider security?', 'Business systems can contain sensitive information. Authentication, authorization, secure data handling, access controls, backups, logging, and protection from common web vulnerabilities should be planned throughout development.'],
          ['4. Can the software grow with your business?', 'A company may have one location today and several branches later. Sensible architecture should support reasonable growth without making a small first release unnecessarily complicated.'],
          ['5. What happens after development?', 'Ask about technical support, bug fixes, updates, hosting, backups, security maintenance, new features, and performance monitoring. Software requires maintenance as business requirements and technologies change.'],
        ],
      },
      {
        title: 'Software Developers in Accra: Local Team or Overseas Developers?',
        paragraphs: [
          'Businesses can hire developers from almost anywhere. However, working with software developers in Accra or a Ghana-based development company can offer useful local context.',
          'A local team is more likely to understand Mobile Money, local payment behaviour, Ghanaian business processes, customer expectations, communication needs, and Ghana-specific operational challenges. Direct communication can also make requirement gathering and support easier.',
          'Location should not replace evidence of technical competence. The most important consideration remains the team’s ability to understand the problem and deliver a reliable solution.',
        ],
      },
      {
        title: 'How Much Does Custom Software Development Cost in Ghana?',
        paragraphs: [
          'There is no universal price for custom software. A basic internal application and a large multi-branch enterprise platform require completely different levels of development.',
          'The final custom software development cost in Ghana can depend on:',
        ],
        bullets: ['Number of features', 'Number of user roles', 'Project complexity', 'Mobile or web requirements', 'Third-party and payment integrations', 'Reporting requirements', 'Security requirements', 'Number of platforms', 'Hosting infrastructure', 'Development time', 'Maintenance and support'],
        closing: 'Nexoratel Technologies evaluates the requirements of each project before providing a quotation. This allows the price to reflect what actually needs to be built rather than giving clients a misleading one-size-fits-all figure.',
      },
      {
        title: '7 Signs Your Business May Need Custom Software',
        paragraphs: ['Your business may have reached the point where custom development is worth considering if:'],
        bullets: ['Your employees repeatedly enter the same information.', 'Important business information is scattered across multiple spreadsheets.', 'Preparing reports takes hours or days.', 'Your existing software cannot support an important business process.', 'You cannot easily see what is happening across departments or branches.', 'Employees spend too much time on repetitive administrative tasks.', 'Your business has a digital product idea that existing software cannot provide.'],
        closing: 'If several of these problems sound familiar, the issue may not be your employees. Your business processes may simply need better technology.',
      },
      {
        title: 'Why Businesses Choose Nexoratel Technologies',
        paragraphs: [
          'At Nexoratel Technologies, we believe software should solve real problems. We do not approach development as simply writing code. We first seek to understand the business, users, existing process, and problem that needs to be solved.',
          'Our custom software development Ghana services support business management systems, web applications, business automation, inventory and operational systems, SaaS platforms, secure digital solutions, and system integrations.',
          'Whether you are a startup turning an idea into a digital product or an established organization improving an inefficient process, the objective remains the same: build technology that makes the business work better.',
        ],
      },
      {
        title: 'Looking for a Software Development Company in Ghana?',
        paragraphs: [
          'If your business is struggling with manual processes, disconnected systems, or software that no longer meets your needs, it may be time to consider a solution built around your operations.',
          'Nexoratel Technologies provides custom software development services for businesses and organizations in Ghana. Tell us about the problem you are trying to solve, how your current process works, and what you want to improve.',
          'Our team can help you determine the right approach before development begins, whether you need a business management system, web application, automation solution, or completely custom platform.',
        ],
      },
    ],
    ctaTitle: 'Let’s turn your idea into a digital solution',
    ctaText: 'Explore how we plan and build custom business software, or tell us about the operational problem you need to solve.',
    ctaService: '/services/custom-software-development-ghana',
  },
  {
    slug: 'how-much-does-a-website-cost-in-ghana',
    category: 'Website Development',
    title: 'How Much Does a Website Cost in Ghana? Website Design Prices in 2026',
    date: 'September 9, 2026',
    isoDate: '2026-09-09',
    read: '9 min read',
    author: 'Nexoratel Editorial Team',
    role: 'Website Development',
    cover: '/blog-website-cost-ghana-2026.png',
    excerpt: 'Website development in Ghana can start from GH₵2,000, but the final price depends on pages, design, functionality, integrations, and the results your business needs.',
    intro: [
      'If you are planning to build a website for your business, one of the first questions you are likely to ask is: how much does a website cost in Ghana?',
      'The answer depends on the type of website you need, the number of pages, features, design requirements, and complexity of the project. At Nexoratel Technologies, professional website development starts from GH₵2,000, making it possible for startups, entrepreneurs, and established businesses to build a professional online presence without spending unnecessarily.',
      'Price should not be the only consideration when choosing someone to build your website. Your website represents your business online, so it should be fast, secure, mobile-friendly, and designed to help potential customers understand what you offer and contact you easily.',
    ],
    sections: [
      {
        title: 'How Much Does Website Design Cost in Ghana?',
        paragraphs: [
          'There is no single fixed website design price in Ghana because websites serve different purposes. A simple business website requires fewer features than an e-commerce website where customers create accounts, add products to a cart, and make payments online.',
          'When comparing website design prices in Ghana or researching website development in Ghana, make sure each quotation covers the same pages, functionality, performance, security, and support expectations.',
          'At Nexoratel Technologies, our website development packages start from GH₵2,000. The final cost is determined after understanding what the client wants to achieve and the features required to make it possible.',
          'Instead of adding unnecessary features that increase development costs, we focus on building a solution that fits the actual needs of the business.',
        ],
      },
      {
        title: 'What Can You Get With a GH₵2,000 Starting Budget?',
        paragraphs: ['Our starting package is designed for businesses that need a professional online presence without the complexity of a large web application. Depending on the project requirements, a business website may include:'],
        bullets: ['Modern and professional website design', 'Mobile-responsive pages', 'Home, About, Services, and Contact pages', 'Contact or enquiry forms', 'WhatsApp and social media integration', 'Basic search engine optimization', 'Fast-loading pages and security best practices', 'A Google-friendly website structure'],
        closing: 'Additional functionality can be included depending on what your business needs. The objective is not simply to put pages on the internet; it is to represent your business properly and make it easier for potential customers to discover, understand, and contact you.',
      },
      {
        title: 'What Determines Website Development Cost in Ghana?',
        paragraphs: ['Several factors influence how much you will eventually pay for website development.'],
        subsections: [
          ['1. Type of website', 'A basic company website generally costs less than an e-commerce platform, booking system, customer portal, or custom web application. Business websites present services and company information; e-commerce websites support products, carts, orders, and payments; portfolios showcase professional work; and custom applications can include accounts, dashboards, databases, reporting, automation, and integrations.'],
          ['2. Number of pages', 'A five-page website requires less content and development work than a site containing 30 or 50 pages. Common pages include Home, About Us, Services, Portfolio, Blog, Frequently Asked Questions, and Contact.'],
          ['3. Custom features', 'Online payments, Mobile Money, customer accounts, appointment booking, product management, advanced forms, dashboards, live chat, maps, APIs, and automated notifications all affect the website development cost.'],
          ['4. E-commerce functionality', 'An online store requires product management, a shopping cart, checkout, orders, inventory, and payment processing. Card and Mobile Money integrations can be included according to the project requirements.'],
          ['5. Search engine optimization', 'SEO improves the content, structure, and technical foundation of a website so search engines can understand its pages. A serious business website should consider discoverability from the beginning rather than treating it as an afterthought.'],
        ],
      },
      {
        title: 'Why Does One Developer Charge GH₵1,000 While Another Charges GH₵10,000?',
        paragraphs: [
          'You may receive completely different quotations for what appears to be the same website because you are not necessarily buying the same thing.',
          'Website development pricing can reflect experience, design quality, technology, number of pages, security, performance, SEO, custom functionality, integrations, testing, and support after launch.',
          'A cheaper quotation is not automatically a bad deal, just as an expensive quotation does not automatically guarantee a good website. The more useful question is: what exactly am I getting for this price?',
        ],
      },
      {
        title: 'Why Nexoratel Technologies Starts at GH₵2,000',
        paragraphs: [
          'Many Ghanaian startups and small businesses need professional websites while managing their expenses carefully. That is why Nexoratel Technologies offers professional website development starting from GH₵2,000.',
          'Our approach is simple: build what the business actually needs. A startup that needs a professional five-page website should not be forced to pay for complicated functionality it will never use.',
          'A growing company that needs online payments, automation, customer portals, or custom business functionality should have a website capable of supporting those requirements. Our solutions can grow according to the needs of the business.',
        ],
      },
      {
        title: 'A Cheap Website Can Become Expensive Later',
        paragraphs: ['Price matters, particularly for startups, but choosing a website based only on the lowest possible price can create problems later. A poorly developed website may suffer from:'],
        bullets: ['Slow loading speeds', 'A poor mobile experience', 'Broken pages and frequent technical errors', 'Security problems', 'Difficult content management', 'Poor Google visibility', 'Limited ability to add new features'],
        closing: 'Fixing or completely rebuilding such a website can eventually cost more than developing it properly from the beginning. Look for a reasonable balance between price, quality, and long-term value.',
      },
      {
        title: 'Does Every Business in Ghana Need a Website?',
        paragraphs: [
          'Not necessarily. But if potential customers search for your products or services online, having a professional website can significantly improve your digital presence.',
          'Social platforms such as Instagram, Facebook, TikTok, and LinkedIn are useful marketing channels, while your website gives your business its own permanent online platform. Customers can learn about your company, explore services, view previous work, read helpful information, and contact you.',
          'For businesses trying to establish credibility and attract customers online, a professional website can be an important investment.',
        ],
      },
      {
        title: 'Website vs Social Media: Why Have Both?',
        paragraphs: [
          'Social media is excellent for reaching and interacting with audiences. Your website gives you greater control over how your company, products, services, and information are presented.',
          'The strongest digital strategy often combines both. Someone may discover your company on Instagram, visit your website to learn more, check your services, and then contact you. Another customer may discover your website directly through Google.',
        ],
      },
      {
        title: 'How Much Should You Budget for Your Website?',
        paragraphs: ['Start by identifying what you actually need. Ask yourself:'],
        bullets: ['What should customers be able to do on the website?', 'How many pages do I need?', 'Will I sell products online?', 'Do I need Mobile Money or card payments?', 'Do customers need accounts or appointment booking?', 'Do I need a blog?', 'Do I want customers to find my business through Google?', 'Will the website connect with another business system?'],
        closing: 'Once these requirements are clear, it becomes much easier to determine the actual website development cost in Ghana.',
      },
      {
        title: 'Looking for Affordable Website Development in Ghana?',
        paragraphs: [
          'If you need a professional website for your startup, organization, or established business, Nexoratel Technologies can design and develop a solution that fits your requirements.',
          'When considering affordable website design in Ghana, choose a web development company in Ghana that explains what is included, how the website will support your goals, and what happens after launch.',
          'Our professional website development services start from GH₵2,000, with the final quotation depending on the size, functionality, and complexity of your project.',
          'Whether you need a simple company website, e-commerce platform, or more advanced web solution, our goal is to build something that supports your business rather than simply putting a few pages online.',
        ],
      },
    ],
  },
  {
    slug: 'future-of-cloud-architecture-2026', category: 'Cloud & DevOps', title: 'The Future of Cloud Architecture in 2026', date: 'June 12, 2026', isoDate: '2026-06-12', read: '5 min read', author: 'Daniel Baisel', role: 'Lead Cloud Architect',
    excerpt: 'How serverless platforms, multi-cloud resilience, and disciplined cost management are reshaping enterprise infrastructure.',
    content: [
      'Cloud architecture has evolved from a hosting decision into a core business capability. Modern teams are asking how quickly infrastructure can adapt, how well it survives regional failures, and whether its cost scales in step with customer demand.',
      'Serverless services can remove idle capacity and simplify operations, but they do not eliminate architectural work. Teams still need clear service boundaries, careful state management, observability, and strategies that keep cold starts away from critical user journeys.',
      'Multi-cloud resilience is valuable for selected mission-critical workloads, not as a default checkbox. The strongest architecture starts with business recovery objectives, maps real failure modes, and invests in portable data and deployment practices where the additional complexity is justified.',
      'For growing organizations, the practical goal is a cloud platform that is measurable, secure, and easy for delivery teams to use. Cost controls, automated policy checks, and reliable deployment pipelines should be designed alongside the application rather than added after launch.'
    ]
  },
  {
    slug: 'securing-enterprise-apis-against-advanced-threats', category: 'Cybersecurity', title: 'Securing Enterprise APIs Against Advanced Threats', date: 'May 28, 2026', isoDate: '2026-05-28', read: '7 min read', author: 'Nexoratel Security Team', role: 'Security Engineering',
    excerpt: 'A practical look at zero-trust access, token hygiene, abuse prevention, and continuous security testing for modern APIs.',
    content: [
      'As organizations break applications into services, every API becomes part of the security boundary. A zero-trust approach treats identity, authorization, device context, and request behavior as signals that must be verified continuously.',
      'Token design deserves particular care. Short-lived access tokens, secure refresh-token rotation, audience validation, and prompt revocation reduce the impact of credential theft without forcing users through constant sign-ins.',
      'Security also depends on controlling how an API is used. Rate limits, schema validation, idempotency controls, audit trails, and anomaly detection protect systems from both malicious traffic and accidental overload.',
      'Automated static, dependency, and dynamic testing should run throughout delivery, but tools cannot replace threat modeling. Teams need to identify sensitive data flows and likely abuse cases before an endpoint reaches production.'
    ]
  },
  {
    slug: 'cross-platform-mobile-app-performance-secrets', category: 'Mobile Engineering', title: 'Cross-Platform Mobile App Performance Secrets', date: 'May 14, 2026', isoDate: '2026-05-14', read: '4 min read', author: 'Nexoratel Mobile Team', role: 'Mobile Engineering',
    excerpt: 'Engineering practices that help React Native and Flutter applications stay responsive on real-world devices and networks.',
    content: [
      'Cross-platform frameworks can deliver excellent experiences on Android and iOS, but smooth performance comes from measurement rather than framework choice alone. Teams should profile startup time, frame rendering, memory use, and network behavior on representative devices.',
      'The most reliable gains come from keeping the main UI thread free. Expensive computation belongs in native modules, workers, or background isolates, while component trees should avoid unnecessary renders and oversized state updates.',
      'Long lists require virtualization, images need deliberate caching and resizing, and network requests should tolerate intermittent connectivity. These decisions matter especially in markets where users rely on mid-range devices and variable mobile networks.',
      'Performance budgets make these expectations testable. By tracking launch time, interaction latency, and application size in each release, teams can catch regressions before customers feel them.'
    ]
  }
];

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
