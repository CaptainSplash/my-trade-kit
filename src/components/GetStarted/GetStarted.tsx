import React from 'react';

const GetStarted: React.FC = () => {
  return (
    <section id="get-started" className="section-spacing" style={{ backgroundColor: 'rgba(23, 112, 77, 0.05)' }}>
      <div className="container">
        <h2 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '32px', color: '#17704d', textAlign: 'left', marginBottom: '32px', marginLeft: 0 }}>
          We Make It Easy to Get Started
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', maxWidth: '1200px', margin: '0 auto', marginBottom: '24px' }}>
          {/* Image Row */}
          <div style={{ width: '100%', aspectRatio: '1 / 1', backgroundColor: '#ccc', borderRadius: '12px', margin: '0 auto' }}></div>
          <div style={{ width: '100%', aspectRatio: '1 / 1', backgroundColor: '#ccc', borderRadius: '12px', margin: '0 auto' }}></div>
          <div style={{ width: '100%', aspectRatio: '1 / 1', backgroundColor: '#ccc', borderRadius: '12px', margin: '0 auto' }}></div>
          <div style={{ width: '100%', aspectRatio: '1 / 1', backgroundColor: '#ccc', borderRadius: '12px', margin: '0 auto' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Column 1 */}
          <div style={{ background: 'white', border: '2px solid #17704d', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '12px', color: '#17704d' }}>1. Start with a quick chat</h3>
            <p style={{ fontSize: '16px', marginBottom: '12px', color: '#333' }}>
              Tell us what you need help with — websites, socials, ads, SEO, or the full package.
            </p>
            <p style={{ fontSize: '16px', color: '#333' }}>
              You don’t have to figure it out alone. We’ll help you choose what fits.
            </p>
          </div>
          {/* Column 2 */}
          <div style={{ background: 'white', border: '2px solid #17704d', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '12px', color: '#17704d' }}>2. Get your custom plan</h3>
            <p style={{ fontSize: '16px', marginBottom: '12px', color: '#333' }}>
              We’ll build a clear, simple plan based on your goals and budget — no jargon, no confusion.
            </p>
            <p style={{ fontSize: '16px', color: '#333' }}>
              You’ll always know exactly what’s being done and why.
            </p>
          </div>
          {/* Column 3 */}
          <div style={{ background: 'white', border: '2px solid #17704d', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '12px', color: '#17704d' }}>3. We handle the rest</h3>
            <p style={{ fontSize: '16px', marginBottom: '12px', color: '#333' }}>
              We’ll set it up, run it, and keep it updated — whether it’s your site, socials, or search results.
            </p>
            <p style={{ fontSize: '16px', color: '#333' }}>
              You get results without the stress of managing it all.
            </p>
          </div>
          {/* Column 4 */}
          <div style={{ background: 'white', border: '2px solid #17704d', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '12px', color: '#17704d' }}>4. Review & grow</h3>
            <p style={{ fontSize: '16px', marginBottom: '12px', color: '#333' }}>
              We check in regularly, share reports, and fine-tune what’s working.
            </p>
            <p style={{ fontSize: '16px', color: '#333' }}>
              Your digital side keeps improving while you focus on your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
