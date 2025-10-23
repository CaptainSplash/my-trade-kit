import '../styles/globals.css';

export const metadata = {
  title: 'My Trade Kit',
  description: 'We take the stress out of websites, branding, and online presence so you can focus on what you do best – running your business.',
  keywords: 'web design, branding, website care, digital services, small business',
  authors: [{ name: 'My Trade Kit' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  metadataBase: new URL('https://mytradekit.vercel.app'),
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
        <link rel="icon" type="image/png" href="/White on black.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Liter&family=Special+Gothic+Expanded+One&display=swap" 
          rel="stylesheet" 
        />
        {/* Preload critical hero background image */}
        <link rel="preload" href="/Brand gradients.png" as="image" />
        {/* Preload critical logo */}
        <link rel="preload" href="/Logo white.png" as="image" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: 'transparent' }}>
        {children}
      </body>
    </html>
  );
}