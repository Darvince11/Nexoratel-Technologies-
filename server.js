import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config({ path: '.env.local' });
dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;
const rootDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(rootDir, 'dist');

app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));
app.use((_, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  });
  next();
});

function createRateLimiter({ windowMs, limit }) {
  const clients = new Map();
  const cleanup = setInterval(() => {
    const now = Date.now();
    for (const [key, value] of clients) {
      if (value.resetAt <= now) clients.delete(key);
    }
  }, windowMs);
  cleanup.unref();
  return (req, res, next) => {
    const key = req.ip || 'unknown';
    const now = Date.now();
    const current = clients.get(key);
    if (!current || current.resetAt <= now) {
      clients.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }
    if (current.count >= limit) {
      res.set('Retry-After', String(Math.ceil((current.resetAt - now) / 1000)));
      return res.status(429).json({ error: 'Too many requests. Please try again shortly.' });
    }
    current.count += 1;
    return next();
  };
}

const contactLimiter = createRateLimiter({ windowMs: 15 * 60 * 1000, limit: 5 });
const chatLimiter = createRateLimiter({ windowMs: 5 * 60 * 1000, limit: 20 });
const cleanText = (value, maxLength) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;

app.post('/api/contact', contactLimiter, async (req, res) => {
  const name = cleanText(req.body?.name, 100);
  const email = cleanText(req.body?.email, 254);
  const phone = cleanText(req.body?.phone, 40);
  const message = cleanText(req.body?.message, 5000);
  if (!name || !isEmail(email) || !message) {
    return res.status(400).json({ error: 'Please provide a valid name, email address, and message.' });
  }
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Contact API: SMTP_USER or SMTP_PASS is missing.');
    return res.status(503).json({ error: 'The contact service is temporarily unavailable.' });
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  try {
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      text: `Client Name: ${name}\nClient Email: ${email}\nClient Phone: ${phone || 'Not provided'}\n\nProject Goals:\n${message}`,
    });
    await transporter.sendMail({
      from: `"Nexoratel Technologies" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'We received your inquiry — Nexoratel Technologies',
      text: `Hi ${name},\n\nThank you for reaching out. We have received your project inquiry and will review it within 24 hours.\n\nWarm regards,\nNexoratel Engineering Team`,
    });
    return res.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ error: 'We could not send your message. Please try again later.' });
  }
});

const systemPrompt = `You are the Nexoratel Technologies Assistant.
Answer questions about Nexoratel's software engineering, mobile development, DevOps, cloud computing, enterprise networking, data analytics, ERP/CRM, e-commerce, school management, and POS solutions.
Nexoratel is based in Tema Community 6, Ghana. Contact: nexorateltechnologies@gmail.com, +233554167271, or +233509782732.
Be welcoming, concise, and technically accurate. Do not use asterisks. For pricing or project requests, explain that solutions are tailored and direct the visitor to BOOK US or the project inquiry form. Do not claim capabilities or facts not listed here.`;

app.post('/api/chat', chatLimiter, async (req, res) => {
  const incoming = Array.isArray(req.body?.messages) ? req.body.messages : null;
  if (!incoming || incoming.length === 0 || incoming.length > 20) {
    return res.status(400).json({ error: 'A valid message history is required.' });
  }
  const messages = incoming.map((message) => ({
    role: message?.role,
    content: cleanText(message?.content, 2000),
  }));
  const isValid = messages.every(
    (message) => ['user', 'assistant'].includes(message.role) && message.content,
  );
  if (!isValid) return res.status(400).json({ error: 'The message history is invalid.' });
  if (!process.env.GROQ_API_KEY) {
    console.error('Chat API: GROQ_API_KEY is missing.');
    return res.status(503).json({ error: 'The chat service is temporarily unavailable.' });
  }
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        temperature: 0.5,
        max_tokens: 300,
      }),
      signal: AbortSignal.timeout(15000),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(`Groq returned status ${response.status}`);
    const reply = data.choices?.[0]?.message?.content?.replace(/\*/g, '').trim();
    return res.json({ reply: reply || 'I am unable to process that right now. Please try again.' });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(502).json({ error: 'The assistant is temporarily unavailable.' });
  }
});

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));
app.use(express.static(distDir, { maxAge: '1d', etag: true }));
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api/')) return next();
  return res.sendFile(path.join(distDir, 'index.html'));
});
app.use((_, res) => res.status(404).json({ error: 'Not found.' }));
app.listen(port, () => console.log(`Nexoratel is running on port ${port}`));
