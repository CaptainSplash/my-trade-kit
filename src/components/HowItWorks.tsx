import React from "react";

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="mx-auto max-w-6xl py-16 px-4" style={{ backgroundColor: '#f0f0f0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Row 1 */}
        <div style={{ border: '2px solid black', minHeight: '250px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '24px' }}>1. Build a strong foundation</div>
            <div>→ Custom branding, websites, and SEO that set you up for success.</div>
          </div>
        </div>
        <div style={{ border: '2px solid #f86406', minHeight: '250px', padding: '20px', borderRadius: '24px', overflow: 'hidden', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/How it works imagery/website.png" alt="Website" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '5%', clipPath: 'inset(0% round 5%)' }} />
        </div>
        
        {/* Row 2 */}
        <div style={{ border: '2px solid #f86406', minHeight: '250px', padding: '20px', borderRadius: '24px', overflow: 'hidden', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/How it works imagery/growth.png" alt="Growth" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '5%', clipPath: 'inset(0% round 5%)' }} />
        </div>
        <div style={{ border: '2px solid black', minHeight: '250px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '24px' }}>2. Drive consistent growth</div>
            <div>→ Organic and paid marketing that attracts your ideal clients.</div>
          </div>
        </div>
        
        {/* Row 3 */}
        <div style={{ border: '2px solid black', minHeight: '250px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '24px' }}>3. Stay supported, always</div>
            <div>→ Ongoing updates, reports, and account management for peace of mind.</div>
          </div>
        </div>
        <div style={{ border: '2px solid #f86406', minHeight: '250px', padding: '20px', borderRadius: '24px', overflow: 'hidden', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/How it works imagery/care.png" alt="Care" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '5%', clipPath: 'inset(0% round 5%)' }} />
        </div>
      </div>
    </section>
  );
}
