# Nexoratel Technologies

React/Vite website with an Express production server for Hostinger. The server serves the built frontend, handles client-side route refreshes, sends contact email, and proxies AI chat requests without exposing credentials to the browser.

## Local development

Requirements: Node.js 22.22 or newer and npm.

```bash
npm install
npm run dev
```

To test the production server:

```bash
npm run build
npm start
```

The production server uses `PORT` when supplied by Hostinger and otherwise listens on port 3000.

## Environment variables

Copy `.env.example` to `.env.local` for local use. In production, add the values in Hostinger hPanel instead of uploading an environment file.

| Variable | Purpose |
| --- | --- |
| `SMTP_USER` | Gmail address used to send contact messages |
| `SMTP_PASS` | Google app password, not the normal Gmail password |
| `CONTACT_TO` | Optional destination inbox; defaults to `SMTP_USER` |
| `GROQ_API_KEY` | Server-side key used by the website assistant |
| `GROQ_MODEL` | Optional Groq model override; defaults to `openai/gpt-oss-120b` |
| `TURNSTILE_SECRET_KEY` | Private Cloudflare Turnstile key used to verify contact submissions |
| `PORT` | Supplied automatically by Hostinger |

Do not prefix secrets with `VITE_`; Vite variables are embedded into public browser code.

## Deploy to Hostinger

Use Hostinger's **Node.js Web App** deployment, not a raw source upload to `public_html`. The repository's root `index.html` is Vite source and points at `/src/main.jsx`; serving it directly produces a blank page. Hostinger must run the build and serve the generated `dist` directory. A static deployment of `dist` can display the pages, but `/api/contact` and `/api/chat` will not work.

1. Push this repository to a private GitHub repository. `.env.local`, `node_modules`, and `dist` are already ignored.
2. In hPanel, open **Websites → Add website → Node.js Web App**.
3. Choose the purchased domain and select **Import Git repository**.
4. Connect GitHub, then select the repository and production branch, normally `main`.
5. Confirm these build settings:
   - Node.js version: 22.22 or newer
   - Install command: `npm install` or `npm ci`
   - Build command: `npm run build` (the `prestart` script also builds automatically)
   - Start command: `npm start`
   - Output directory: `dist` if Hostinger asks for it
6. Add `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`, `GROQ_API_KEY`, and `TURNSTILE_SECRET_KEY` under server environment variables.
7. Deploy and wait for the build to finish.
8. Enable SSL for the domain in hPanel and turn on **Force HTTPS**.

After deployment, verify:

- `/api/health` returns `{ "status": "ok" }`.
- Refreshing `/services`, `/products`, and `/contact` does not produce a 404.
- A contact submission reaches both the company inbox and the sender.
- The assistant returns a response.
- `https://` works without certificate warnings.

Future pushes to the connected branch should trigger a new deployment automatically.

### Static-host fallback

If the hosting plan does not support Node.js applications, run `npm ci && npm run build` locally and upload **the contents of `dist`** (not the project folder) into `public_html`. The build includes an Apache `.htaccess` fallback so refreshed React routes continue to work. Contact and chat APIs require the Node.js deployment and will remain unavailable on a static-only plan.
