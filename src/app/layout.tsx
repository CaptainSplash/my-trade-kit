import React from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'My Trade Kit',
  description: 'We take the stress out of websites, branding, and online presence so you can focus on what you do best – running your business.',
  keywords: 'web design, branding, website care, digital services, small business',
  authors: [{ name: 'My Trade Kit' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'My Trade Kit - Digital care for busy businesses',
    description: 'We take the stress out of websites, branding, and online presence so you can focus on what you do best – running your business.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0 }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: 'transparent' }}>
        {children}
      </body>
    </html>
  );
}