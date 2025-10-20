import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactBody;
    const name = (data.name || '').trim();
    const email = (data.email || '').trim();
    const message = (data.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const toAddress = process.env.CONTACT_TO || 'mytradekit@gmail.com';
    const fromAddress = process.env.CONTACT_FROM || process.env.SMTP_USER || 'no-reply@mytradekit.com';

  let transporter: any;
    let usedEthereal = false;
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      } as any);
    } else {
      // Dev fallback: create a test account on Ethereal for preview
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      usedEthereal = true;
    }

    const subject = `New contact form message from ${name}`;
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#222">
        <h2 style="margin:0 0 8px 0">New Contact Form Submission</h2>
        <p style="margin:0 0 12px 0">You've received a new message from your website contact form.</p>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 8px;font-weight:bold">Name:</td><td style="padding:4px 8px">${name}</td></tr>
          <tr><td style="padding:4px 8px;font-weight:bold">Email:</td><td style="padding:4px 8px">${email}</td></tr>
        </table>
        <div style="margin-top:16px;padding:12px;border:1px solid #eee;border-radius:8px;background:#fafafa;white-space:pre-wrap">${message}</div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject,
      html,
      replyTo: email,
    });

    const previewUrl = usedEthereal ? nodemailer.getTestMessageUrl(info) : undefined;
    return NextResponse.json({ ok: true, previewUrl });
  } catch (err: any) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
