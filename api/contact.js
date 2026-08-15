import process from 'node:process';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Explicitly load .env.local and fallback to .env
dotenv.config({ path: '.env.local' });
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP Credentials Missing in environment variables.');
    return res.status(500).json({ 
      error: 'Server configuration error: Missing mail credentials.' 
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 1. Notification email sent to your team inbox (Includes Phone Number)
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      text: `Client Name: ${name}\nClient Email: ${email}\nClient Phone: ${phone || 'Not provided'}\n\nProject Goals:\n${message}`,
    });

    // 2. Automated confirmation sent to the client
    await transporter.sendMail({
      from: `"Nexoratel Technologies" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your inquiry — Nexoratel Technologies`,
      text: `Hi ${name},\n\nThank you for reaching out. We have received your project inquiry and will review it within 24 hours.\n\nWarm regards,\nNexoratel Engineering Team`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send message.' });
  }
}