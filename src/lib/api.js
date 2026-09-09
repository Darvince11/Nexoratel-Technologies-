const configuredApiBase = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, '');

const apiBase = configuredApiBase
  || (import.meta.env.PROD ? 'https://api.nexorateltechnologies.com' : '');

export const apiUrl = (path) => `${apiBase}${path}`;
