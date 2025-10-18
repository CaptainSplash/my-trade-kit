import React from "react";

export default function HowItWorks() {
  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%' }}>
      <section id="how-it-works" aria-labelledby="how-it-works-heading" className="mx-auto max-w-6xl py-8 px-4" style={{ color: '#000000' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
        {/* Box 1 */}
        <div style={{ minHeight: '160px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '22px' }}>1. Build a strong foundation</div>
            <div style={{ fontSize: '16px' }}>→ Custom branding, websites, and SEO that set you up for success.</div>
          </div>
        </div>
        
        {/* Box 2 */}
        <div style={{ minHeight: '160px', padding: '12px', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '90%', height: '90%', borderRadius: '24px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/How it works imagery/website.png" alt="Website" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        
        {/* Box 3 */}
        <div className="how-it-works-box-3" style={{ minHeight: '160px', padding: '12px', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '90%', height: '90%', borderRadius: '24px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/How it works imagery/growth.png" alt="Growth" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        
        {/* Box 4 */}
        <div className="how-it-works-box-4" style={{ minHeight: '160px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '22px' }}>2. Drive consistent growth</div>
            <div style={{ fontSize: '16px' }}>→ Organic and paid marketing that attracts your ideal clients.</div>
          </div>
        </div>
        
        {/* Box 5 */}
        <div className="how-it-works-box-5" style={{ minHeight: '160px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '22px' }}>3. Stay supported, always</div>
            <div style={{ fontSize: '16px' }}>→ Ongoing updates, reports, and account management for peace of mind.</div>
          </div>
        </div>
        
        {/* Box 6 */}
        <div className="how-it-works-box-6" style={{ minHeight: '160px', padding: '12px', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '90%', height: '90%', borderRadius: '24px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/How it works imagery/care.png" alt="Care" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
