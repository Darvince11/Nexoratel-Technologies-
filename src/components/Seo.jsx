import { useEffect } from 'react';

const SITE_URL = 'https://nexorateltechnologies.com';
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;

const ensureMeta = (selector, attribute, name) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  return element;
};

export default function Seo({ title, description, path, schema, noindex = false }) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '' : path}`;
    document.title = title;
    ensureMeta('meta[name="description"]', 'name', 'description').content = description;
    ensureMeta('meta[name="robots"]', 'name', 'robots').content = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large';

    const socialTags = [
      ['property', 'og:type', 'website'],
      ['property', 'og:site_name', 'Nexoratel Technologies'],
      ['property', 'og:title', title],
      ['property', 'og:description', description],
      ['property', 'og:url', url],
      ['property', 'og:image', DEFAULT_IMAGE],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', title],
      ['name', 'twitter:description', description],
      ['name', 'twitter:image', DEFAULT_IMAGE],
    ];
    socialTags.forEach(([attribute, name, content]) => {
      ensureMeta(`meta[${attribute}="${name}"]`, attribute, name).content = content;
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const oldSchema = document.getElementById('route-schema');
    if (oldSchema) oldSchema.remove();
    if (schema) {
      const script = document.createElement('script');
      script.id = 'route-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [description, noindex, path, schema, title]);

  return null;
}

export { SITE_URL };
