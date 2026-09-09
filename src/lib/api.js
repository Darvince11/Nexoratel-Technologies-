const configuredApiBase = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, '');

// Netlify and the Express deployment both expose API routes on the same origin.
// An external API host remains available as an explicit deployment override.
const apiBase = configuredApiBase || '';

export const apiUrl = (path) => `${apiBase}${path}`;
