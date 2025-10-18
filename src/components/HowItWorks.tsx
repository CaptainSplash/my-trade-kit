import React from "react";

export default function HowItWorks() {
  return (
    <div style={{ backgroundColor: '#000000', width: '100%' }}>
      <section id="how-it-works" aria-labelledby="how-it-works-heading" className="mx-auto max-w-6xl py-16 px-4" style={{ color: '#ffffff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '16px' }}>
        {/* Box 1 */}
        <div style={{ minHeight: '250px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '24px' }}>1. Build a strong foundation</div>
            <div>→ Custom branding, websites, and SEO that set you up for success.</div>
          </div>
        </div>
        
        {/* Box 2 */}
        <div style={{ minHeight: '250px', padding: '20px', borderRadius: '24px', overflow: 'hidden', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/How it works imagery/website.png" alt="Website" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '5%', clipPath: 'inset(0% round 5%)' }} />
        </div>
        
        {/* Box 3 */}
        <div className="how-it-works-box-3" style={{ minHeight: '250px', padding: '20px', borderRadius: '24px', overflow: 'hidden', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/How it works imagery/growth.png" alt="Growth" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '5%', clipPath: 'inset(0% round 5%)' }} />
        </div>
        
        {/* Box 4 */}
        <div className="how-it-works-box-4" style={{ minHeight: '250px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '24px' }}>2. Drive consistent growth</div>
            <div>→ Organic and paid marketing that attracts your ideal clients.</div>
          </div>
        </div>
        
        {/* Box 5 */}
        <div className="how-it-works-box-5" style={{ minHeight: '250px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '24px' }}>3. Stay supported, always</div>
            <div>→ Ongoing updates, reports, and account management for peace of mind.</div>
          </div>
        </div>
        
        {/* Box 6 */}
        <div className="how-it-works-box-6" style={{ minHeight: '250px', padding: '20px', borderRadius: '24px', overflow: 'hidden', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/How it works imagery/care.png" alt="Care" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '5%', clipPath: 'inset(0% round 5%)' }} />
        </div>
      </div>
      </section>
    </div>
  );
}
