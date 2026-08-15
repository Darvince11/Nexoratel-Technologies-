import process from 'node:process';
import nodemailer from 'nodemailer';

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Please fill in all required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

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
      to: process.env.SMTP_USER,
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
    return new Response(JSON.stringify({ error: error.message || 'Failed to send message.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};