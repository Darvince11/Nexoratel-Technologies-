import process from 'node:process';
import nodemailer from 'nodemailer';
import { validateContactInput } from '../../src/lib/contactValidation.js';
import { verifyTurnstileToken } from '../../lib/turnstile.js';

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const input = await req.json();
    const { data, errors, isValid } = validateContactInput(input);
    if (data.website) return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    try {
      const remoteIp = req.headers.get('cf-connecting-ip') || req.headers.get('x-nf-client-connection-ip');
      const verified = await verifyTurnstileToken(input.turnstileToken, remoteIp);
      if (!verified) return new Response(JSON.stringify({ error: 'Security verification failed. Please try again.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
      console.error('Turnstile verification error:', error.message);
      return new Response(JSON.stringify({ error: 'Security verification is temporarily unavailable. Please try again.' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
    }
    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Please correct the highlighted fields.', errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const { name, email, phone, message } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Alert sent to your team inbox
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      text: `Client Name: ${name}\nClient Email: ${email}\nClient Phone: ${phone || 'Not provided'}\n\nProject Goals:\n${message}`,
    });

    // 2. Confirmation sent to the client
    await transporter.sendMail({
      from: `"Nexoratel Technologies" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your inquiry — Nexoratel Technologies`,
      text: `Hi ${name},\n\nThank you for reaching out. We have received your project inquiry and will review it within 24 hours.\n\nWarm regards,\nNexoratel Engineering Team`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return new Response(JSON.stringify({ error: 'We could not send your message. Please try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
